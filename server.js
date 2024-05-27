import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import fetch from "node-fetch";

dotenv.config()
const app = express();
const PORT = 4000;
const { API_KEY } = process.env;

app.use(cors());

app.listen(PORT, ()=> {
	console.log(`Server is running on port ${PORT}`);
});

app.get("/", async (req, res)=> {
	try {
		const response = await fetch(`https://app.ticketmaster.com/discovery/v2/events?apikey=${API_KEY}&keyword=vaterland&locale=*`);
		const data = await response.json();
		const sortedEvents = data._embedded.events.sort((a, b)=> {
			return new Date(a.dates.start.localDate) - new Date(b.dates.start.localDate)
		});
		res.json(sortedEvents[0]);
	} catch (error) {
		console.log(error);
	};
});