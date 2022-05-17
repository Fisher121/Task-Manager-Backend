const project_dao = require("../DAO/ProjectDAO")

class ProjectService{
    constructor(){
        this.projectDAO = new project_dao()
    }
    async GetAllProjects(pool){
        return await this.projectDAO.GetAllProjects(pool)
    }
    async GetProjectByID(pool,projID){
        return await this.projectDAO.GetProjectByID(pool,projID)
    }
}
module.exports = ProjectService