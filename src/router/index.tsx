import {  Route, BrowserRouter, Routes  } from "react-router-dom";
import Home from "../components/pages/Home";

const Router = () => {
	return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Home />} />
		</Routes>
	</BrowserRouter>
	);
}

export default Router;