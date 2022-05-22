const task_service = require("../services/TaskService")
const comment_service = require("../services/CommentService")
const user_service = require("../services/UserService")
const getReqData = require("../utils")

class TaskController{
    constructor(){
        this.taskService = new task_service()
        this.commentService = new comment_service()
        this.userService = new user_service()
    }
    async GetTaskByID(req,res,pool){
        var task = await this.taskService.GetTaskByID(pool,req.params.taskID)
        task[0]["comments"] = await this.commentService.GetCommentByTaskID(pool,req.params.taskID)
        task[0]["username"] = await this.userService.GetUsername(pool,task[0]["userid"])
        res.json(task)
    }
    async GetTaskByProjID(req,res,pool){
        var task = await this.taskService.GetTaskByProjID(pool,req.params.projID)
        for(var i = 0;i<task.length;i++){
            task[i]["username"] = await this.userService.GetUsername(pool,task[i]["userid"])
        }
        res.json(task)
    }
    async PutTask(req,res,pool){
        var body = await getReqData(req)
        body = JSON.parse(body)
        res.json(await this.taskService.PutTask(pool,req.params.taskID,body.title,body.description))
        
    }
    async DeleteTask(req,res,pool){
        await this.taskService.DeleteTask(pool,req.params.taskID)
        res.end()
    }
    async InsertTask(req,res,pool){
        var body = await getReqData(req)
        body = JSON.parse(body)
        res.json(await this.taskService.InsertTask(pool,body.projID,body.name,body.description,body.userid))
    }
    async PatchTask(req,res,pool){
        var body = await getReqData(req)
        body = JSON.parse(body)
        if(body.status != undefined){
            this.taskService.PatchStatus(pool,req.params.taskID,body.status)
        }
        if(body.userid != undefined){
            this.taskService.PatchUserID(pool,req.params.taskID,body.userid)
        }
        if(body.description != undefined){
            this.taskService.PatchDescription(pool,req.params.taskID,body.description)
        }
        if(body.name != undefined){
            this.taskService.PatchName(pool,req.params.taskID,body.name)
        }
        res.end()
    }
}
module.exports = TaskController
