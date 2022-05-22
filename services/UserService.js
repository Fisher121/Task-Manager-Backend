const user_dao = require("../DAO/UserDAO")

class UserService{
    constructor(){
        this.UserDAO = new user_dao()
    }
    async Register(pool,username,password,email,role){
        return await this.UserDAO.Register(pool,username,password,email,role)
    }
    async Login(pool,email,password){
        return await this.UserDAO.Login(pool,email,password)
    }
    async GetRole(pool,userid){
        return await this.UserDAO.GetRole(pool,userid)
    }
    async GetUsers(pool){
        return await this.UserDAO.GetUsers(pool)
    }
    async GetUsername(pool,userid){
        return await this.UserDAO.GetUsername(pool,userid)
    }
}
module.exports = UserService