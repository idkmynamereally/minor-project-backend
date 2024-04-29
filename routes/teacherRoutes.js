const express = require("express");
const router = express.Router();
const { getTeachers, getTeacher, registerTeacher, loginTeacher, currentTeacher, getMentorProjects } = require("../controllers/teacherController");
const validateToken = require("../controllers/middleware/validateTokenHandler");

router.post("/register", registerTeacher).post("/login", loginTeacher);
router.get("/current", currentTeacher);
router.get("/getMentorProjects", getMentorProjects);
router.get("/", getTeachers).get("/:id", getTeacher);

module.exports = router;