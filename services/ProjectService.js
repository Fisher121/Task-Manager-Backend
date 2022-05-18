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
    async InsertProject(pool,name){
        return await this.projectDAO.InsertProject(pool,name)
    }
    async DeleteProject(pool,projID){
        return await this.projectDAO.DeleteProject(pool,projID)
    }
    async PutProject(pool,projID,name){
        return await this.projectDAO.PutProject(pool,projID,name)
    }
}
module.exports = ProjectService