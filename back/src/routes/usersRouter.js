const { Router } = require("express");
const usersController = require("../controllers/usersController");

const router = Router();

router.get("/users", usersController.getUsers);
router.get("/users/byName", usersController.getUserByName);
router.get("/users/:id", usersController.getUserById);
router.post("/users", usersController.createUser);

module.exports = router;//users




