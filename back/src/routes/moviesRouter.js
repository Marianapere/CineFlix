
const { Router } = require("express");
const moviesController = require("../controllers/moviesController");
const moviesRouter = Router();

moviesRouter.get("/movies",moviesController.getMoviesController);

moviesRouter.post("/movies", moviesController.createMovie);
// moviesRouter.post("/movies", ***********);
//moviesRouter.delete("/",()=>);

module.exports = moviesRouter;



// const {Router} = require("express");
// const movieController  = require("../controllers/movieController");


// const movieRouter = Router();

// movieRouter.get("/", movieController.getAllMovies); 

// module.exports = movieRouter;