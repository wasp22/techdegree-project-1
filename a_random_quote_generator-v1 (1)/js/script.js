/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

// For assistance: 
  // Check the "Project Resources" section of the project instructions
  // Reach out in your Slack community - https://treehouse-fsjs-102.slack.com/app_redirect?channel=chit-chat

/*** 
 * `quotes` array 
***/
const quotes = [
  {
    quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe.",
    source: "Albert Einstein",
    citation: "GoodReads"
  },
  {
    quote: "A room without books is like a body without a soul.",
    source: "Marcus Tullius Cicero",
    citation: "GoodReads"
  },
  {
    quote: "There's not a word yet, for old friends who've just met.",
    source: "Jim Henson",
    ciation: "The Muppets"
  },
  {
    quote: "I do not want people to be very agreeable, as it saves me the trouble of liking them a great deal.",
    source: "Jane Austen",
    citation: "Jane Austen's Letters"
  },
  {
    quote: "Be careful about reading health books. Some fine day you'll die of a misprint.",
    source: "Markus Herz",
    citation: "GoodReads"
  },
  {
    quote: "Books are the quietest and most constant of friends; they are the most accessible and wisest of counselors, and the most patient of teachers.",
    source: "Charles W. Eliot",
    citation: "GoodReads"
  },
  {
    quote: "The saddest aspect of life right now is that science gathers knowledge faster than society gathers wisdom.",
    source: "Isaac Asimov",
    citation: "GoodReads"
  }
];



/***
 * `getRandomQuote` function
***/
function getRandomQuote(arr){
  return arr[Math.floor(Math.random() * arr.length)];
}

const quote = getQuote(quotes);

/***
 * `printQuote` function
***/
function printQuote(){
  const html = 
  `<h2>${quote.quote}</h2>
  <h3>${quote.source}</h3>
  `; 
return html;
}

const html = printQuote();
const main = document.querySelector("main");
main.insertAdjacentHTML("beforeend", html);




/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/

document.getElementById('load-quote').addEventListener("click", printQuote, false);