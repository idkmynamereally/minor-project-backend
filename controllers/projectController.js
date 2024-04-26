const asyncHandler = require("express-async-handler");
const jwt = require("jsonwebtoken");
const Project = require("../models/projectModel");

const getProjects = asyncHandler(async (req, res) => {
    const projects = Project.find();
    res.status(200).json({ projects });
});

const getProject = asyncHandler(async (req, res) => {
    const project = Project.findById(req.body.id);
    if (!project) {
        res.status(400);
        throw new Error(`Project with id ${req.body.id} not found`);
    }
    req.status(200).json({ project });
})