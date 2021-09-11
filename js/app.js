const quotes = [
  {
    quote:
      "So ahead of my time, even when I rhyme about the future I be reminiscing.",
    author: "J Cole",
  },
  {
    quote:
      "I remembered you was conflicted, misusing your influence. Sometimes I did the same, abusing my power full of resentment. Resentment that turned into a deep depression. Found myself screamin' in the hotel room. I didn't wanna self destruct, the evils of Lucy was all around me. So I went runnin' for answers.",
    author: "Kendrick Lamar",
  },
  {
    quote:
      "See everything as Art, hear everything as Music, and feel everything as Love...",
    author: "Unknown",
  },
  {
    quote:
      "I start to think, and then I sink into the paper like I was ink. When I'm writing, I'm trapped in between the lines. I escape when I finish the rhyme.",
    author: "Rakim",
  },
  {
    quote:
      "If I told you that a flower bloomed in a dark room, would you trust it?",
    author: "Kendrick Lamar",
  },
  {
    quote:
      "You better lose yourself in the music, the moment you own it. You better never let it go. You only get one shot, do not miss your chance to blow. This opportunity comes once in a lifetime.",
    author: "Eminem",
  },
  {
    quote: "We ain't picture perfect but we worth the picture still...",
    author: "J Cole",
  },
  {
    quote:
      "God show me the way because the Devil’s tryin’ to break me down. The only thing that I pray is that my feet don’t fail me now. And I don’t think there is nothing I can do now to right my wrongs I want to talk to God, but I’m afraid because we ain’t spoke in so long",
    author: "Kanye West",
  },
  {
    quote:
      "Now don’t you understand man universal law? What you throw out comes back to you, star. Never underestimate those who you scar. Cause karma, karma, karma comes back to you hard! You can’t hold god’s people back that long",
    author: "Lauryn Hill",
  },
  {
    quote:
      "And this ting's all love and hate, 'cause a lot of man love to hate. My young G done draws and eights. Now he's cuttin' through bricks like the 1-1-8. And I ain't on indirects, diss me, and I take that personal. How you gassed off a note that's purple? Bet you never got it off white like Virgil. Two men and an angry Merc. That's war wit' a German, Winston Churchill",
    author: "Dave",
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

  // traversing the DOM based on the element ID and then manipulating its text using the obj's  ("quotes")  property ("quote")
  document.getElementById("quote").textContent =
    quotes[randomNumberBasedOnQuoteLength].quote;

  // querySelector method used to target css selector author, once again using the obj and then its obj property in this case author
  document.querySelector(".author").textContent =
    quotes[randomNumberBasedOnQuoteLength].author;
});
