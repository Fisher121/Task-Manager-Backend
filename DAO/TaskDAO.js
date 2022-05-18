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
        console.log(taskID)
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
    InsertTask(pool,projID,name,description){
        return new Promise((resolve)=>{
            const query = 'INSERT INTO Tasks(projid,name,description) VALUES (?,?,?)'
            pool.query(query, [projID,name,description] , (error, result)=>{
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