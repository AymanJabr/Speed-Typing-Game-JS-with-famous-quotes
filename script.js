//List of quotes, that can be edited as needed
const RANDOM_QUOTE_API_URL = [
  {
    id: 0,
    content:
      "The greatest glory in living lies not in never falling, but in rising every time we fall.",
  },
  {
    id: 1,
    content: "The way to get started is to quit talking and begin doing.",
  },
  {
    id: 2,
    content: "The way to get started is to quit talking and begin doing.",
  },
  {
    id: 3,
    content:
      "Your time is limited, so don't waste it living someone else's life. Don't be trapped by dogma – which is living with the results of other people's thinking.",
  },
  {
    id: 4,
    content:
      "If life were predictable it would cease to be life, and be without flavor.",
  },
  {
    id: 5,
    content:
      "If you look at what you have in life, you'll always have more. If you look at what you don't have in life, you'll never have enough.",
  },
  {
    id: 6,
    content:
      "If you set your goals ridiculously high and it's a failure, you will fail above everyone else's success.",
  },
  {
    id: 7,
    content: "Life is what happens when you're busy making other plans.",
  },
  {
    id: 8,
    content:
      "Spread love everywhere you go. Let no one ever come to you without leaving happier.",
  },
  {
    id: 9,
    content:
      "When you reach the end of your rope, tie a knot in it and hang on.",
  },
  {
    id: 10,
    content:
      "Always remember that you are absolutely unique. Just like everyone else.",
  },
  {
    id: 11,
    content:
      "Don't judge each day by the harvest you reap but by the seeds that you plant.",
  },
  {
    id: 12,
    content:
      "The future belongs to those who believe in the beauty of their dreams.",
  },
  {
    id: 13,
    content:
      "Tell me and I forget. Teach me and I remember. Involve me and I learn.",
  },
  {
    id: 14,
    content:
      "When you reach the end of your rope, tie a knot in it and hang on.",
  },
  {
    id: 15,
    content:
      "You will face many defeats in life, but never let yourself be defeated.",
  },
];

//gets the html elements
const quoteDisplayElement = document.getElementById("quoteDisplay");
const quoteInputElement = document.getElementById("quoteInput");
const timerElement = document.getElementById("timer");

//sets whether the character typed is correct or not
quoteInputElement.addEventListener("input", () => {
  const arrayQuote = quoteDisplayElement.querySelectorAll("span");
  const arrayValue = quoteInputElement.value.split("");

  let correct = true;

  arrayQuote.forEach((characterSpan, index) => {
    const character = arrayValue[index];
    if (character == null) {
      characterSpan.classList.remove("correct");
      characterSpan.classList.remove("incorrect");
      correct = false;
    } else if (character === characterSpan.innerText) {
      characterSpan.classList.add("correct");
      characterSpan.classList.remove("incorrect");
    } else {
      characterSpan.classList.add("incorrect");
      characterSpan.classList.remove("correct");
      correct = false;
    }
  });

  if (correct) renderNextQuote();
});

//get a random quote from the list
function getRandomQuote() {
  let randomNumber = parseInt(
    Math.floor(Math.random() * RANDOM_QUOTE_API_URL.length)
  );

  return RANDOM_QUOTE_API_URL[randomNumber].content;
}
//reads the next quote
function renderNextQuote() {
  const quote = getRandomQuote();
  quoteDisplayElement.innerHTML = "";
  quote.split("").forEach((character) => {
    const characterSpan = document.createElement("span");
    characterSpan.innerText = character;
    quoteDisplayElement.appendChild(characterSpan);
  });
  quoteInputElement.value = null;
  startTimer();
}
//resets the timer
let startTime;
function startTimer() {
  timerElement.innerText = 0;
  startTime = new Date();
  setInterval(() => {
    timer.innerText = Math.floor((new Date() - startTime) / 1000);
  }, 1000);
}

renderNextQuote();
