const express = require("express");
const router = express.Router();
const { getStudents, getStudent, registerStudent, loginStudent } = require("../controllers/studentController");

router.get("/", getStudents).get("/:id", getStudent);
router.post("/register", registerStudent);
router.post("/login", loginStudent);

module.exports = router;