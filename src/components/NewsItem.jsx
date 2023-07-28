import React from "react";

function NewsItem(props) {
  return (
    <div
      className="news-item"
      onClick={() => (window.location.href = props.news.url)}
    >
      <img
        className="news-image"
        src={props.news.urlToImage}
        alt="headline cover"
      />

      <div className="news-headline-container">
        <p className="news-source">{props.news.source.name}</p>
        <a href={props.news.url}>
          <h1 className="news-article-title">{props.news.title}</h1>
        </a>
      </div>
    </div>
    // <div className='news-item' onClick={() => window.location.href = "http://ebkovko.gn/fuejofe"}>
    //     <img className='news-image' src={"https://images.unsplash.com/photo-1575936123452-b67c3203c357?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxzZWFyY2h8Mnx8aW1hZ2V8ZW58MHx8MHx8fDA%3D&w=1000&q=80"}/>

    //     <div className='news-headline-container'>
    //         <p className='news-source'>ABS-CBN</p>
    //         <h1 className='news-article-title'>Lorem Ipsum is simply dummy text of the printing and Lorem Ipsum has been the industry's standard dummy text ever since the 1500s The quick brown fox jumps over the lazy dog</h1>
    //     </div>
    // </div>
  );
}

export default NewsItem;
