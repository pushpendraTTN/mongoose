const {
  InventoryModel
} = require('./model');

//Post method...

module.exports.create = async ({Name,Quantity,IsSanitized,Unit,Category,Location}) => {
  console.log("Inside Service..create");
  const inventory = await InventoryModel.find();
  
 if(inventory.findIndex(item =>item.name == Name )>=0){
   
   const item = await InventoryModel.findOneAndUpdate({name: Name}, {$set: {
    name: Name,
    quantity: Quantity,
    isSanitized: IsSanitized,
    unit: Unit,
    category: Category,
    location: Location
      }},)
      .then((res)=>{
        return res;
      });
 }
 else{
  const item = await InventoryModel.create({
      name: Name,
      quantity: Quantity,
      isSanitized: IsSanitized,
      unit: Unit,
      category: Category,
      location: Location
    });
  return item;
 }
}  



//Get method....
module.exports.getAll = async () => {
  console.log("Inside Service..getAll");
  const item = await InventoryModel.find();
  return item;
};

//delete method...
module.exports.delete = async ({ id }) => {
  const response = await InventoryModel.deleteMany({
    _id: id
  });
  return response;
};


//Patch method...
module.exports.update = async ({ id },body) => {
  console.log(id);
  console.log(body);
  const item = await InventoryModel.updateOne({_id:id},
    body
  );
  return item;
};
