var express = require('express');
var app = express();
var port = process.env.PORT || 5000;

//Template
app.set('views', __dirname + '/template');
app.set('view engine', "jade");
app.engine('jade', require('jade').__express);
app.get("/", function(req, res){
    res.send("Welcome to System design by Khải Trần with \nport : " + port + " version 0.0.2");
});

//Socket
app.use(express.static(__dirname + '/public'));
var io = require('socket.io').listen(app.listen(port, function(){
  console.log('listening on', port);
}));

io.sockets.on('connection', function (socket) {
    //socket.emit('message', { message: 'welcome to the chat' });
	console.log('Has connection');
	
    socket.on('modelsenddata_1', function (data) {
        io.sockets.emit('serversendclient_1', data);
    });
	
	socket.on('modelsenddata_2', function (data) {
        io.sockets.emit('serversendclient_2', data);
    });
	
	socket.on('modelsenddata_3', function (data) {
        io.sockets.emit('serversendclient_3', data);
    });
	
	socket.on('modelsenddata_4', function (data) {
        io.sockets.emit('serversendclient_4', data);
    });
	
	socket.on('modelsenddata_5', function (data) {
        io.sockets.emit('serversendclient_5', data);
    });
	
	socket.on('modelsenddata_6', function (data) {
        io.sockets.emit('serversendclient_6', data);
    });
	
	socket.on('modelsenddata_7', function (data) {
        io.sockets.emit('serversendclient_7', data);
    });
	
	socket.on('modelsenddata_8', function (data) {
        io.sockets.emit('serversendclient_8', data);
    });
	
	socket.on('modelsenddata_9', function (data) {
        io.sockets.emit('serversendclient_9', data);
    });
	
	socket.on('modelsenddata_10', function (data) {
        io.sockets.emit('serversendclient_10', data);
    });
	
	socket.on('clientsenddata_1', function (data) {
        io.sockets.emit('serversendmodel_1', data);
		console.log('status motor on/off', data");
    });
	
	socket.on('clientsenddata_2', function (data) {
        io.sockets.emit('serversendmodel_2', data);
		console.log('status motor auto', data);
    });
	
	socket.on('clientsenddata_3', function (data) {
        io.sockets.emit('serversendmodel_3', data);
    });
	
	socket.on('clientsenddata_4', function (data) {
        io.sockets.emit('serversendmodel_4', data);
    });
	
	socket.on('clientsenddata_5', function (data) {
        io.sockets.emit('serversendmodel_5', data);
    });
	
	socket.on('clientsenddata_6', function (data) {
        io.sockets.emit('serversendmodel_6', data);
    });
	
	socket.on('clientsenddata_7', function (data) {
        io.sockets.emit('serversendmodel_7', data);
    });
	
	socket.on('clientsenddata_8', function (data) {
        io.sockets.emit('serversendmodel_8', data);
    });
	
	socket.on('clientsenddata_9', function (data) {
        io.sockets.emit('serversendmodel_9', data);
    });
	
	socket.on('clientsenddata_10', function (data) {
        io.sockets.emit('serversendmodel_10', data);
    });
});