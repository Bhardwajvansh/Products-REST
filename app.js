require("dotenv").config();
const express = require("express");
const app = express()
const connect = require("./db/connect")
const PORT = process.env.PORT || 5000;
const product_route = require("./routes/product")



app.get("/",(req,res)=>{
    res.send("hello ji")
})

app.use("/api/products", product_route)

const start = async ()=>{
    try {
        await connect(process.env.MONGODB_URL)
        app.listen(PORT,()=>{
            console.log("connected!");
        });
    } catch (error) {
        console.log(error);
    }
}

start()