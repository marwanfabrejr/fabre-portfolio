"use client";

import { useEffect, useState } from "react";
import AnimatedLetters from "@/components/AnimatedLetters";
import Loader from "@/components/Loader";
import portfolioData from "@/data/portfolio.json";

export default function Portfolio() {
  const [letterClass, setLetterClass] = useState("text-animate");

  useEffect(() => {
    const timer = setTimeout(() => {
      setLetterClass("text-animate-hover");
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  const renderPortfolio = (portfolio: typeof portfolioData.portfolio) => {
    return (
      <div className="images-container">
        {portfolio.map((port, idx) => {
          return (
            <div className="image-box" key={idx}>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              <img
                src={port.cover}
                className="portfolio-image"
                alt="portfolio"
              />
              <div className="content">
                <p className="title">{port.title}</p>
                <h4 className="technologies">{port.technologies}</h4>
                <button
                  className="btn"
                  onClick={() => window.open(port.url)}
                >
                  View
                </button>
              </div>
            </div>
          );
        })}
      </div>
    );
  };

  return (
    <div className="container portfolio-page">
      <h1 className="page-title">
        <AnimatedLetters
          letterClass={letterClass}
          strArray={[..."Portfolio"]}
          idx={15}
        />
      </h1>
      <div>{renderPortfolio(portfolioData.portfolio)}</div>
      <Loader />
    </div>
  );
}
