import { BrowserRouter } from "react-router-dom";

import { AppRoutes } from "./app.routes";
import { AuthRoutes } from "./auth.routes";

import { useAuth } from "../hooks/auth";

export function Routes() {
	const { user } = useAuth();
	const isAuthenticated = user.username ? true : false;
	return (
		<BrowserRouter>
			{isAuthenticated ? <AppRoutes /> : <AuthRoutes />}
		</BrowserRouter>
	);
}
