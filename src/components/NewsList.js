// import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";
import { styled } from "styled-components";
import axios from "axios";
import usePromise from "../lib/usePromise";

const NewsListBlock = styled.div`
	box-sizing: border-box;
	padding-bottom: 3rem;
	width: 768px;
	margin: 0 auto;
	margin-top: 2rem;
	@media screen and (max-width: 768px) {
		width: 100%;
		padding-left: 1rem;
		padding-right: 1rem;
	}
`;

const NewsList = ({ category }) => {
	const [loading, response, error] = usePromise(() => {
		const query = category === "all" ? "" : `&category=${category}`;
		return axios.get(
			`https://newsapi.org/v2/top-headlines?country=kr&apiKey=93a4295f20d84726914e3016a1ac0080${query}`
		);
	}, [category]);

	if (loading) {
		return <NewsListBlock>loading...</NewsListBlock>;
	}
	if (!response) {
		return null;
	}

	if (error) {
		return <NewsListBlock>Error 발생!</NewsListBlock>;
	}
	const { articles } = response.data;

	return (
		<NewsListBlock>
			{articles &&
				articles.map((article) => (
					<NewsItem key={article.url} article={article} />
				))}
		</NewsListBlock>
	);
};

export default NewsList;
