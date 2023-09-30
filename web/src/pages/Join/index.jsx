import { useRef } from "react";
import { HiOutlineChatAlt as IconLogin } from "react-icons/hi";

import { Container, GroupInput, Button } from "./styles";

import io from "socket.io-client";

import { useAuth } from "../../hooks/auth";

export function Join() {
	const { signIn } = useAuth();

	const usernameRef = useRef();

	const handleSubmit = async () => {
		const username = usernameRef.current.value;

		if (!username.trim()) return;

		// const socket = await io.connect("http://localhost:3333");
		const socket = await io.connect("https://chatrealtimereactandnode-api.onrender.com");
		socket.emit("set_username", username);
		signIn({ username, socket });
	};

	return (
		<Container>
			<h1>Participar</h1>
			<GroupInput>
				<label htmlFor="username">Nome de usuário</label>
				<input
					ref={usernameRef}
					type="text"
					placeholder="Escolha um nome de usuário"
					id="username"
				/>
			</GroupInput>
			<Button onClick={handleSubmit}>
				<span>Entrar</span>
				<IconLogin size={18} />
			</Button>
		</Container>
	);
}
