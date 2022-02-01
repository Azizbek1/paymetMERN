require("dotenv").config();
const express = require("express");
const app = express();
const config = require("config");
const path = require("path");
const dotenv = require("dotenv");
const cors = require("cors");
const connection = require("./db");
const userRoutes = require("./routes/users");
const authRoutes = require("./routes/auth");

// database connection
connection();

// middlewares
app.use(express.json());
app.use(cors());
dotenv.config();
// routes
app.use("/api/users", userRoutes);
app.use("/api/auth", authRoutes);

__dirname = path.resolve()
if(process.env.NODE_ENV === 'production'){
    app.use(express.static(path.join(__dirname, '/frontend/build')))
    app.get("*", (req, res) => {
        res.sendFile(path.resolve(__dirname, "frontend", 'public', 'index.html'))
    })
}else{
    app.get("/", (req,res) => {
        res.send("Api is running")
    })
}



const port = process.env.PORT || config.get("port");
app.listen(port, () => {
    console.log(`Listening on port ${port}...`)
});
