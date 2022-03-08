const router = require("express").Router({ mergeParams: true });
const controller = require("./matches.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");


router
  .route("/:matchId")
  .all(methodNotAllowed);

router
  .route("/")
  .all(methodNotAllowed);

module.exports = router;