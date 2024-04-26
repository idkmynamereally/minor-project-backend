const express = require("express");
const router = express.Router();

const { getProjects, getProject, createProject } = require("../controllers/projectController");

router.get("/", getProjects).get("/:id", getProject);
router.post("/create", createProject);