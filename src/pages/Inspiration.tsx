import React from "react";
import S from "../styles/Inspiration.module.scss";

const Inspiration: React.FC = () => {
  const today = new Date(Date.now());
  const quoteIndex = Math.floor(Date.now() / 86400000) % quotes.length;
  const quote: string = quotes[quoteIndex];

  const months = [
    "January",
    "February",
    "March",
    "April",
    "May",
    "June",
    "July",
    "August",
    "September",
    "October",
    "November",
    "December",
  ];

  const date = `${
    months[today.getMonth()]
  } ${today.getDate()}, ${today.getFullYear()}`;

  return (
    <>
      <div className={S.section}>
        <div className={S.stars}></div>
        <div className={S.twinkling}></div>
        <div className={S.clouds}></div>
        <h1>{quote}</h1>
        <h2>{date}</h2>
      </div>
    </>
  );
};

export default Inspiration;

const quotes: string[] = [
  "The less you think the happier you are.",
  "The past can change you, but you can't change the past. The best you can do is accept change and try to make the best out of it.",
  "Everything in the world in connected.",
  "You can choose who you like, you can't choose who you love.",
  "You don't realise how thirsty you are until you start drinking.",
  "Nothing rewarding is easy.",
  "No one is born with more skills or knowledge than anyone else, it all depends on what you experience every day and the choices you make.",
  "It's good to be critical of yourself but also be able to recognise the good things you do.",
  "Although you can't change the past, there's usually something you can do to fix it.",
  "It's easy to take people for granted in public, but in private, you see that we all have our own stories and struggles.",
  "Problems only arise because you interpret it as one.",
  "It doesn't matter how they perceive you it matters how you perceive you.",
  "Bad days are when you can learn the most from.",
  "You don't choose the cards you're dealt but you do choose what you do with them.",
  "Realise your strengths and figure out a way to use them.",
  "Don't stop until you see the checkered flag.",
  "Your individual effectiveness is enhanced through collaboration; work with others to achieve a common goal.",
  "Cherish the small things in life that give you that warm, fuzzy feeling. Something as simple as the cold side of the pillow.",
  "Put yourself in positions where you can use your time most effectively.",
  "Don't overcomplicate the problems you face.",
  "Be consistent in what you say and what you do.",
  "The only way to have success is to ignore doubts or get lucky.",
  "Find ways to make your daily routine more enjoyable because you're gonna be stuck with it every day",
  "Realise that you're in the good old days before it's too late.",
  "You can find most answers on the internet.",
  "Don't waste your energy worrying about how other people view you, you look your best when you're comfortable and care-free.",
  "Start saying yes to more things, you might end up having fun or learning something.",
  "Wear comfortable clothes.",
  "Do those things you know you should, even if it makes you uncomfortable.",
  "Don't underestimate colours, especially the vibrant natural ones.",
  "Be confident in your beliefs, yet be open minded to those who oppose them.",
  "Everyone has something that you can learn from them, so take genuine interest in the people you meet.",
  "Don't underestimate the power of sleep.",
  "Take a moment to stop and think about things you're thankful for.",
  "Figure out what you want and go get it.",
  "Learn to love failure as it's one of the best ways for you to grow.",
  "Look for the enjoyment in everything you do.",
  "At the end of the day, you're the only friend you're guaranteed to have, so be sure to treat them right.",
  "Every moment is unique so be sure to live in each one.",
  "Gratitude shifts perspective; compare yourself to those less fortunate and realize how lucky you truly are.",
  "Eat something today that makes you happy.",
  "You've left a lasting print in the minds of everyone you've met.",
  "If you miss out on one opportunity, just know there are a million more to replace it.",
];
