const user_service = require("../services/UserService")
const getReqData = require("../utils")

class UserController{
    constructor(){
        this.userService = new user_service()
    }
    async Register(req,res,pool){
        var body = await getReqData(req)
        body = JSON.parse(body)
        res.json(await this.userService.Register(pool,body.username,body.password,body.email,body.role))
    }
    async Login(req,res,pool){
        var body = await getReqData(req)
        body = JSON.parse(body)
        res.json(await this.userService.Login(pool,body.email,body.password)) 
    }
    
}
module.exports = UserController