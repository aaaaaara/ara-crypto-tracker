import Home from "pages/Home/Home";
import Login from "pages/Login/Login";
import React from "react";
import { BrowserRouter, Route, Routes } from "react-router-dom";

function Router() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" element={<Home />} />
				<Route path="/Login/*" element={<Login />} />
				<Route path="/*" element={<div>잘못된 경로입니다.</div>} />
			</Routes>
		</BrowserRouter>
	);
}

export default Router;
