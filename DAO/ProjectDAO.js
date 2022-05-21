class ProjectDAO{
    GetAllProjects(pool){
        return new Promise((resolve)=>{
            const query = "SELECT * FROM PROJECT"
            pool.query(query, [] , (error, result)=>{
                if(error) 
                    resolve(error)
                else{
                    resolve(result)
            }
            })
        })
    }
    GetProjectByID(pool,projectID){
        return new Promise((resolve)=>{
            const query = 'SELECT * FROM PROJECT WHERE projid = ?'
            pool.query(query, [projectID] , (error, result)=>{
                if(error) 
                    resolve(error)
                else{
                    resolve(result)
            }
            })
        })
    }
    InsertProject(pool,name){
        return new Promise((resolve)=>{
            const query = 'INSERT INTO PROJECT(name) VALUES (?)'
            pool.query(query, [name] , (error, result)=>{
                if(error) 
                    resolve(error)
                else{
                    resolve(result)
            }
            })
        })
    }
    DeleteProject(pool,projID){
        return new Promise((resolve)=>{
            const query = 'DELETE FROM PROJECT where projid = ?'
            pool.query(query, [projID] , (error, result)=>{
                if(error) 
                    resolve(error)
                else{
                    resolve(result)
            }
            })
        })
    }
    PutProject(pool,projID,name){
        return new Promise((resolve)=>{
            const query = 'UPDATE PROJECT SET name = ? WHERE projid = ?'
            pool.query(query, [name,projID] , (error, result)=>{
                if(error) 
                    resolve(error)
                else{
                    resolve(result)
            }
            })
        })
    }
    AddUserToProject(pool,projid,userid){
        console.log(projid)
        return new Promise((resolve)=>{
            const query = 'INSERT INTO ProjectAssignments(userid,projectid) VALUES(?,?)'
            pool.query(query, [userid,projid] , (error, result)=>{
                if(error) 
                    resolve(error)
                else{
                    resolve(result)
            }
            })
        })
    }
    GetProjectByuserID(pool,userid){
        return new Promise((resolve)=>{
            const query = 'SELECT * FROM PROJECT p JOIN ProjectAssignments pa ON p.projid = pa.projectid WHERE userid = ?'
            pool.query(query, [userid] , (error, result)=>{
                if(error) 
                    resolve(error)
                else{
                    resolve(result)
            }
            })
        })  
    }

}

module.exports = ProjectDAO