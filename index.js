const express = require('express')
const app = express();
const port = process.env.PORT || 5000;
const cors = require('cors')

app.use(cors())
app.use(express.json());

const foods =[
    {id:1,name:"Egg Open Omlete",price:23,rating:5,detail:"For Your Better Health"},
    {id:2,name:"Sweet Bread with Fruits",price:30,rating:5,detail:"For Your Better Health"},
    {id:3,name:"Creamy Burger",price:15,rating:5,detail:"For Your Better Health"},
    {id:4,name:"Brown Bread With Boil Egg with salad",price:20,rating:5,detail:"For Your Bette Health"},
    {id:5,name:"Tri Bread with fruits Dalna",price:25,rating:5,detail:"For Your Better Health"},
    {id:6,name:"Special Bread with Creamy Egg",price:23,rating:5,detail:"For Your Better Health"},
];


app.get('/',(req,res)=>{
    res.send("look vi im express from roy home with auto restart");
})

app.get('/food',(req,res)=>{
   if(req.query.name){
        const search = req.query.name.toLocaleLowerCase();
        const matched = foods.filter(food => food.name.toLocaleLowerCase().includes(search))
        res.send(matched);
   }
   else{
        res.send(foods)
   }
})

app.get('/food/:id',(req,res)=>{
    console.log(req.params);
    const id = parseInt(req.params.id)
    const food = foods.find(u=> u.id === id);
    res.send(food)
})
app.post('/food', (req,res)=>{
    console.log('request',req.body);
    const food = req.body;
    food.id = foods.length +1;
    foods.push(food);
    res.send(food);
})


app.listen(port,()=>{
    console.log("Listening to port",port);
})