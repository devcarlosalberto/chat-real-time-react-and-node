require("dotenv").config();
const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
	cors: {
		origin: process.env.HOST,
	},
});

io.on("connection", (socket) => {
	console.log("User connected!", socket.id);

	// eslint-disable-next-line no-unused-vars
	socket.on("disconnect", (reason) => {
		console.log("User disconected!", socket.id);
	});

	socket.on("set_username", (username) => {
		socket.data.username = username;
	});

	socket.on("message", (text) => {
		io.emit("receive_message", {
			text,
			authorId: socket.id,
			author: socket.data.username,
		});
	});
});

const PORT = process.env.PORT || 3333;
server.listen(PORT, () =>
	console.log(`Server running on http://localhost:${PORT}`)
);
