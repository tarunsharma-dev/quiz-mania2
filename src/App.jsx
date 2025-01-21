import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router from "./Router";

function App() {
	return (
		<main className="bg-white">
			<BrowserRouter>
				<Router />
			</BrowserRouter>
		</main>
	);
}

export default App;
