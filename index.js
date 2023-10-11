import express from "express";
import bodyParser from "body-parser";

const app = express();
const port = 3000;
const Item = [];
const workItem =[];
const date = new Date().getDate();
const day = new Date().getDay();
const year = new Date().getFullYear();

const weekdays = ["Monday","Tuesday","Wednesday","Thusrday","Friday","Saturday","Sunday"];

const currentDay = weekdays[day-1];


app.use(bodyParser.urlencoded({ extended: true }));
app.use(express.static("public"));


app.get('/',(req,res)=>{
    res.render("index.ejs",{Item})
   
})

app.post('/submit',(req,res)=>{
    const {Item: newData} = req.body;
    Item.push(newData)
    res.render("index.ejs",{Item})

})
app.get('/workList',(req,res)=>{
    res.render("workList.ejs",{workItem})
})

app.post('/workList',(req,res)=>{
    const {workItem: Data} = req.body;
    workItem.push(Data)
    res.render("workList.ejs",{workItem})

})
app.listen(port,()=>{
    console.log("Server is running on port",port);
})

