import React ,{Component} from 'react';
import { deflate } from 'zlib';
import {BrowserRouter,Route,Link,withRouter} from 'react-router-dom'
import axios from 'axios';
import config from '../../config'
class Login extends Component{
    constructor(){
      super();
      this.state={
        email:"",
        password:"",
        errors:{}

      }
    }
    handleInputChange=(event)=>{
      this.setState({
        [event.target.name] : event.target.value
      });
      console.log(this.state.email,this.state.password);
   }
   validate=()=>{
    const formattederrors={}
    let flag=true
    if (!this.state.email.includes('@')){
        formattederrors['email']="invalid email";
        flag=false
    }
    if (this.state.password.length<6){
      formattederrors['password']="wrong password";
      flag=false
    }
    this.setState({
      errors:formattederrors
    })
    return flag;
  }
   handlesubmit=async (event)=>{
    
    event.preventDefault();
    const data = this.state;
    const isvalid=this.validate()
  
    if (isvalid){
       console.log(this.state);
       axios.post(`${config.apiUrl2}/login`
       ,{ id:this.state.email,
    password:this.state.password}
     )
     .then(response => {
         console.log("res"+response);
         localStorage.setItem('user',JSON.stringify(response.data));
         this.props.setUser(response.data);
         console.log(response.data);
         this.props.history.push('/');
       })
       .catch( errors=>{
         console.log(errors.response && errors.response.status==401);
         const formattederrors={}

         if (errors.response && errors.response.status==401){
             formattederrors['email']="Invalid Credentials";
         }
         if (errors.response && errors.response.status==400){
           formattederrors['email']="User does not exist's";
         }
         
          
         this.setState({
           errors:formattederrors
         })
       })
       
    }
    }

    render(){
      return ( <div className="mh-fullscreen bg-img center-vh p-20" style={{backgroundImage: 'url(assets/img/login-bg.png)'}}><div className="card card-shadowed p-50 w-400 mb-0" style={{maxWidth: '100%'}}>
    <h5 className="text-uppercase text-center">Login</h5>
    <br /><br />
    <form onSubmit={this.handlesubmit}>
      <div className="form-group">
        <input type="text" className="form-control" name="email" onChange={this.handleInputChange}placeholder="Username" />
        { this.state.errors['email'] && <small className="text-danger" >{this.state.errors['email']}</small> }
      </div>
      <div className="form-group">
        <input type="password" className="form-control" name="password" onChange={this.handleInputChange} placeholder="Password" />
        { this.state.errors['password'] && <small className="text-danger" >{this.state.errors['password']}</small> }
      </div>
      <div className="form-group flexbox py-10">
        <label className="custom-control custom-checkbox">
          <input type="checkbox" className="custom-control-input" defaultChecked />
          <span className="custom-control-indicator" />
          <span className="custom-control-description">Remember me</span>
        </label>
        <a className="text-muted hover-primary fs-13" href="#">Forgot password?</a>
      </div>
      <div className="form-group">
        <button className="btn btn-bold btn-block btn-primary" type="submit" >Login</button>
      </div>
    </form>
    <hr className="w-30" />
    <p className="text-center text-muted fs-13 mt-20">Don't have an account? <Link to="/signup">Sign up</Link></p>
  </div>
</div>);
    }
};

export default Login;
