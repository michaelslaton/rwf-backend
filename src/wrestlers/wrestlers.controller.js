const service = require("./wrestlers.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function wrestlerExists(req, res, next) {
  const wrestler = await service.readWrestler(req.params.wrestlerId);
  if (wrestler) {
    res.locals.wrestler = wrestler;
    return next();
  }
  next({ status: 404, message: `Wrestler cannot be found.` });
}

//---------------------------------------------------------------------

async function create(req,res){
  const newWrestler = req.body;
  const data = await service.create(newWrestler);
  return res.status(201).json({ data });
}

async function list(req,res){
  const data = await service.listWrestlers();
  return res.json({ data });
};

async function readWrestler(req,res){
  const wrestlerId = req.params.wrestlerId;
  const data = await service.readWrestler(wrestlerId);
  return res.json({ data });
};

async function update(req, res) {
  const updatedWrestler = {
    ...req.body,
    wrestler_id: res.locals.wrestler.wrestler_id,
  };
  const data = await service.updateWrestler(updatedWrestler);
  res.json({ data });
}

async function destroy(req, res) {
  const wrestlerId = req.params.wrestlerId;
  await service.destroy(wrestlerId);
  res.sendStatus(204);
}

module.exports = {
  create: [asyncErrorBoundary(create)],
  list: [asyncErrorBoundary(list)],
  read: [wrestlerExists, asyncErrorBoundary(readWrestler)],
  update: [wrestlerExists, asyncErrorBoundary(update)],
  destroy: [wrestlerExists, asyncErrorBoundary(destroy)],
};