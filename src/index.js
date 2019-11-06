import React ,{Component} from 'react';
import ReactDOM from 'react-dom';

import * as serviceWorker from './serviceWorker';
import {BrowserRouter,Route,Link,withRouter} from 'react-router-dom'
import Navbar from './components/Navbar/index.jsx';
import Welcome from './components/Welcom/index.jsx';
import Footer from './components/Footer/index.jsx';
import CreateArticle from './components/CreateArticle/index.jsx';
import Login from './components/Login/index.jsx';
import SingleArticle from './components/SingleArticle/index.jsx';
import Signup from './components/signup/index.jsx';
import config from './config/index';
import ArticlesService from './Service/article';
import NotificationsService from './Service/notification'
import UserArticles from './components/UserArticles/index.jsx';
// import App from './App';
const Home=()=>{
    return <h1> this is the home page</h1>
};
const About=()=>{
    return <h1>This is the About page</h1>
}


class App extends Component{
    constructor(){
        super();
        this.state={
            User:null
        };
    }
    componentDidMount(){
        const user=localStorage.getItem('user');
        
        if (user){
            this.setState({
                User:JSON.parse(user)
            })
        }

    }
    setUser=(user)=>{
        this.setState({
            User:user
        });
    }
    removeauthuser=()=>{
        localStorage.removeItem('user');
        this.props.notyService.success('Successfully logged out!');
        this.setState({
            User:null
        })
    }
   render(){
       const {location} =this.props;
    return (
        <div>
        {/* <Route path="/" component={App} /> */}
    
    { location.pathname!=='/login' && location.pathname!=='/signup' && <Navbar authUser={this.state.User} removeauthuser={this.removeauthuser} /> }
 
    <Route exact path="/"  render={ (props)=> <Welcome {...props} getarticles={this.props.articlesService.getArticles}/>} />
    <Route path='/signup' render={(props) => <Signup {...props} setUser={this.setUser} /> } />
    <Route path="/login" render={(props)=> <Login {...props} setUser={this.setUser} notyService={this.props.notyService}/>} />
    <Route exact path="/article/:id" render={(props)=> <SingleArticle {...props} getSingleArticle={this.props.articlesService.getSingleArticle}/>} />
    {this.state.User && <Route path='/articles/create' render={ (props)=> <CreateArticle {...props} user={this.state.User} /> } />}
    <Route exact path="user/article/:id" render={(props)=> <SingleArticle {...props} getSingleArticle={this.props.articlesService.getSingleArticle}/>} />
    <Route exact path='/community' Component={Welcome} />
    <Route exact path='/user/articles' render={ (props)=><UserArticles {...props} user={ this.state.User.data.name} getUserArticles={this.props.articlesService.getUserArticles} deleteArticle={this.props.articlesService.deleteArticle}/>}/> 
    { location.pathname!=='/login'  && location.pathname!=='/signup' && <Footer /> }
    </div>

    )
   }
}
const Main=withRouter((props )=>{
    return (
        <App {...props}  articlesService={new ArticlesService()} notyService={new NotificationsService()} />
    )
    
});
ReactDOM.render(
    <BrowserRouter>
    <Main />
    </BrowserRouter>
    , document.getElementById('root'));

serviceWorker.unregister();
