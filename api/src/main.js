require("dotenv").config();
const app = require("express")();
const server = require("http").createServer(app);
const io = require("socket.io")(server, {
	cors: {
		origin: "*",
	},
});

io.on("connection", (socket) => {
	socket.on("set_username", (username) => {
		socket.data.username = username;
		io.emit("new_user", { username, userId: socket.id });
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
