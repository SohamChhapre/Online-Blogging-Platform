import React from 'react';
import ArticlePres from './ArticlePres';
class SingleArticle extends React.Component{
  constructor(){
    super();
    this.state={
     article:null,
     loading:true
    }
  }
  async componentWillMount(){
    const article=await this.props.getSingleArticle(this.props.match.params.id)
    console.log(article);
    this.setState({
      article,
      loading:false
    })
    console.log("<<<<>>>>",this.state.article)
  }
  render(){
    return (<div>{ this.state.loading && <h1>Loading</h1> }
    { !this.state.loading && <ArticlePres articledata={this.state.article}/>}
    </div>)
  }
}
export default SingleArticle;
