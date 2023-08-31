const express = require("express");
const http = require("http");

const app = express();
const server = http.createServer(app);
const PORT = 2001;

app.get("/",(req,resp)=>{
    resp.send("hello server");
})

server.listen(PORT,()=>{
    console.log(`server is running on port = 127.0.0.1:${PORT}`);
})