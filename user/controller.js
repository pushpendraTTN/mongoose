const item = require('./service');

module.exports.create = async (req, res) => {
  console.log('IN Controller.JS File..Create ');
  const response = await item.create(req.body);
  res.send(response);
  console.log(response);
};


// module.exports.createAndUpdate = async (req, res) => {
//   console.log('IN Controller.JS File..Create ');
//   const response = await item.createAndUpdate(req.body);
//   res.send(response);
//   console.log(response);
// };

module.exports.getAll = async (req, res) => {
  console.log('IN Controller.JS File...getAll');
  const response = await item.getAll();
  res.send(response);
};


module.exports.delete = async (req, res) => {
  console.log('IN Controller.JS File...Delete');
  const response = await item.delete(req.params);
  res.send(response);
};



module.exports.update = async (req, res) => {
  console.log('IN Controller.JS File...Update');
  console.log(req.params);
  const response = await item.update(req.params,req.body);
  res.send(response);
};

