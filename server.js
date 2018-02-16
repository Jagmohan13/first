const hapi = require('hapi');
// const bodyParser = require('hapi-bodyparser');
var routes =require('./Routes/routes')
var dbConnection = require('./dbConnection')
var pack = require('./package')
const Inert = require('inert');
const Vision = require('vision');
var Plugins= require('./Plugin')
const server = new hapi.Server();


// Connecting to server
server.connection({
    host: 'localhost',
    port: 7979
});

server.register(Plugins, function (err) {
    if (err){
        console.log("----",err)
        server.error('Error while loading plugins : ' + err)
    }else {
        server.log('info','Plugins Loaded')
    }
});
    server.start((err) => {
        if (err) {
                throw err;
            }
            console.log('Server running at::::----->' + server.info.uri);
        });

server.route(routes)


