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

}

module.exports = ProjectDAO