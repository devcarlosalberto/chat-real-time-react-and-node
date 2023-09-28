import { useRef, useState, useEffect } from "react";

import {
	Container,
	Top,
	ChatMessages,
	MessageReceived,
	MessageSent,
	Bottom,
} from "./styles";

import { useAuth } from "../../hooks/auth";

export function Chat() {
	const { user, socket } = useAuth();

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
		scrollDown();
	}, [messageList]);

	return (
		<Container>
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
							</MessageSent>
						) : (
							<MessageReceived>
								<p>
									<span>{message.author}:</span>{" "}
									{message.text}
								</p>
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
