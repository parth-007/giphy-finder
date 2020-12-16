import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import { GIF } from "./GIF";
import axios, { AxiosResponse } from 'axios';
import { Giphy, Image } from "../src/models";

export function App() {

	// Enter your API key here
	const api_key = "";

	// State hook for search element
	const [search, setSearch] = useState<string>("");

	// State hook for quantity
	const [qty, setQty] = useState<number>(10);

	// State hook for result
	const [result, setResult] = useState<Giphy>({ "images": [] });

	useEffect(() => {
		if (search === "")
			return;
		const endPoint = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search}&limit=${qty}&offset=0&rating=g&lang=en`;

		axios.get(endPoint).then(response => process(response));

	}, [search, qty]);

	function process(response: AxiosResponse<any>) {
		let images: Image[] = [];
		const GIF: Giphy = { "images": [] };

		const data = response.data.data;
		for (let i = 0; i < data.length; i++) {
			const imageResponse = data[i];
			let image: Image = { "height": imageResponse.images.preview_gif.height, "id": imageResponse.id, "width": imageResponse.images.preview_gif.width, "source": imageResponse.source, "url": imageResponse.images.preview_gif.url };
			images.push(image);
		}
		GIF.images = images;
		images = [];
		setResult(GIF);
	}
	return (
		<div className="App">
			<form>
				<div className="form-group">
					<label htmlFor="search">
						Select Topic for GIF Search
		  			</label>
					<select value={search} onChange={e => setSearch(e.target.value)} className="search-list form-control" name="search-dropdown" id="search">
						<option value="">Select option</option>
						<option value="avenggers">Avengers</option>
						<option value="apple">Apple</option>
						<option value="happy">Happy</option>
						<option value="news">News</option>
						<option value="school">School</option>
						<option value="Mr.bean">Mr.Bean</option>
						<option value="cadbury">Cadbury</option>
					</select>

					<label htmlFor="search">
						Select number of results you want to watch
		  			</label>
					<select value={qty} onChange={e => setQty(parseInt(e.target.value))} className="search-list form-control" name="search-dropdown" id="search">
						<option value="">Select option</option>
						<option value="10">10</option>
						<option value="20">20</option>
						<option value="30">30</option>
						<option value="40">40</option>
						<option value="50">50</option>
					</select>
					<div className="result-container">
						{result.images.map(image => (<GIF {...image} />))}
					</div>
				</div>
			</form>
		</div>
	);
}