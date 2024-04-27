const express = require("express");
const router = express.Router();

const { getStudents, getStudent, registerStudent, loginStudent, currentStudent } = require("../controllers/studentController");
const validateToken = require("../controllers/middleware/validateTokenHandler");

router.post("/register", registerStudent);
router.post("/login", loginStudent);
router.get("/", getStudents).get("/current", currentStudent).get("/:id", getStudent);

module.exports = router;