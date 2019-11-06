import React from 'react';
import PropTypes from 'prop-types';
import config from '../../config'
import Articles from './Articles';

class UserArticles extends React.Component {
  constructor() {
    super();

    this.state = {
      articles: [],
    };
  }

  async componentWillMount() {

    const articles = await this.props.getUserArticles(this.props.user);
    console.log(articles.data,"In userarticle");
    this.setState({articles:articles.data});
    console.log(this.state.articles)
    // this.props.setArticles(articles.data);
  }

 

  editArticle = (article) => {
    this.props.history.push(`/article/edit/${article.id}`);
  }

  deleteArticle = async (id) => {
    await this.props.deleteArticle(id, this.props.user);

    const articles = this.state.articles.filter(article => article.id !== id);
    this.setState({
      articles: articles
    });
  }

  render() {
    return (
      <Articles
        articlearr={this.state.articles}
        handlePagination={this.handlePagination}
        deleteArticle={this.deleteArticle}
        editArticle={this.editArticle}
      />
    );
  }
}

export default UserArticles;