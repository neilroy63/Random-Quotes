const quotes = [
  {
    quote:
      "So ahead of my time, even when I rhyme aobut the future I be reminiscing.",
    author: "J Cole",
  },
  {
    quote:
      "I remembered you was conflicted, misusing your influence. Sometimes I did the same, abusing my power full of resentment. Resentment that turned into a deep depression. Found myself screamin' in the hotel room. I didn't wanna self destruct, the evils of Lucy was all around me. So I went runnin' for answers.",
    author: " Kendrick Lamar",
  },
  {
    quote:
      "See everything as art, hear everything as music, and feel everything as love...",
    author: "Unknown",
  },
  {
    quote:
      "A cynic is someone who knows the price of everything but the value of nothing.",
    author: "Oscar Wilde ",
  },
  {
    quote:
      "I know a lot of about AI, but not nearly as much as it knows about me",
    author: "Unknown",
  },
  {
    quote: " Life: no one gets out alive",
    author: "Unknown",
  },
  {
    quote: "We ain't picture perfect but we worth the picture still",
    author: " J Cole",
  },
];
// };

const btn = document.getElementById("generate-btn");

btn.addEventListener("click", () => {
  // console.log("clicked");
  let randomNumberBasedOnQuoteLength = Math.floor(
    Math.random() * quotes.length
  );
  console.log(randomNumberBasedOnQuoteLength);

  // traversing the DOM using the element ID and then manipulating the text using the obj's  ("quotes")  property ("quote")
  document.getElementById("quote").textContent =
    quotes[randomNumberBasedOnQuoteLength].quote;

  // querySelector method used to target css selector author, once again using the obj and then its obj property in this case author
  document.querySelector(".author").textContent =
    quotes[randomNumberBasedOnQuoteLength].author;
});
