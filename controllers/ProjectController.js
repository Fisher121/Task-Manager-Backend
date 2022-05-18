const project_service = require("../services/ProjectService")
const getReqData = require("../utils")

class ProjectController{
    constructor(){
        this.projectService = new project_service()
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
    }

}
module.exports = ProjectController