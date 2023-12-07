import React from "react";
import { Link, NavLink } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faSearch } from "@fortawesome/free-solid-svg-icons";

export default function NewsHeader(props) {
	return (
		<>
			<nav className="news--nav">
				<span className="news--nav--title">
					<Link to="/">𝕹𝖊𝖜𝖘 𝕽𝖔𝖔𝖒</Link>
				</span>
				<NavLink className="news--nav--link" to="?category=sports">
					Sports
				</NavLink>
				<NavLink className="news--nav--link" to="?category=health">
					Health
				</NavLink>
				<NavLink className="news--nav--link" to="?category=entertainment">
					Entertainment
				</NavLink>
				<NavLink className="news--nav--link" to="?category=business">
					Business
				</NavLink>
				<NavLink className="news--nav--link" to="?category=science">
					Science
				</NavLink>
				<NavLink className="news--nav--link" to="?category=technology">
					Technology
				</NavLink>
			</nav>
			<section className="news--nav--hero">
				<div className="news--search--container">
					<input
						onChange={(e) => props.handleChange(e.target.value)}
						className="nav--news--search"
						type="text"
						placeholder="e.g. Topic"
						name="q"
						value={props.q}
					/>
					<FontAwesomeIcon className="nav--news--searchIcon" icon={faSearch} />
				</div>
			</section>
		</>
	);
}
