const http = require("http");
const app = require('./app');
const server = http.createServer(app);

const { API_PORT } = process.env;
const port = process.env.port || API_PORT;

//listening to server
server.listen(port, () =>{
    console.log("Server is running on port "+ port);
})