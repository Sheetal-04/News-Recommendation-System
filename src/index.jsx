import React from "react";
import ReactDOM from "react-dom/client";
import Home from "./Components/Home";
import News, { loader as NewsLoader } from "./Components/News";
import {
	Route,
	createBrowserRouter,
	createRoutesFromElements,
	RouterProvider,
} from "react-router-dom";

const router = createBrowserRouter(
	createRoutesFromElements(
		<>
			<Route path="/" element={<Home />} />
			<Route path="news" element={<News />} loader={NewsLoader} />
		</>
	)
);

function App() {
	return <RouterProvider router={router} />;
}
ReactDOM.createRoot(document.getElementById("root")).render(<App />);
