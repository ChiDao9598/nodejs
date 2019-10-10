const mysql = require('mysql');
var express = require("express");
var app = express();
const bodyparser = require('body-parser');

app.use(express.static("public"));
app.use(express.urlencoded({extended: true}));
app.use(bodyparser.json());
app.set("view engine", "ejs");
app.set("views","./views");

var mysqlConnection = mysql.createConnection({
    host:'localhost',
    user:'root',
    password:'chidao',
    database:'infodb',
    multipleStatements: true
});

mysqlConnection.connect((err)=>{
    if(!err)
    console.log('DB connection succeded');
    else
    console.log('DB connection failed' + JSON.stringify(err,undefined,2));
});

app.listen(7777);
console.log("Server is running localhost:7777");
app.get("/",function(req,res){
    res.render("home");
})

//insert_info

app.post('/insert_info',(req,res)=>{
    let info = req.body;
    var sql = "SET @ID = ?;SET @hoten = ?;SET @numphone = ?;SET @email = ?;SET @job = ?;SET @message = ?; \
    CALL insert_info(@ID,@hoten,@numphone,@email,@job,@message);";
    mysqlConnection.query(sql, [info.ID, info.hoten, info.numphone, info.email, info.job,info.message], (err, rows, fields)=>{
        if(!err)
            res.send(rosws);
        else
        console.log(err);
    })
});
