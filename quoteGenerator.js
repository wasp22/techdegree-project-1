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
  
  //function that pulls quote from array at random
  function getQuote(arr){
    return arr[Math.floor(Math.random() * arr.length)];
  }
  
  const quote = getQuote(quotes);
  
  console.log(quote.quote, quote.source);
  
  let html = "";
  
  //function that displays quote to screen
  function displayQuote(){
    html = `<h2>${quote.quote}</h2>`;
  }
  
  const main = document.querySelector("main");
  main.insertAdjacentHTML("beforeend", html);