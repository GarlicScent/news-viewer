import React from "react";
import Categories from "../components/Categories";
import NewsList from "../components/NewsList";
import { useParams } from "react-router-dom";

const NewsPage = () => {
	const { category } = useParams();

	return (
		<div>
			<Categories />
			<NewsList category={category ? category : "all"} />
		</div>
	);
};

export default NewsPage;
