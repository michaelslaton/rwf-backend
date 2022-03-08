const express = require("express");
const app = express();
const morgan = require("morgan");
const notFoundHandler = require("./errors/notFoundHandler");
const errorHandler = require("./errors/errorHandler");
const cors = require("cors");

// Routers
const wrestlersRouter = require("./wrestlers/wrestlers.router")
const beltsRouter = require("./belts/belts.router")
const matchesRouter = require("./matches/matches.router")
const teamsRouter = require("./teams/teams.router")
 
app.use(express.json());
app.use(morgan("dev"));
app.use(cors())
app.use("/teams", teamsRouter)
app.use("/wrestlers", wrestlersRouter)
app.use("/belts", beltsRouter)
app.use("/matches", matchesRouter)
 
//Not found handler
app.use(notFoundHandler);

//error handler
app.use(errorHandler);
 
module.exports = app;