class UserDAO{
    Register(pool,username,password,email,role){
        return new Promise((resolve)=>{
            const query = 'INSERT INTO USERS(username,password,email,role) VALUES (?,?,?,?)'
            pool.query(query, [username,password,email,role] , (error, result)=>{
                if(error) 
                    resolve(error)
                else{
                    resolve(result)
            }
            })
        })
    }
    Login(pool,email,password){
        return new Promise((resolve)=>{
            const query = 'SELECT userid,username,email,role FROM USERS WHERE email = ? AND password = ?'
            pool.query(query, [email,password] , (error, result)=>{
                if(error) 
                    resolve(error)
                else{
                    resolve(result)
            }
            })
        })
    }
    GetRole(pool,userid){
        return new Promise((resolve)=>{
            const query = 'SELECT role FROM USERS WHERE userid = ?'
            pool.query(query, [userid] , (error, result)=>{
                if(error) 
                    resolve(error)
                else{
                    resolve(result)
            }
            })
        })
    }
    GetUsers(pool){
        return new Promise((resolve)=>{
            const query = 'SELECT userid,username FROM USERS WHERE role = 0'
            pool.query(query, [] , (error, result)=>{
                if(error) 
                    resolve(error)
                else{
                    resolve(result)
            }
            })
        })
    }
    GetUsername(pool,userid){
        return new Promise((resolve)=>{
            const query = 'SELECT username FROM USERS WHERE userid = ?'
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

module.exports = UserDAO