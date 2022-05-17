const mysql = require('mysql');

class Database{
    constructor(){
        this.pool = mysql.createPool({
            host:'34.116.233.107',
            //socketPath:'/cloudsql/medicineapi:europe-central2:medicinedbinstance', // comment this when running locally
            database: 'TaskDB',
            user:'root',
            password:'1234',
        }) 

    }
}

module.exports = Database