import express from "express";

const server = express();

server.get('/', (request,response) => {
    response.send('hello');
});

server.listen(8080, ()=>{
    console.log('Server is running on port 8080');
});