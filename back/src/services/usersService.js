const User = require("../models/User");

module.exports = {
    getUsers: async () => {
        try{
        const users = await User.find();
        return users;
          }
        catch(error) {
            throw new Error('Error al crear la película');

        }
    },

     getUserById : async (id) =>{
        const user = await User.findById(id);
        return user;
    },

    findUserByName: async (name) =>{
        const user = await User.findOne({name});
        return user;
    },

    createUser: async (user) =>{
        const newUser = await User.create(user);
        return newUser;
    },
};





// const users = [
//     {
//         name: "John Doe",
//         email: "jdoe@mail.com",
//     },
// ];

// module.exports = {
//     getUsers: async () => {
//         return users;
//     },

//     createUser: async (name,email) =>{
//         users.push({name, email});
//         return {name, email};
//     },
// };