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
   render(){
       const {location} =this.props;
    return (
        <div>
        {/* <Route path="/" component={App} /> */}
    
    { location.pathname!=='/login' && location.pathname!=='/signup' && <Navbar authUser={this.state.User} /> }
 
    <Route exact path="/" component={Welcome} />
    <Route path='/signup' render={(props) => <Signup {...props} setUser={this.setUser} /> } />
    <Route path="/login" render={(props)=> <Login {...props} setUser={this.setUser}/>} />
    <Route path="/article/:id" component={SingleArticle} />
    <Route path='/articles/create' component={CreateArticle} />
    { location.pathname!=='/login'  && location.pathname!=='/signup' && <Footer /> }
    </div>

    )
   }
}
const Main=withRouter((props )=>{
    return (
        <App {...props} />
    )
    
});
ReactDOM.render(
    <BrowserRouter>
    <Main />
    </BrowserRouter>
    , document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
