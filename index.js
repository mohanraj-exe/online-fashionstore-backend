const express = require("express");
const app = express();
const dotenv = require("dotenv");

// imports
const dbConnect = require("./dbConnect");

// routes
const productRoutes = require("./routes/products");
const userRoutes = require("./routes/users");

dotenv.config();
dbConnect();

app.use(express.json());
app.use('/api/products', productRoutes)
app.use('/api/users', userRoutes)

const port = process.env.PORT || 8081
app.listen(port, ()=>{
    console.log(`port started listening ${port}`)
})