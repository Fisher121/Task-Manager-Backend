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

}

module.exports = ProjectDAO