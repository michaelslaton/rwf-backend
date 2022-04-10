const router = require("express").Router({ mergeParams: true });
const controller = require("./users.controller");
const methodNotAllowed = require("../errors/methodNotAllowed");
const cors = require("cors");

router
  .route("/login")
  .all(methodNotAllowed);

router
  .route("/")
  .get(controller.listCreators)
  .all(methodNotAllowed);

module.exports = router;