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
      "You say you love rain, but you use an umbrella to walk under it. You say you love sun, but you seek shelter when it is shining. You say you love wind, but when it comes you close your windows. So that's why I'm scared when you say you love me.",
    author: "Bob Marley",
  },
  {
    quote: "We ain't picture perfect but we worth the picture still.",
    author: "J Cole",
  },
  {
    quote:
      "God show me the way because the Devil’s tryin’ to break me down. The only thing that I pray is that my feet don’t fail me now. And I don’t think there is nothing I can do now to right my wrongs. I want to talk to God, but I’m afraid because we ain’t spoke in so long...",
    author: "Kanye West",
  },
  {
    quote:
      "Now don’t you understand man universal law? What you throw out comes back to you, star. Never underestimate those who you scar. Cause karma, karma, karma comes back to you hard! You can’t hold god’s people back that long",
    author: "Lauryn Hill",
  },
  {
    quote: "One good thing about music, when it hits you, you feel no pain.",
    author: "Bob Marley",
  },
  {
    quote: "I'm your dog ears, perk up at the sound of your name.",
    author: "J Cole",
  },
  {
    quote: "I'm stealing glances, thanking God that he drew you like that.",
    author: "J Cole",
  },
  {
    quote:
      "Let me be patient, let me be kind, make me unselfish, without being blind.",
    author: "Lauryn Hill",
  },
  {
    quote: "Don't be a hard rock when you really are a gem!",
    author: "Lauryn Hill",
  },
  {
    quote:
      "Love is an incredible thing but we don't know love like we should. Unconditional love, we don't know it because if a person stops stimulating us, we stop loving them.",
    author: "Lauryn Hill",
  },
  {
    quote:
      "If she's amazing, she won't be easy. If she's easy, she won't be amazing. If she's worth it, you wont give up. If you give up, you're not worthy. ... Truth is, everybody is going to hurt you; you just gotta find the ones worth suffering for.",
    author: "Bob Marley",
  },
  {
    quote: "Be like water, my friend.",
    author: "Bruce Lee",
  },
  {
    quote:
      "I have read until my mind has become a blister filled with all the world's poison.",
    author: "Unknown",
  },
  {
    quote:
      "Emancipate yourselves from mental slavery. None but ourselves can free our minds.",
    author: "Bob Marley",
  },
  {
    quote:
      "The biggest coward of a man is to awaken the love of a woman without the intention of loving her.",
    author: "Unknown",
  },
  {
    quote:
      "You may not be her first, her last, or her only. She loved before she may love again. But if she loves you now, what else matters? She's not perfect—you aren't either, and the two of you may never be perfect together but if she can make you laugh, cause you to think twice, and admit to being human and making mistakes, hold onto her and give her the most you can. She may not be thinking about you every second of the day, but she will give you a part of her that she knows you can break—her heart. So don't hurt her, don't change her, don't analyze and don't expect more than she can give. Smile when she makes you happy, let her know when she makes you mad, and miss her when she's not there.",
    author: "Bob Marley",
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
