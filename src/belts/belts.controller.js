const service = require("./belts.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function beltExists(req, res, next) {
  const belt = await service.readBelt(req.params.beltId);
  if (belt) {
    res.locals.belt = belt;
    return next();
  }
  next({ status: 404, message: `Belt cannot be found.` });
}

//----------------------------------------------------------------

async function create(req,res){
  const newBelt = req.body;
  const data = await service.createBelt(newBelt);
  return res.status(201).json({ data });
};

async function listBelts(req,res){
  const data = await service.listBelts();
  return res.json({ data });
}

async function readBelt(req,res){
  const beltId = req.params.beltId;
  const data = await service.readBelt(beltId);
  return res.json({ data });
}

async function update(req, res) {
  const updatedBelt = {
    ...req.body,
    belt_id: res.locals.belt.belt_id,
  };
  const data = await service.updateBelt(updatedBelt);
  res.json({ data });
}

async function destroy(req, res) {
  const beltId = req.params.beltId;
  await service.destroy(beltId);
  res.sendStatus(204);
}

module.exports = {
  create: [asyncErrorBoundary(create)],
  list: [asyncErrorBoundary(listBelts)],
  read: [beltExists, asyncErrorBoundary(readBelt)],
  update: [beltExists, asyncErrorBoundary(update)],
  destroy: [beltExists, asyncErrorBoundary(destroy)],
};