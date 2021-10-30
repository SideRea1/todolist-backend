
// const Pool = require('pq')
// const connection = Pool.createConnection({
//     user: "postgres",
//     password: "1970",
//     host: "localhost",
//     port: "5432",
//     database: "node"
// })

// connection.connect((error) => {
//     if(error){
//         return console.log('Ошибка подключения к БД!');
//        }else {
//            return console.log('Успешно!');
//     } 
// })
// module.exports = connection


const Pool = require('pg').Pool
const pool = new Pool({
    user: "postgres",
    password: "1970",
    host: "localhost",
    port: "5432",
    database: "todos"
})

module.exports = pool