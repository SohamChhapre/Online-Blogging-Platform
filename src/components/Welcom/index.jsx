import React from 'react';
import Article from './../Article'
import Banner from './../Banner';
import Articles from './Articles';
import config from '../../config';
class Welcome extends React.Component{
  constructor(){
    super();
    this.state={
      articles:[],
      next_url:null,
      prev_url:null
    }
  }
  async componentWillMount(){
    const articles=await this.props.getarticles();
    console.log(articles.data);
    this.setState({
      articles:articles.data,next_url:articles.next,prev_url:articles.previous
    })
   console.log(this.state);
  }

  handlepagination= async (url)=>{
    console.log("In welcome",url)
    url=  `${config.apiUrl2}`+url
    const articles=await this.props.getarticles(url);
    this.setState({
      articles:articles.data,next_url:articles.next,prev_url:articles.previous
    })
    console.log(this.state);
  }
  render(){
    return (<Articles articlearr={this.state.articles} handlepagination={this.handlepagination}  prev_url={this.state.prev_url} next_url={this.state.next_url} />)
  }

}


export default Welcome;