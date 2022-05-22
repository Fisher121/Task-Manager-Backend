class TaskDAO{
    GetTaskByID(pool,taskID){
        return new Promise((resolve)=>{
            const query = 'SELECT * FROM Tasks WHERE taskid = ?'
            pool.query(query, [taskID] , (error, result)=>{
                if(error) 
                    resolve(error)
                else{
                    resolve(result)
            }
            })
        })
    }
    GetTaskByProjID(pool,projID){
        return new Promise((resolve)=>{
            const query = 'SELECT * FROM Tasks WHERE projid = ?'
            pool.query(query, [projID] , (error, result)=>{
                if(error) 
                    resolve(error)
                else{
                    resolve(result)
            }
            })
        })
    }
    PutTask(pool,taskID,title,description){
        return new Promise((resolve)=>{
            const query = 'UPDATE Tasks SET name = ?, description = ? WHERE taskid = ?'
            pool.query(query, [title,description,taskID] , (error, result)=>{
                if(error) 
                    resolve(error)
                else{
                    resolve(result)
            }
            })
        })
    }
    DeleteTask(pool,taskID){
        return new Promise((resolve)=>{
            const query = 'DELETE FROM Tasks WHERE taskid = ?'
            pool.query(query, [taskID] , (error, result)=>{
                if(error) 
                    resolve(error)
                else{
                    resolve(result)
            }
            })
        })
    }
    InsertTask(pool,projID,name,description,userid){
        console.log("inserting task ")
        return new Promise((resolve)=>{
            const query = 'INSERT INTO Tasks(projid,name,description,userid,status) VALUES (?,?,?,?,"To Do")'
            pool.query(query, [projID,name,description,userid] , (error, result)=>{
                if(error) 
                    resolve(error)
                else{
                    resolve(result)
            }
            })
        })
    }
    PatchStatus(pool,taskid,status){
        return new Promise((resolve)=>{
            const query = 'UPDATE Tasks SET status = ? WHERE taskid = ?'
            pool.query(query, [status,taskid] , (error, result)=>{
                if(error) 
                    resolve(error)
                else{
                    resolve(result)
            }
            })
        })
    }
    PatchUserID(pool,taskid,userid){
        return new Promise((resolve)=>{
            const query = 'UPDATE Tasks SET userid = ? WHERE taskid = ?'
            pool.query(query, [userid,taskid] , (error, result)=>{
                if(error) 
                    resolve(error)
                else{
                    resolve(result)
            }
            })
        })
    }
    PatchDescription(pool,taskid,description){
        return new Promise((resolve)=>{
            const query = 'UPDATE Tasks SET description = ? WHERE taskid = ?'
            pool.query(query, [description,taskid] , (error, result)=>{
                if(error) 
                    resolve(error)
                else{
                    resolve(result)
            }
            })
        })
    }
    PatchName(pool,taskid,name){
        return new Promise((resolve)=>{
            const query = 'UPDATE Tasks SET name = ? WHERE taskid = ?'
            pool.query(query, [name,taskid] , (error, result)=>{
                if(error) 
                    resolve(error)
                else{
                    resolve(result)
            }
            })
        })
    }
}
module.exports =  TaskDAO