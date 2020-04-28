/******************************************
Treehouse FSJS Techdegree:
project 1 - A Random Quote Generator
******************************************/

/***
I am aiming for 'Exceed Expectations' grade.
Please reject project with feedback if I do not achieve
this desired status. Thank you!
***/

/***
 * `quotes` array
***/
const body = document.querySelector('body');
let automaticUpdate = window.setInterval(printQuote, 3000);

const quotes = [
  {
    quote: "Never reduce a target, increase actions.",
    source: "Grant Cardone",
    year: 2011,
    citation: "The 10X Rule",
    tags: ["motivation", "entrepreneurship", "business"]
  },
  {
    quote: "The harder I work, the luckier I get.",
    source: "Grant Cardone",
    year: 2011,
    citation: "The 10X Rule",
    tags: ["Motivation", "Business"]
  },
  {
    quote: "Daily routine separates winners from losers.",
    source: "Darren Hardy",
    year: 2012,
    citation: "The Compound Effect",
    tags: ["motivation", "entrepreneurship", "business"]
  },
  {
    quote: "You will never change your life until you change something you do daily.",
    source: "Darren Hardy",
    year: 2012,
    citation: "The Compound Effect",
    tags: ["motivation", "entrepreneurship"]
  },
  {
    quote: "It\'s not the hows that do it, it\'s how you do the hows.",
    source: "Jeff Olsen",
    year: 1983,
    citation: "The Slight Edge",
    tags: ["motivation", "business"]
  },
  {
    quote: "Some day does not exist, it never will.",
    source: "Jeff Olsen"
  },
  {
    quote: "Every problem introduces a person to himself.",
    source: "Sean Whalen"
  },
  {
    quote: "Love does not make the world go round, it is what makes the ride worthwhile.",
    source: "Darren Hardy"
  },
  {
    quote: "Be yourself; everyone else is already taken.",
    source: "Oscar Wilde"
  },
  {
    quote: "I have not failed. I've just found 10,000 ways that won't work.",
    source: "Thomas Edison"
	},
];

/***
 * `getRandomQuote` function
***/
function getRandomQuote(array) {
  let randomNum = Math.floor(Math.random() * array.length);
  let randomQuote = array[randomNum];
  return randomQuote;
}

/** Function to change background color with random hex value,
limited for contrast **/
function updateBackgroundColor() {
  var randomColor = `
    rgb(${Math.floor(Math.random()*150)},
    ${Math.floor(Math.random()*150)},
    ${Math.floor(Math.random()*150)})
  `;
  body.style.backgroundColor = `${randomColor}`;
}

/***
 * `printQuote` function
***/
function printQuote() {
  let message = "";
  let quoteObject = getRandomQuote(quotes);
  // Build message string using object properties
  message += `<p class="quote">“${quoteObject.quote}”</p>`;
  message += `<p class="source">${quoteObject.source}`;
  // If quote has citation, add to message string
  if(quoteObject.citation) {
    message += `<span class="citation">${quoteObject.citation}</span>`;
  }
  // If quote has year, add to message string
  if(quoteObject.year) {
    message += `<span class="year">${quoteObject.year}</span>`;
  }
  message += `</p>`;
  // Update random background color
  updateBackgroundColor();
  // Print message string to the page
  document.getElementById('quote-box').innerHTML = message;

  // Automatically update the quote every 5 seconds
  clearInterval(automaticUpdate);
  automaticUpdate = window.setInterval(printQuote, 5000);
}

// Display a quote on initial page load
printQuote();

/***
 * click event listener for the print quote button
 * DO NOT CHANGE THE CODE BELOW!!
***/
document.getElementById('load-quote').addEventListener("click", printQuote, false);
