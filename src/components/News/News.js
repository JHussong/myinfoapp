import React from 'react'
import './News.css'


class News extends React.Component {

    
  state = {
    articles: [],
    isLoading: true,
    errors: null
  };


  getArticles() {

    fetch(`https://newsapi.org/v2/top-headlines?country=us&apiKey=${process.env.REACT_APP_NEWS_API_KEY}`, {
      headers:  {'Access-Control-Allow-Origin': '*'}
    })
      .then(res => res.json())
      .then(data =>
        data.articles.map(article => ({
          date: `${article.publishedAt}`,
          title: `${article.title}`,
          url: `${article.url}`,
          author: `${article.author}`,
          description: `${article.description}`,
          source: `${article.source}`,
          id: `${article.id}`
        }))
      )
      .then(articles => {
        this.setState({
          articles,
          isLoading: false
        });
      })
      .catch(error => this.setState({ error, isLoading: false }));
  }

  componentDidMount() {
    this.getArticles();
  }

  render() {
    const { isLoading, articles } = this.state;
    return (
      <div className='main-container'>
        <h1 className='page-title'>Headline News</h1>
        <div className='articles-container'>
          {!isLoading ? (
            articles.map(article => {
              const { date, title, url, author, description, source } = article;
              return (
                <div className="card" key={title}>
                  <div className="card-header">{ title }</div>
                  <div className="card-body">
                    <h2 className="card-title">{ source.name }</h2>
                    <h6 className="card-desc">{ description }</h6>
                    <p className="card-auth">{ author }</p>
                    <p className="card-date">{ date.slice(0,10) }</p>
                    <a href={url} className="btn btn-primary">Go to Article</a>
                  </div>
                </div>
              );
            })
          ) : (
            <p>Loading...</p>
          )}
        </div>
      </div>
    );
  }
}


export default News;
