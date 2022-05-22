import Main from "pages/Main";
import Auth from "pages/Auth";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import BookMark from "pages/Bookmark";
import Library from "pages/Library";
import Storage from "pages/Storage";



const Router = () => {
	return (
	<BrowserRouter>
		<Routes>
			<Route path="/" element={<Main />} />
			<Route path="/bookmark" element={<BookMark />} />
			<Route path="/library" element={<Library />} />
			<Route path="/storage" element={<Storage />} />
			<Route path="/users/login/kakao" element={<Auth />} />
		</Routes>
	</BrowserRouter>
	);
}

export default Router;