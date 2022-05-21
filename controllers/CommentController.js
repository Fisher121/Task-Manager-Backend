const comment_service = require("../services/CommentService")
const getReqData = require("../utils")

class CommentController{
    constructor(){
        this.commentService = new comment_service()
    }
    async AddComment(req,res,pool){
        var body = await getReqData(req)
        body = JSON.parse(body)
        res.json(await this.commentService.AddComment(pool,body.userid,body.taskid,body.description))
    }
}
module.exports = CommentController