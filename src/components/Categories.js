import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import styled from "styled-components";
import { CgChevronDoubleRightR, CgChevronDoubleLeftR } from "react-icons/cg";

const categories = [
	{
		name: "all",
		text: "전체보기",
	},
	{
		name: "business",
		text: "비즈니스",
	},
	{
		name: "entertainment",
		text: "엔터테인먼트",
	},
	{
		name: "health",
		text: "건강",
	},
	{
		name: "science",
		text: "과학",
	},
	{
		name: "sports",
		text: "스포츠",
	},
	{
		name: "technology",
		text: "기술",
	},
];

const CategoriesBlock = styled.div`
	display: flex;
	align-items: center;

	text-align: center;
	padding: 1rem;
	width: 768px;
	margin: 0 auto;
	@media screen and (max-width: 768px) {
		width: 100%;
		overflow-x: auto;
	}
`;

const Category = styled(NavLink)`
	color: black;
	font-size: 1.5rem;
	font-weight: 600;
	cursor: pointer;
	white-space: pre;
	text-decoration: none;
	padding-bottom: 0.25rem;
	& + & {
		margin-left: 1rem;
	}
	&:hover {
		color: #22b8cf;
	}
	&.active {
		font-weight: 600;
		border-bottom: 2px solid #22b8cf;
		color: #22b8cf;
		&:hover {
			color: #3bc9bd;
		}
	}
`;

const CategoryShort = styled.div`
	color: black;
	font-size: 1.5rem;
	font-weight: 600;
	cursor: pointer;
	white-space: pre;
	text-decoration: none;
	padding-bottom: 0.25rem;
	margin-left: 1rem;
	&:hover {
		color: #22b8cf;
	}
	margin-top: 5px;
`;
const Categories = () => {
	const [shorted, setShorted] = useState(false);
	return (
		<CategoriesBlock>
			{!shorted ? (
				<>
					{categories.map((c) => (
						<Category
							key={c.name}
							className={({ isActive }) => (isActive ? "active" : "")}
							to={c.name === "all" ? "/" : `/${c.name}`}
						>
							{c.text}
						</Category>
					))}
					<CategoryShort onClick={() => setShorted(true)}>
						<CgChevronDoubleLeftR onClick={() => setShorted(true)} />
					</CategoryShort>
				</>
			) : (
				<CategoryShort onClick={() => setShorted(false)}>
					<CgChevronDoubleRightR />
				</CategoryShort>
			)}
		</CategoriesBlock>
	);
};

export default Categories;
