class CommentDAO{
    AddComment(pool,userid,taskid,description){
        return new Promise((resolve)=>{
            const query = 'INSERT INTO COMMENTS(userid,taskid,description) VALUES(?,?,?)'
            pool.query(query, [userid,taskid,description] , (error, result)=>{
                if(error) 
                    resolve(error)
                else{
                    resolve(result)
            }
            })
        })
    }
    GetCommentByTaskID(pool,TaskID){
        return new Promise((resolve)=>{
            const query = 'SELECT * FROM COMMENTS WHERE taskid = ?'
            pool.query(query, [TaskID] , (error, result)=>{
                if(error) 
                    resolve(error)
                else{
                    resolve(result)
            }
            })
        })
    }
}
module.exports = CommentDAO