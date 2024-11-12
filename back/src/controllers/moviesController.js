// const {getMovies} = require("../services/moviesService");//cambio 1
const {post} =require("../server");
const moviesService = require("../services/moviesService");



module.exports = {

    getMoviesController : async (req,res,next) => {
        try{const movies = await moviesService.getMovies();
        res.status(200).json(movies);
        }catch (error){
            res.status(500).json(error);
        }
    },

    createMovie: async (req, res) => {
        try{
            const {title, year,director, genre, rate , poster} = req.body;
            const newMovie = await moviesService.createMovie({title, year,director, genre, rate , poster});
            res.status(201).json(newMovie);
        }catch(error){
            res.status(500).json(error);
        }
    },


};

