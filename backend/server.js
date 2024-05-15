const express= require('express');
const cors =require("cors");
const { connectDB } = require('./config/dbConnect');
const { routes } = require('./routes/routes');

const app = express();

app.use(cors());
app.use(express.json());
app.use("/api", routes);

const port = 3030;

connectDB();

app.get("/",(req,res)=>{
    res.send('backend working');
})

app.listen(port,()=>{
    console.log(`Your server started on http://localhost:${port}`);
})