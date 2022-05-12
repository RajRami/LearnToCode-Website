const express = require('express');
const app = express();
// const path = require('path');
const port = 5500;
const mongoose = require('mongoose');

main().catch(err => console.log(err));

async function main() {
    await mongoose.connect('mongodb://localhost:27017/learningContact');
}
const learningSchema = new mongoose.Schema({
    name: String,
    email: String,
    phone: String,
    address: String,
    message: String
});
const data = mongoose.model('code', learningSchema);

// app.get("/", (req, res) => {
//     res.send("This is the first express app by RAJ LEARN TO CODE")
// });

app.post('/contact', (req, res)=>{
    if(input != null){
        var myData = new data(req.body);
        console.log("function called");
        myData.save().then(()=>{
            res.send("Data has been stored successfully");
        }).catch(()=>{
            res.send("Data was not stored ")
        });
    }else{
        res.send("Please fill all the fields");
    }
});
app.listen(port, ()=>{
    console.log(`This application is started succesfully on port ${port}`)
});