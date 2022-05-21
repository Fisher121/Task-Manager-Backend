const comment_dao = require("../DAO/CommentDAO")

class CommentService{
    constructor(){
        this.commentDAO = new comment_dao()
    }
    async AddComment(pool,userid,taskid,description){
        return await this.commentDAO.AddComment(pool,userid,taskid,description)
    }
    async GetCommentByTaskID(pool,taskid){
        return await this.commentDAO.GetCommentByTaskID(pool,taskid)
    }
}
module.exports = CommentService