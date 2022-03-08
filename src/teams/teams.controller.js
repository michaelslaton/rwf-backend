const service = require("./teams.service");
const asyncErrorBoundary = require("../errors/asyncErrorBoundary");

async function teamExists(req, res, next) {
  const team = await service.readTeam(req.params.teamId);
  if (team) {
    res.locals.team = team;
    return next();
  }
  next({ status: 404, message: `Team cannot be found.` });
}

//----------------------------------------------------------------

async function create(req,res){
  const newTeam = req.body;
  const data = await service.createTeam(newTeam);
  return res.status(201).json({ data });
};

async function list(req,res){
  const data = await service.listTeams();
  return res.json({ data });
};

async function readTeam(req,res){
  const teamId = req.params.teamId;
  const data = await service.readTeam(teamId);
  return res.json({ data });
};

async function update(req, res) {
  const updatedTeam = {
    ...req.body,
    team_id: res.locals.team.team_id,
  };
  const data = await service.updateTeam(updatedTeam);
  res.json({ data });
}

async function destroy(req, res) {
  const teamId = req.params.teamId;
  await service.destroy(teamId);
  res.sendStatus(204);
}

module.exports = {
  create: [asyncErrorBoundary(create)],
  list: [asyncErrorBoundary(list)],
  read: [teamExists, asyncErrorBoundary(readTeam)],
  update: [teamExists, asyncErrorBoundary(update)],
  destroy: [teamExists, asyncErrorBoundary(destroy)],
};