const mongoose = require("mongoose");

const userSchema = new mongoose.Schema({
    //le pasamos un iibj cuyo valor es el tipo de dato
    name: String,
    email: String,
    age: Number,
});


const User = mongoose.model("User", userSchema);

module.exports = User;


