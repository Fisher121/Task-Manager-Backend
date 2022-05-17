const project_service = require("../services/ProjectService")

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

}
module.exports = ProjectController