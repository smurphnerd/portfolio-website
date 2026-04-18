import React from "react";
import S from "../styles/Inspiration.module.scss";
import { Helmet } from "react-helmet";
import quotesData from "inspirational-quotes/data/data.json";

interface QuoteEntry {
  text: string;
  from: string;
}

const quotes = quotesData as QuoteEntry[];

const Inspiration: React.FC = () => {
  const today = new Date(Date.now());
  const quoteIndex = Math.floor(Date.now() / 86400000) % quotes.length;
  const quote = quotes[quoteIndex];

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
      <Helmet>
        <title>Inspiration</title>
      </Helmet>
      <div className={S.section}>
        <div className={S.stars}></div>
        <div className={S.twinkling}></div>
        <div className={S.clouds}></div>
        <h1>{quote.text}</h1>
        {quote.from && <h3 className={S.author}>— {quote.from}</h3>}
        <h2>{date}</h2>
      </div>
    </>
  );
};

export default Inspiration;
