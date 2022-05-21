var express = require("express");


const db = require("./DAO/Database") 
const ProjectController = require("./controllers/ProjectController")
const TaskController = require("./controllers/TaskController");
const UserController = require("./controllers/UserController");

var database = new db()
var projectController = new ProjectController()
var taskController = new TaskController()
var userController = new UserController()

var app = express();



//Project endpoints

app.get("/", (req, res, next) => {

    res.json({status:"not found!"})
   
});
app.get("/projects", async (req, res, next) => {

    var projects  = await projectController.GetAllProjects(database.pool)
    res.json(projects)
   
});
app.get("/project/:projID", async (req, res, next) => {

    var project = await projectController.GetProjectByID(database.pool,req)
    res.json(project)
});
app.get("/projects/:userid", async (req, res, next) => {

    projectController.GetProjectByuserID(req,res,database.pool)
});

app.post("/project", (req, res, next) => {
   projectController.InsertProject(req,res,database.pool)
});
app.post("/project/add", (req, res, next) => {
    projectController.AddUserToProject(req,res,database.pool)
 });

app.put("/project/:projID", (req, res, next) => {

    projectController.PutProject(req,res,database.pool)
   
});
app.delete("/project/:projID", (req, res, next) => {

    projectController.DeleteProject(req,res,database.pool)
   
});

//Task Endpoints

app.get("/tasks/:projID", (req, res, next) => {

    taskController.GetTaskByProjID(req,res,database.pool)
   
})
app.get("/task/:taskID", (req, res, next) => {

    taskController.GetTaskByID(req,res,database.pool)
   
});


app.post("/task", (req, res, next) => {

    taskController.InsertTask(req,res,database.pool)    
   
});
app.put("/task/:taskID", (req, res, next) => {

    taskController.PutTask(req,res,database.pool)
   
});

app.delete("/task/:taskID", (req, res, next) => {

    taskController.DeleteTask(req,res,database.pool)
   
});

app.patch("/task/:taskID", (req, res, next) => {

    console.log("patch task")
   
});

//Comment endpoints
app.post("/comment", (req, res, next) => {

    console.log("post comment")
   
});
app.get("/comments/:taskID", (req, res, next) => {

    res.json("get comments from a task");
   
})
app.get("/comment/:commentID", (req, res, next) => {

    res.json("get comment by id");
   
})
app.delete("/comment/:commentID", (req, res, next) => {

    console.log("delete comment")
   
});

app.patch("/comment/:commentID", (req, res, next) => {

    console.log("patch task")
   
});

//User Endpoints
app.post("/register", (req, res, next) => {

    userController.Register(req,res,database.pool)
   
});
app.post("/login", (req, res, next) => {

    userController.Login(req,res,database.pool)
   
});
app.listen(800, () => {

 console.log("Server running on port 800");

});