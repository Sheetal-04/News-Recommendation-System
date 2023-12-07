import React from "react";
import { Link } from "react-router-dom";

export default function NewsCard(props) {
	return (
		<React.Fragment>
			<div className="card">
				<img
					src={
						props.urlToImage
							? props.urlToImage
							: "https://media.cnn.com/api/v1/images/stellar/prod/230830001909-idalia-satellite-12a.jpg?c=16x9&q=w_800,c_fill"
					}
					alt="Card"
				/>
				<div className="card-content">
					<h2 className="card-title">{props.title}</h2>
					<p className="card-summary">{props.description}</p>
					<div className="card-info">
						<p className="card-author">Author: {props.author}</p>
						<p className="card-published-at">
							Published At: {props.publishedAt}
						</p>
						<p className="card-source">Source: {props.source.name}</p>
					</div>
					<Link to={props.url} className="card-button">Read More</Link>
				</div>
			</div>
		</React.Fragment>
	);
}
