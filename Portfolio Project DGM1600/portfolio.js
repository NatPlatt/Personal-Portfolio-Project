/*let openingCrawl = document.querySelector("#openingCrawl");
let moveTitle = document.querySelector("#movieTitle");

fetch("https://swapi.co/api/films/7")   
    .then(function(response){
      return response.json();
    })
    .then(function(myJson) {
      openingCrawl.textContent = myJson.opening_crawl
      moveTitle.textContent = myJson.title
      console.log(myJson);

      });
let results = [
    {
	"title": "The Force Awakens",
	"episode_id": 7,
	"opening_crawl": "Luke Skywalker has vanished.\r\nIn his absence, the sinister\r\nFIRST ORDER has risen from\r\nthe ashes of the Empire\r\nand will not rest until\r\nSkywalker, the last Jedi,\r\nhas been destroyed.\r\n \r\nWith the support of the\r\nREPUBLIC, General Leia Organa\r\nleads a brave RESISTANCE.\r\nShe is desperate to find her\r\nbrother Luke and gain his\r\nhelp in restoring peace and\r\njustice to the galaxy.\r\n \r\nLeia has sent her most daring\r\npilot on a secret mission\r\nto Jakku, where an old ally\r\nhas discovered a clue to\r\nLuke's whereabouts....",
	"director": "J. J. Abrams",
	"producer": "Kathleen Kennedy, J. J. Abrams, Bryan Burk",
	"release_date": "2015-12-11",
	"characters": [
		"https://swapi.co/api/people/1/",
		"https://swapi.co/api/people/3/",
		"https://swapi.co/api/people/5/",
		"https://swapi.co/api/people/13/",
		"https://swapi.co/api/people/14/",
		"https://swapi.co/api/people/27/",
		"https://swapi.co/api/people/84/",
		"https://swapi.co/api/people/85/",
		"https://swapi.co/api/people/86/",
		"https://swapi.co/api/people/87/",
		"https://swapi.co/api/people/88/"
	],
	"planets": [
		"https://swapi.co/api/planets/61/"
	],
	"starships": [
		"https://swapi.co/api/starships/77/",
		"https://swapi.co/api/starships/10/"
	],
	"vehicles": [],
	"species": [
		"https://swapi.co/api/species/3/",
		"https://swapi.co/api/species/2/",
		"https://swapi.co/api/species/1/"
	],
	"created": "2015-04-17T06:51:30.504780Z",
	"edited": "2015-12-17T14:31:47.617768Z",
	"url": "https://swapi.co/api/films/7/"
}
]
results.forEach( (film) => {
    var listItem = document.createElement('li')
    listItem.textContent = film.title
    moveTitle.appendChild(listItem)
})*/

import {films} from "./films.js"
import {people} from "./people.js"
import {species} from "./species.js"
import {starships} from "./starships.js"
import {vehicles} from "./vehicles.js"

let filmList = document.querySelector("#film-list")

films.forEach((film) => {
    let listItem = document.createElement("li")
    listItem.textContent = film.title
    filmList.appendChild(listItem)
    console.log(film.title)
})
let crawl = document.querySelector("#openingCrawl")
let para = document.createElement("p")
para.textContent = films[6].opening_crawl
crawl.appendChild(para)
console.log(films[6].opening_crawl);



