var express = require('express');
var app = express();
var server = require('http').createServer(app);
var port = process.env.PORT;//process.env.PORT
var io = require('socket.io').listen(server);
server.listen(port);

app.get("/", function(req, res){
    res.send("Welcome to System design by Khải Trần with \nport : " + port + " version 0.0.3");
});

var idModel = "";
var flagModelOnline = false;

io.sockets.on('connection', function (socket) {
    socket.emit('message', "Welcome to the system");
	console.log('Has connection');
	
	socket.on('disconnect', function (){
		console.log('Disconnect ' + socket.id);
		if (socket.id == idModel){
			console.log('Model offline');
			flagModelOnline = false;
			var string = '{"status" : "off"}';
			var obj = JSON.parse(string);
			io.sockets.emit('serversendclient_2', obj);
		}
	});
	
	socket.on('requestmodelonline', function (data){
		var string = '{"status" : "off"}';
		var obj = JSON.parse(string);
		if (flagModelOnline){
			obj.status = "on";
		}else{
			obj.status = "off";
		}
		socket.emit('resultmodelonline', obj);
	});
	
    socket.on('modelsenddata_1', function (data) {
		console.log("temp/hum: " + data.toString());
        io.sockets.emit('serversendclient_1', data);
    });
	
	socket.on('modelsenddata_2', function (data) {
		console.log('Model online ' + socket.id);
		flagModelOnline = true;
		idModel = socket.id;
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
		console.log("status motor on/off" + data.toString());
    });
	
	socket.on('clientsenddata_2', function (data) {
        io.sockets.emit('serversendmodel_2', data);
		console.log("status motor auto" + data.toString());
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

console.log('Welcome');