const project_service = require("../services/ProjectService")
const user_service = require("../services/UserService")
const getReqData = require("../utils")

class ProjectController{
    constructor(){
        this.projectService = new project_service()
        this.userService = new user_service()
    }
    GetAllProjects(pool){
        return this.projectService.GetAllProjects(pool)
    }
    GetProjectByID(pool,req){
        return this.projectService.GetProjectByID(pool,req.params.projID)
    }
    async InsertProject(req,res,pool){
        var body = await getReqData(req)
        body = JSON.parse(body)
        await this.projectService.InsertProject(pool,body.name)
        res.end()
    }

    async DeleteProject(req,res,pool){
        await this.projectService.DeleteProject(pool,req.params.projID)
        res.end()
    }
    async PutProject(req,res,pool){
        var body = await getReqData(req)
        body = JSON.parse(body)
        await this.projectService.PutProject(pool,req.params.projID,body.name)
        res.end()
    }
    async AddUserToProject(req,res,pool){
        var body = await getReqData(req)
        body = JSON.parse(body)
        await this.projectService.AddUserToProject(pool,body.projid,body.userid)
        res.end()
    } 
    async GetProjectByuserID(req,res,pool){
        var role = await this.userService.GetRole(pool,req.params.userid)
        if(role[0].role == 1){
            console.log("admin")
            res.json(await this.projectService.GetAllProjects(pool))
        }else{
            res.json(await this.projectService.GetProjectByuserID(pool,req.params.userid))
        }
        //
    }

}
module.exports = ProjectController