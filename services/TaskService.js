const task_dao = require("../DAO/TaskDAO")

class TaskService{
    constructor(){
        this.TaskDAO = new task_dao()
    }
    async InsertTask(pool,projID,name,description){
        return await this.TaskDAO.InsertTask(pool,projID,name,description)
    }
    async GetTaskByID(pool,taskID){
        return await this.TaskDAO.GetTaskByID(pool,taskID)
    }
    async GetTaskByProjID(pool,projID){
        return await this.TaskDAO.GetTaskByProjID(pool,projID)
    }
    async PutTask(pool,taskID,title,description){
        return await this.TaskDAO.PutTask(pool,taskID,title,description)
    }
    async DeleteTask(pool,taskID){
        return await this.TaskDAO.DeleteTask(pool,taskID)
    }
}

module.exports = TaskService