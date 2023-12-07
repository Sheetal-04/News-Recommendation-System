import React, { useState } from "react";
import NewsCard from "./NewsCard";
import { getNews } from "../Api";
import { useLoaderData } from "react-router-dom";
import { nanoid } from "nanoid";
import NewsHeader from "./NewsHeader";

//FILTERING THE DATA BASED ON THE CATEGORY
export function loader({ request }) {
	const category = new URL(request.url).searchParams.get("category");
	return getNews(category);
}

export default function News() {
	const newsData = useLoaderData(); //ACCESS DATA FROM API USING LOADER DATA API's

	//----------------------PAGINTAION----------------------//
	const [currentPage, setCurrentPage] = React.useState(1);
	const totalArticles = newsData.length;
	const articlesPerPage = 6;
	const totalArticlesPages = Math.ceil(totalArticles / articlesPerPage);

	const lastArticleIndex = currentPage * articlesPerPage;
	const firstArticleIndex = lastArticleIndex - articlesPerPage;
	const currentArticles = newsData.slice(firstArticleIndex, lastArticleIndex);

	function handlePrevClick() {
		setCurrentPage(currentPage - 1);
	}

	function handleNextClick() {
		setCurrentPage(currentPage + 1);
	}

	//SEARCH THE DATA BASED ON THE NAME (ANYTHING)
	const [q, setq] = useState("");
	const [filteredNews, setFilteredNews] = useState([]);
	const handleChange = (value) => {
		setq(value);
		const filteredNewsData = newsData.filter(
			(newsItem) =>
				newsItem.content &&
				newsItem.title.toLowerCase().includes(value.toLowerCase())
		);
		setFilteredNews(filteredNewsData);
	};
	const newsCardElements =
		q.trim() === "" ? (
			currentArticles.map((newsItem) => (
				<NewsCard key={nanoid()} {...newsItem} />
			))
		) : filteredNews.length === 0 ? (
			<p className="hero--noResult">No results found for "{q}"</p>
		) : (
			filteredNews.map((newsItem) => <NewsCard key={nanoid()} {...newsItem} />)
		);

	return (
		<React.Fragment>
			<NewsHeader q={q} handleChange={handleChange} />
			<section className="newsCard--list">{newsCardElements}</section>
			<div className="btn--container">
				<button
					className="btn prev--btn "
					disabled={currentPage <= 1}
					onClick={handlePrevClick}
				>
					&#8249; Prev
				</button>
				<button
					className="btn next--btn "
					disabled={currentPage >= totalArticlesPages}
					onClick={handleNextClick}
				>
					Next &#8250;
				</button>
			</div>
		</React.Fragment>
	);
}
