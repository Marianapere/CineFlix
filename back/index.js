 const server = require("./src/server");
 const dbCon = require("./src/config/dbCon");

 dbCon().then(
    
    (res)=>{  
            const PORT =3000;
            server.listen(PORT, () => { 
                console.log(`Server is running on port ${PORT}`);
                                      }
                         );
           }
 )
 .catch((err)=>{
            console.log("Error al conectar la BDD");
 });











