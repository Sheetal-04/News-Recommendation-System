import React from "react";
import { Link } from "react-router-dom";

export default function Home() {
	return (
		<>
			<nav className="home--nav">
					<span className="nav--title">𝕹𝖊𝖜𝖘 𝕽𝖔𝖔𝖒</span>
			</nav>
			{/* -------------HERO-------------- */}
			<section className="text-gray-400 bg-gray-900 body-font">
				<div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
					<div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
						<h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-white">
							Unveiling the Latest Stories
							<br className="hidden lg:inline-block" /> Your Source for News
						</h1>

						<p className="mb-8 leading-relaxed">
							News is the beating heart of awareness.Journalists shine a light
							on hidden truths, guiding us through the labyrinth of information
							and drives change, ensuring that every word resonates with the
							pulse of a connected society.
						</p>
						<div className="flex justify-center">
							<Link
								to="/news"
								className="inline-flex text-white bg-indigo-500 border-0 py-4 px-6 focus:outline-none hover:bg-indigo-900 rounded text-lg"
							>
								Explore News
							</Link>
						</div>
					</div>
					<div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
						<img
							className="object-cover object-center rounded-full"
							alt="hero"
							src="https://img.freepik.com/premium-vector/news-presenter-avatar-character_24877-10038.jpg"
						/>
					</div>
				</div>
			</section>
			{/* -------------STATISTICS--------------*/}
			<section className="text-gray-400 bg-gray-900 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-col text-center w-full mb-20">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
							Empowering News Delivery
						</h1>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
							Elevate your insights with our news web application statistics.
							From real-time updates to trending stories, our platform delivers
							a comprehensive view of global events. Uncover audience
							engagement, geographic reach, and more, all at your fingertips.
							Stay ahead of the curve with data-driven news delivery.
						</p>
					</div>

					<div className="flex flex-wrap -m-4 text-center">
						<div className="p-4 md:w-1/4 sm:w-1/2 w-full">
							<div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="text-indigo-400 w-12 h-12 mb-3 inline-block"
									viewBox="0 0 24 24"
								>
									<path d="M8 17l4 4 4-4m-4-5v9"></path>
									<path d="M20.88 18.09A5 5 0 0018 9h-1.26A8 8 0 103 16.29"></path>
								</svg>
								<h2 className="title-font font-medium text-3xl text-white">2.7K</h2>
								<p className="leading-relaxed">Views</p>
							</div>
						</div>
						<div className="p-4 md:w-1/4 sm:w-1/2 w-full">
							<div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="text-indigo-400 w-12 h-12 mb-3 inline-block"
									viewBox="0 0 24 24"
								>
									<path d="M17 21v-2a4 4 0 00-4-4H5a4 4 0 00-4 4v2"></path>
									<circle cx="9" cy="7" r="4"></circle>
									<path d="M23 21v-2a4 4 0 00-3-3.87m-4-12a4 4 0 010 7.75"></path>
								</svg>
								<h2 className="title-font font-medium text-3xl text-white">1.3K</h2>
								<p className="leading-relaxed">Active Users</p>
							</div>
						</div>
						<div className="p-4 md:w-1/4 sm:w-1/2 w-full">
							<div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="text-indigo-400 w-12 h-12 mb-3 inline-block"
									viewBox="0 0 24 24"
								>
									<path d="M3 18v-6a9 9 0 0118 0v6"></path>
									<path d="M21 19a2 2 0 01-2 2h-1a2 2 0 01-2-2v-3a2 2 0 012-2h3zM3 19a2 2 0 002 2h1a2 2 0 002-2v-3a2 2 0 00-2-2H3z"></path>
								</svg>
								<h2 className="title-font font-medium text-3xl text-white">74</h2>
								<p className="leading-relaxed">Articles</p>
							</div>
						</div>
						<div className="p-4 md:w-1/4 sm:w-1/2 w-full">
							<div className="border-2 border-gray-800 px-4 py-6 rounded-lg">
								<svg
									fill="none"
									stroke="currentColor"
									strokeLinecap="round"
									stroke-linejoin="round"
									stroke-width="2"
									className="text-indigo-400 w-12 h-12 mb-3 inline-block"
									viewBox="0 0 24 24"
								>
									<path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
								</svg>
								<h2 className="title-font font-medium text-3xl text-white">46</h2>
								<p className="leading-relaxed">Authentic Resources</p>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* ------------Testimonial------------ */}
			<section className="text-gray-400 bg-gray-900 body-font">
				<div className="container px-5 py-24 mx-auto">
					<div className="xl:w-1/2 lg:w-3/4 w-full mx-auto text-center">
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="currentColor"
							className="inline-block w-8 h-8 text-gray-500 mb-8"
							viewBox="0 0 975.036 975.036"
						>
							<path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z"></path>
						</svg>
						<br />
						<img
							alt="testimonial"
							className="w-20 h-20 mb-8 object-cover object-center rounded-full inline-block border-2 border-gray-800 bg-gray-800 bg-opacity-10"
							src="https://dummyimage.com/302x302"
						></img>
						<p className="leading-relaxed text-lg">
							As a news recommendation web application developer, I have
							witnessed the transformative power of personalized news delivery.
							Our platform revolutionizes how users consume information,
							providing them with relevant stories tailored to their interests.
							The intricate algorithm behind our service ensures that each piece
							of news resonates with our users on a personal level. Join us in
							experiencing the future of news, where every click brings you
							closer to the stories that truly matter.
						</p>

						<span className="inline-block h-1 w-10 rounded bg-indigo-500 mt-8 mb-6"></span>
						<h2 className="text-white font-medium title-font tracking-wider text-sm">
							SHEETAL TYAGI
						</h2>
						<p className="text-gray-500">SOFTWARE DEVELOPER</p>
					</div>
				</div>
			</section>
			{/* --------------Feedback--------------*/}
			<section className="text-gray-400 bg-gray-900 body-font relative">
				<div className="absolute inset-0 bg-gray-900">
					<iframe
						title="map"
						width="100%"
						height="100%"
						frameBorder="0"
						marginHeight="0"
						marginWidth="0"
						src="https://maps.google.com/maps?width=100%&amp;height=600&amp;hl=en&amp;q=%C4%B0zmir+(My%20Business%20Name)&amp;ie=UTF8&amp;t=&amp;z=14&amp;iwloc=B&amp;output=embed"
						style={{ filter: "grayscale(1) contrast(1.2) opacity(0.16)" }}
					/>
				</div>
				<div className="container px-5 py-24 mx-auto flex">
					<div className="lg:w-1/3 md:w-1/2 bg-gray-900 shadow-md rounded-lg p-8 flex flex-col md:ml-auto w-full mt-10 md:mt-0 relative z-10">
						<h2 className="text-white text-lg mb-1 font-medium title-font">
							Feedback
						</h2>
						<p className="leading-relaxed mb-5">
							Post-ironic portland shabby chic echo park, banjo fashion axe
						</p>
						<div className="relative mb-4">
							<label for="email" className="leading-7 text-sm text-gray-400">
								Email
							</label>
							<input
								type="email"
								id="email"
								name="email"
								className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
							/>
						</div>
						<div className="relative mb-4">
							<label for="message" className="leading-7 text-sm text-gray-400">
								Message
							</label>
							<textarea
								id="message"
								name="message"
								className="w-full bg-gray-800 rounded border border-gray-700 focus:border-indigo-500 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
							></textarea>
						</div>
						<button className="text-white bg-indigo-500 border-0 py-2 px-6 focus:outline-none hover:bg-indigo-600 rounded text-lg">
							Button
						</button>
					</div>
				</div>
			</section>
			{/* ------------Contact Us-------------- */}
			<section className="text-gray-400 bg-gray-900 body-font relative">
				<div className="container px-5 py-24 mx-auto">
					<div className="flex flex-col text-center w-full mb-12">
						<h1 className="sm:text-3xl text-2xl font-medium title-font mb-4 text-white">
							Contact Us
						</h1>
						<p className="lg:w-2/3 mx-auto leading-relaxed text-base">
							Feel free to reach out to us with any questions, feedback, or
							inquiries. We're here to assist you!
						</p>
					</div>
					<div className="lg:w-1/2 md:w-2/3 mx-auto">
						<div className="flex flex-wrap -m-2">
							<div className="p-2 w-1/2">
								<div className="relative">
									<label for="name" className="leading-7 text-sm text-gray-400">
										Name
									</label>
									<input
										type="text"
										id="name"
										name="name"
										className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
								</div>
							</div>
							<div className="p-2 w-1/2">
								<div className="relative">
									<label for="email" className="leading-7 text-sm text-gray-400">
										Email
									</label>
									<input
										type="email"
										id="email"
										name="email"
										className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 text-base outline-none text-gray-100 py-1 px-3 leading-8 transition-colors duration-200 ease-in-out"
									/>
								</div>
							</div>
							<div className="p-2 w-full">
								<div className="relative">
									<label for="message" className="leading-7 text-sm text-gray-400">
										Message
									</label>
									<textarea
										id="message"
										name="message"
										className="w-full bg-gray-800 bg-opacity-40 rounded border border-gray-700 focus:border-indigo-500 focus:bg-gray-900 focus:ring-2 focus:ring-indigo-900 h-32 text-base outline-none text-gray-100 py-1 px-3 resize-none leading-6 transition-colors duration-200 ease-in-out"
									></textarea>
								</div>
							</div>
							<div className="p-2 w-full">
								<button className="flex mx-auto text-white bg-indigo-500 border-0 py-2 px-8 focus:outline-none hover:bg-indigo-600 rounded text-lg">
									Share your feedback
								</button>
							</div>
							<div className="p-2 w-full pt-8 mt-8 border-t border-gray-800 text-center">
								<a href="https://mail.google.com" className="text-indigo-400">
									sheetaltyagichd@email.com
								</a>
								<p className="leading-normal my-5">
									49 V.R Sun City
									<br />
									Chandausi, 244412
								</p>
								<span className="inline-flex">
									<a href="https://www.facebook.com/" className="text-gray-500">
										<svg
											fill="currentColor"
											strokeLinecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
										</svg>
									</a>
									<a
										href="https://twitter.com/Sheetal8653"
										className="ml-4 text-gray-500"
									>
										<svg
											fill="currentColor"
											strokeLinecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
										</svg>
									</a>
									<a
										href="https://www.instagram.com/"
										className="ml-4 text-gray-500"
									>
										<svg
											fill="none"
											stroke="currentColor"
											strokeLinecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<rect
												width="20"
												height="20"
												x="2"
												y="2"
												rx="5"
												ry="5"
											></rect>
											<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
										</svg>
									</a>
									<a
										href="https://www.linkedin.com/in/sheetal-tyagi-39b62b21b/"
										className="ml-4 text-gray-500"
									>
										<svg
											fill="currentColor"
											strokeLinecap="round"
											stroke-linejoin="round"
											stroke-width="2"
											className="w-5 h-5"
											viewBox="0 0 24 24"
										>
											<path d="M21 11.5a8.38 8.38 0 01-.9 3.8 8.5 8.5 0 01-7.6 4.7 8.38 8.38 0 01-3.8-.9L3 21l1.9-5.7a8.38 8.38 0 01-.9-3.8 8.5 8.5 0 014.7-7.6 8.38 8.38 0 013.8-.9h.5a8.48 8.48 0 018 8v.5z"></path>
										</svg>
									</a>
								</span>
							</div>
						</div>
					</div>
				</div>
			</section>
			{/* -------------Footer-------------- */}
			<footer className="text-gray-400 bg-gray-900 body-font">
				<div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
					<Link
						to="/news"
						className="flex title-font font-medium items-center md:justify-start justify-center text-white"
					>
						<svg
							xmlns="http://www.w3.org/2000/svg"
							fill="none"
							stroke="currentColor"
							strokeLinecap="round"
							stroke-linejoin="round"
							stroke-width="2"
							className="w-10 h-10 text-white p-2 bg-indigo-500 rounded-full"
							viewBox="0 0 24 24"
						>
							<path d=""></path>
						</svg>
						<span className="ml-3 text-xl">𝕹𝖊𝖜𝖘 𝕽𝖔𝖔𝖒</span>
					</Link>
					<p className="text-sm text-gray-400 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-800 sm:py-2 sm:mt-0 mt-4">
						© 2023 NewsRoom —
						<a
							href="https://twitter.com/Sheetal8653"
							className="text-gray-500 ml-1"
							target="_blank"
							rel="noopener noreferrer"
						>
							@SheetalTyagi
						</a>
					</p>
					<span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
						<a href="https://www.facebook.com/" className="text-gray-400">
							<svg
								fill="currentColor"
								strokeLinecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								className="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"></path>
							</svg>
						</a>
						<a
							href="https://twitter.com/Sheetal8653"
							className="ml-3 text-gray-400"
						>
							<svg
								fill="currentColor"
								strokeLinecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								className="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"></path>
							</svg>
						</a>
						<a href="https://www.instagram.com/" className="ml-3 text-gray-400">
							<svg
								fill="none"
								stroke="currentColor"
								strokeLinecap="round"
								stroke-linejoin="round"
								stroke-width="2"
								className="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<rect width="20" height="20" x="2" y="2" rx="5" ry="5"></rect>
								<path d="M16 11.37A4 4 0 1112.63 8 4 4 0 0116 11.37zm1.5-4.87h.01"></path>
							</svg>
						</a>
						<a
							href="https://www.linkedin.com/in/sheetal-tyagi-39b62b21b/"
							className="ml-3 text-gray-400"
						>
							<svg
								fill="currentColor"
								stroke="currentColor"
								strokeLinecap="round"
								stroke-linejoin="round"
								stroke-width="0"
								className="w-5 h-5"
								viewBox="0 0 24 24"
							>
								<path
									stroke="none"
									d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"
								></path>
								<circle cx="4" cy="4" r="2" stroke="none"></circle>
							</svg>
						</a>
					</span>
				</div>
			</footer>
		</>
	);
}
