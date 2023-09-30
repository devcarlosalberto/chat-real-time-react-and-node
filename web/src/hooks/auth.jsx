import { useState, createContext, useContext } from "react";

const AuthContext = createContext({});

// eslint-disable-next-line react/prop-types
function AuthProvider({ children }) {
	const [data, setData] = useState({});
	const [socket, setSocket] = useState(null);

	async function signIn({ username, socket }) {
		setSocket(socket);
		setData({ username });
	}

	async function signOut() {
		setData({});
		socket.disconnect();
		setSocket(null);
	}

	return (
		<AuthContext.Provider value={{ signIn, signOut, socket, user: data }}>
			{children}
		</AuthContext.Provider>
	);
}

function useAuth() {
	const context = useContext(AuthContext);
	return context;
}

// eslint-disable-next-line react-refresh/only-export-components
export { AuthProvider, useAuth };
