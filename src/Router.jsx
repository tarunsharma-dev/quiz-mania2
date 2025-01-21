// import React from "react";
import { Route, Routes } from "react-router-dom";
import HomePage from "./pages/HomePage";
import QuizPage from "./pages/QuizPage";
import QuizResultPage from "./pages/QuizResultPage";

export default function Router() {
	return (
		<>
			<Routes>
				<Route path="/" element={<HomePage />} />
				<Route path="/quiz" element={<QuizPage />} />
				<Route path="/result" element={<QuizResultPage />} />
			</Routes>
		</>
	);
}
