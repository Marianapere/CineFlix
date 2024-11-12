

const express = require("express");
const moviesRouter = require("./routes/moviesRouter");  //movies
const usersRouter = require("./routes/usersRouter"); //
const morgan = require("morgan");
const cors = require("cors");

const app = express();

app.use(express.json()); //users
app.use(morgan("dev"));
app.use(cors()); 



app.use(moviesRouter); //movies
app.use(usersRouter); //

// app.use(require("./routes"));//users


module.exports = app;



// funciona solo con movies no incluye users
// const express = require("express");
// const moviesRouter = require("./routes/moviesRouter");
// const morgan = require("morgan");
// const cors = require("cors");

// const app = express();

// app.use(morgan("dev"));
// app.use(cors()); 
// app.use(moviesRouter);

// module.exports = app;







// const express = require ("express");
// const router = require ("./routes/index");
// const morgan = require("morgan");
// const cors = require("cors");

// const app = express();

// //middleware ya pre-definidos
// app.use(morgan("dev"));
// app.use(cors()); // puede administrar solicitud. aceptar o negar el acceso al server. falta terminar de configurar
// app.use(express.json()); //convierte la info que viene en json en un objeto de java script

// //middleware hecho por mi
// app.use((req, res, next)=>{
//     console.log("Estamos pasando por mi propio middleware!");
//     next();
// }); 



// app.use(router);



// module.exports = app;