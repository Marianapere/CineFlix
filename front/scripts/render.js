const moviesContainer=$("#movies-container")








const renderCards=(data,error) =>{
data.forEach((movie,index) => {
                // Crear una tarjeta para cada película
                const movieCard = $("<div>").addClass("movie-card"); //movie-card
                const moviTitle = $("<h3>").text(movie.title);
                // Añadir la imagen de la película a la tarjeta
                const movieImage = $("<img>").addClass("movie-image").attr(
                    "src", movie.poster).attr("alt",movie.title);
                
                    movieCard.append(moviTitle,movieImage);

                    moviesContainer.append(movieCard);

              
                // Añadir los detalles de la película
                const movieDetails = $("<div>").addClass("movie-details");
                const movieYear=$("<p>").text("Year: " + movie.year);
                const movieDirector=$("<p>").text("Director: " + movie.director);
                const movieDuration=$("<p>").text("Duration: " + movie.duration);
                const movieGenre=$("<p>").text("Genre: " + movie.genre.join(", "));
                const movieRate=$("<p>").text("Rate: " + movie.rate);
               
                
                movieDetails.append(movieYear,movieDirector, movieDuration, movieGenre,
                    movieRate);

                
                movieCard.append(movieDetails);
               
            });
        }

        module.exports=renderCards;
