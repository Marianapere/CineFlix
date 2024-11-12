const mongoose = require("mongoose");

const movieSchema = new mongoose.Schema({
    //esto es un constructor que estoy llamando permite crear el schema
    //le pasamos un iibj cuyo valor es el tipo de dato
   
  title: String,
  year:Number ,
  director: String,
  duration: String,
  genre:[String],
  rate:  Number,
  poster: String,
}
    );


const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
