import React, {useEffect, useState} from 'react'
import NewsItem from './NewsItem'

function News() {

    // Load articles from API
    // API KEY = 3290737503df4b2497708061f590d5f4

    const [news, setNews] = useState([])

    useEffect(() => {
        fetchNews()
    })

    const fetchNews = async () => {
        let countrySource = 'us'
        try {
            await fetch(`https://newsapi.org/v2/top-headlines?country=${countrySource}&apiKey=3290737503df4b2497708061f590d5f4`, {
                method: "GET",
                headers: {
                    "Content-type": "application/json"
                }
            })
            .then(res => res.json())
            .then(item => setNews(item.articles))
        } catch (error) {
            console.log(error.message)
        }
        console.log(news)
    }
  return (
    <div className='discovery-panel'>
        <h1>Discover</h1>
        {/* <div className='news-container'>
            {news.map((article) => 
                (<NewsItem news={article} />)
            )}
        </div> */}
    </div>
  )
}

export default News