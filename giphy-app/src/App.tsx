import './App.css';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import React, { useState, useEffect } from 'react';
import axios, { AxiosResponse } from 'axios';
import { Giphy, Image } from "../src/models";

export function App() {

	// Enter your API key here
	const api_key = "";

	// State hook for search element
	const [search, setSearch] = useState<string>("");

	// State hook for quantity
	const [qty, setQty] = useState<string>("");

	// State hook for result
	const [result, setResult] = useState<Giphy>();

	useEffect(() => {
		if (search === "")
			return;
		const endPoint = `https://api.giphy.com/v1/gifs/search?api_key=${api_key}&q=${search}&limit=${qty}&offset=0&rating=g&lang=en`;
		axios.get(endPoint).then(response => process(response));
	}, [search, qty]);

	function process(response: AxiosResponse<any>) {
		console.log(response);
		// let GIF:Giphy = undefined;
		// let images = undefined;
		const data = response.data.data;
		for (let i = 0; i < data.length; i++) {
			console.log(data[i]);
			// let currentResponse = data[i];
			// images.push(currentResponse.id, currentResponse.source);
		}
		// GIF.images = images;
		// setResult(GIF);
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
						<option value="laptop">Laptop</option>
						<option value="apple">Apple</option>
						<option value="tiger">Tiger</option>
						<option value="news">News</option>
						<option value="school">School</option>
					</select>

					<label htmlFor="search">
						Select number of results you want to watch
		  			</label>
					<select value={qty} onChange={e => setQty(e.target.value)} className="search-list form-control" name="search-dropdown" id="search">
						<option value="">Select option</option>
						<option value="5">5</option>
						<option value="10">10</option>
						<option value="15">15</option>
						<option value="20">20</option>
						<option value="25">25</option>
						<option value="30">30</option>
						<option value="35">35</option>
						<option value="40">40</option>
						<option value="45">45</option>
						<option value="50">50</option>
					</select>
					<div id="result">
					</div>
				</div>
			</form>
		</div>
	);
}