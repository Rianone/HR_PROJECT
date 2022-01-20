let sqlite = require("sqlite3").verbose();
const db = new sqlite.Database("./mac.db",sqlite.OPEN_READWRITE,(err)=>{
    if(err)
        return console.error(error.message);

  console.log("connection succesful")
})

db.run(
    'CREATE TABLE users (name,email,password)'
)


const sql = "INSERT INTO users (name,email,password) VALUES(?,?,?)"
db.run(sql,[`${name}`,`${email}`,`${password}`],(err)=>{
    if(err)
        return console.error(error.message);

  console.log("new row created");
})



const sqlquery = `SELECT * FROM users WHERE email = ${email} AND name = ${name}`
db.all(sqlquery,[],(err,rows)=>{
    if(err)
        return console.error(error.message);
    
    return "valid"
})

db.close((err)=>{
    if(err)
        return console.error(error.message);
})
