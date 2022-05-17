var express = require("express");


const db = require("./DAO/Database") 
const ProjectController = require("./controllers/ProjectController")

var database = new db()
var projectController = new ProjectController()

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

app.post("/project", (req, res, next) => {

    console.log("post proj")
   
});

app.put("/project/:projID", (req, res, next) => {

    console.log("put proj")
   
});
app.delete("/project/:projID", (req, res, next) => {

    console.log("delete proj")
   
});

//Task Endpoints

app.get("/tasks/:projID", (req, res, next) => {

    res.json("get tasks");
   
})
app.get("/task/:taskID", (req, res, next) => {

    res.json("get task");
   
});


app.post("/task", (req, res, next) => {

    console.log("post task")
   
});
app.put("/task/:taskID", (req, res, next) => {

    console.log("put task")
   
});

app.delete("/task/:taskID", (req, res, next) => {

    console.log("delete task")
   
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

    console.log("register user")
   
});
app.post("/login", (req, res, next) => {

    console.log("login user")
   
});
app.listen(800, () => {

 console.log("Server running on port 800");

});