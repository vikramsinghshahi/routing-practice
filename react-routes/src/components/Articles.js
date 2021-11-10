import React from 'react';
import { Link, Outlet } from 'react-router-dom';
import articles from '../data/articles.json';

class Articles extends React.Component {
  state = {
    searchTerm: '',
  };
  handleChange = ({ target: { value } }) => {
    this.setState({ searchTerm: value });
  };
  render() {
    let filteredArticles = articles.filter((article) =>
      article.title.toLowerCase().includes(this.state.searchTerm)
    );
    return (
      <>
        <input
          placeholder="Search"
          className="search"
          value={this.state.searchTerm}
          onChange={this.handleChange}
        />
        <ul className="articles">
          {filteredArticles.map((article) => (
            <li key={article.title}>
              <Link to={`/articles/${article.slug}`}>
                <h3>{article.title}</h3>
              </Link>
              <small>{article.author}</small>
            </li>
          ))}
        </ul>
        <Outlet />
      </>
    );
  }
}

export default Articles;
