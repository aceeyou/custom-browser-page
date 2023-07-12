import React from 'react'

function NewsItem(props) {

  return (
    <div className='news-item' onClick={() => window.location.href = props.news.url}>
        <img className='news-image' src={props.news.urlToImage}/>

        <div className='news-headline-container'>
            <p className='news-source'>{props.news.source.name}</p>
            <h1 className='news-article-title'>{props.news.title}</h1>
        </div>
    </div>
  )
}

export default NewsItem