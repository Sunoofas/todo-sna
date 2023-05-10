const express = require("express");
const cors = require("cors");
const app = express();
const routerIndex = require("./routes")
//Database connection

app.use(cors());
app.use(express.json());
app.use("/api",routerIndex);

app.get('/',(req, res)=>{
    res.json();
});

app.listen(8000, () =>{
    console.log(`Server is running on port 8000`);
});