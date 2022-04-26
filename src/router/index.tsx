
import MyPage from "pages/MyPage";
import Main from "pages/Main";
import Auth from "pages/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";



const Router = () => {
	return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/MyPage" element={<MyPage />} />
			<Route path="/users/login/kakao" element={<Auth />} />
		</Routes>
	</BrowserRouter>
	);
}

export default Router;