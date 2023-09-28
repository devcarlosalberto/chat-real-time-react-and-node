import { Routes, Route } from "react-router-dom";

import { Chat } from "../pages/Chat";

export function AppRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Chat />} />
		</Routes>
	);
}
