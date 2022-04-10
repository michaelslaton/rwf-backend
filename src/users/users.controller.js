const service = require("./users.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function listCreators(req,res){
  const data = await service.listCreators();
  return res.json({ data });
}

module.exports={
  listCreators: [asyncErrorBoundary(listCreators)]
};