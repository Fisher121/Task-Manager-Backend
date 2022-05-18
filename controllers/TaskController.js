const { json } = require("express/lib/response")
const { PassThrough } = require("stream")
const task_service = require("../services/TaskService")
const getReqData = require("../utils")

class TaskController{
    constructor(){
        this.taskService = new task_service()
    }
    async GetTaskByID(req,res,pool){
        var task = await this.taskService.GetTaskByID(pool,req.params.taskID)
        res.json(task)
    }
    async GetTaskByProjID(req,res,pool){
        var task = await this.taskService.GetTaskByProjID(pool,req.params.projID)
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
        await this.taskService.InsertTask(pool,body.projID,body.name,body.description)
        res.end()
    }
}
module.exports = TaskController
