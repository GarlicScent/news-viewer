import "./App.css";
import { Route, Routes } from "react-router-dom";
import NewsPage from "./pages/NewsPage";

function App() {
	// const [category, setCategory] = useState("all");
	// const onSelect = useCallback((category) => setCategory(category), []);
	return (
		<Routes>
			<Route path=":category?" element={<NewsPage />} />
		</Routes>
	);
}

// <>
// 	<Categories category={category} onSelect={onSelect} />
// 	<NewsList category={category} />;
// </>
export default App;
