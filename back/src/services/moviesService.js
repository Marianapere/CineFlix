const { createMovie } = require("../controllers/moviesController");
const Movie = require("../models/Movie");



module.exports = {
    getMovies : async ()=> {    
              const movies= await Movie.find();
              return movies;
    },

    createMovie: async ({title, year,director, genre, rate , poster}) => {
        try{
       const newMovie =  await Movie.create({title, year,director, genre, rate , poster}); // aca va el 
       newMovie.rate= Number (newMovie.rate) ;
       return newMovie;

        }
        catch(error) {
            throw new Error('Error al crear la película');

        }
    }

};
  