import React, { useEffect, useState } from "react";
import NewsItem from "./NewsItem";

function News() {
  // Load articles from API
  // API KEY = 3290737503df4b2497708061f590d5f4

  const [news, setNews] = useState([]);

  useEffect(() => {
    fetchNews();
  });

  document.addEventListener("DOMContentLoaded", () => {
    const newsContainer = document.querySelector(".news-container");

    newsContainer.addEventListener("wheel", function (e) {
      e.preventDefault();
      e.deltaY > 0
        ? (newsContainer.scrollLeft += 800)
        : (newsContainer.scrollLeft -= 800);
      e.preventDefault();
    });
  });

  // horizontalWheel(newsContainer)

  // function horizontalWheel(container) {
  //     /** Max `scrollLeft` value */
  //     let scrollWidth;

  //     /** Desired scroll distance per animation frame */
  //     let getScrollStep = () => scrollWidth / 2 /* ADJUST TO YOUR WISH */ ;

  //     /** Target value for `scrollLeft` */
  //     let targetLeft;

  //     function scrollLeft() {
  //       let beforeLeft = container.scrollLeft;
  //       let wantDx = getScrollStep();
  //       let diff = targetLeft - container.scrollLeft;
  //       let dX = wantDx >= Math.abs(diff) ? diff : Math.sign(diff) * wantDx;

  //       // Performing horizontal scroll
  //       container.scrollBy(dX, 0);

  //       // Break if smaller `diff` instead of `wantDx` was used
  //       if (dX === diff)
  //         return;

  //       // Break if can't scroll anymore or target reached
  //       if (beforeLeft === container.scrollLeft || container.scrollLeft === targetLeft)
  //         return;

  //       requestAnimationFrame(scrollLeft);
  //     }

  //     container.addEventListener('wheel', e => {
  //       e.preventDefault();

  //       scrollWidth = container.scrollWidth - container.clientWidth;
  //       targetLeft = Math.min((scrollWidth + 800), Math.max(0, container.scrollLeft + (e.deltaY * 5)));

  //       requestAnimationFrame(scrollLeft);
  //     });
  //   }

  const fetchNews = async () => {
    let countrySource = "us";
    try {
      await fetch(
        `https://newsapi.org/v2/top-headlines?country=us&apiKey=3290737503df4b2497708061f590d5f4`
      )
        .then((res) => res.json())
        .then((item) => setNews(item.articles));
    } catch (error) {
      console.log(error.message);
    }
  };
  return (
    <div className="discovery-panel">
      <h1 id="discovery-panel-title">Discover</h1>
      <div className="news-container">
        {news?.map((article) => (
          <NewsItem key={article.source.id} news={article} />
        ))}
      </div>
    </div>
  );
}

export default News;
