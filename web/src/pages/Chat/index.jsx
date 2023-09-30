import { useRef, useState, useEffect } from "react";
import { ToastContainer, toast, Zoom } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { getUserTimeZone } from "../../utils/getUserTimeZone";
import { convertTimestamp } from "../../utils/convertTimestamp";

import { useAuth } from "../../hooks/auth";

import {
	Container,
	Top,
	ChatMessages,
	MessageReceived,
	MessageSent,
	Bottom,
} from "./styles";

export function Chat() {
	const { user, signOut, socket } = useAuth();

	const notify = (text) =>
		toast.info(text, {
			position: "top-right",
			autoClose: 2000,
			hideProgressBar: false,
			closeOnClick: true,
			pauseOnHover: false,
			draggable: true,
			transition: Zoom,
			theme: "dark",
		});

	const bottomRef = useRef();
	const messageRef = useRef();
	const [messageList, setMessageList] = useState([]);

	const handleSubmit = () => {
		const message = messageRef.current.value;

		if (!message.trim()) return;

		socket.emit("message", message);
		clearInput();
	};

	const scrollDown = () => {
		bottomRef.current.scrollIntoView({ behavior: "smooth" });
	};

	const getEnterKey = (key) => {
		if (key === "Enter") handleSubmit();
	};

	const clearInput = () => {
		messageRef.current.value = "";
	};

	useEffect(() => {
		socket.on("receive_message", (data) => {
			setMessageList((prevState) => [...prevState, data]);
		});
		return () => socket.off("receive_message");
	}, [socket]);

	useEffect(() => {
		socket.on("new_user", (data) => {
			if (data.userId === socket.id) return;
			notify(`${data.username} entrou no chat.`);
		});
		return () => socket.off("new_user");
	}, [socket]);

	useEffect(() => {
		scrollDown();
	}, [messageList]);

	useEffect(() => {
		const heartbeatInterval = setInterval(() => {
			socket.emit("heartbeat");
		}, 3000);

		socket.on("disconnect", () => {
			signOut();
		});

		return () => {
			clearInterval(hearbeatInterval);
		};
	}, []);

	return (
		<Container>
			<ToastContainer />
			<Top>
				<div>
					<h1>Chat</h1>
				</div>
				<div>
					<p>
						Olá, <span>{user.username}</span>
					</p>
				</div>
			</Top>
			<ChatMessages>
				{messageList.map((message, index) => (
					<div key={index}>
						{message.authorId === socket.id ? (
							<MessageSent>
								<p>{message.text}</p>
								<span>
									{convertTimestamp(
										message.timestamp,
										getUserTimeZone()
									)}
								</span>
							</MessageSent>
						) : (
							<MessageReceived>
								<p>
									<span>{message.author}:</span>{" "}
									{message.text}
								</p>
								<span>
									{convertTimestamp(
										message.timestamp,
										getUserTimeZone()
									)}
								</span>
							</MessageReceived>
						)}
					</div>
				))}
				<div ref={bottomRef} />
			</ChatMessages>
			<Bottom>
				<input
					ref={messageRef}
					onKeyDown={(e) => getEnterKey(e.key)}
					type="text"
					placeholder="Mensagem"
				/>
				<button onClick={handleSubmit}>Enviar</button>
			</Bottom>
		</Container>
	);
}
