import { Routes, Route } from "react-router-dom";

import { Join } from "../pages/Join";

export function AuthRoutes() {
	return (
		<Routes>
			<Route path="/" element={<Join />} />
		</Routes>
	);
}
