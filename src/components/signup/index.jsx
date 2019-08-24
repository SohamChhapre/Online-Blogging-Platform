import React,{Component}from 'react';
import { deflate } from 'zlib';
import {BrowserRouter,Route,Link,withRouter} from 'react-router-dom';
import { validate, validateAll } from 'indicative'
import { thisExpression } from '@babel/types';
import axios from 'axios';

import config from '../../config'
import Axios from 'axios';
class signup extends Component{
   constructor(){
     super();
     this.state={
       name: '',
       password: '',
       email : '',
       password_confirmation: '',
       errors:{}
     }
   }
  validate=()=>{
    const formattederrors={}
    let flag=true
    if (!this.state.email.includes('@')){
        formattederrors['email']="invalid email"
        flag=false
    }
    if (this.state.name.length<3){
      formattederrors['name']="Invalid name";
      flag=false
    }
    if (this.state.password.length<6){
      formattederrors['password']="Password is weak";
      flag=false
    }
    if (this.state.password!=this.state.password_confirmation){
      formattederrors['confirmation']="Confirm password does not matches";
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
       Axios.post(`${config.apiUrl}/auth/register`,{name:this.state.name,
      email:this.state.email,
    password:this.state.password
     })
     .then(response => {
         console.log(response);
         this.props.history.push('/');
       })
       .catch( errors=>{
         console.log(errors)
       })
       
    }
    }
    
  handleInputChange=(event)=>{
     this.setState({
       [event.target.name] : event.target.value
     });
     console.log(this.state.name,this.state.email,this.state.password);
  }
  render(){
    return (
      <div className="mh-fullscreen bg-img center-vh p-20" style={{backgroundImage: 'url(assets/img/bg-girl.jpg)'}}>
        <div className="card card-shadowed p-50 w-400 mb-0" style={{maxWidth: '100%'}}>
          <h5 className="text-uppercase text-center">Register</h5>
          <br />
          <br />
          <form className="form-type-material" onSubmit={this.handlesubmit}>
            <div className="form-group">
              <input type="text" onChange={this.handleInputChange} name="name" className="form-control" placeholder="Username" />
             { this.state.errors['name'] && <small className="text-danger" >{this.state.errors['name']}</small> }
            </div>
            <div className="form-group">
              <input type="text" onChange={this.handleInputChange}  name="email" className="form-control" placeholder="Email address" />
              { this.state.errors['email'] && <small className="text-danger" >{this.state.errors['email']}</small> }
            </div>
            <div className="form-group">
              <input type="password" onChange={this.handleInputChange}  name="password" className="form-control" placeholder="Password" />
              { this.state.errors['password'] && <small className="text-danger" >{this.state.errors['password']}</small> }
            </div>
            <div className="form-group">
              <input type="password" onChange={this.handleInputChange} name="password_confirmation" className="form-control" placeholder="Password (confirm)" />
              { this.state.errors['confirmation'] && <small className="text-danger" >{this.state.errors['confirmation']}</small> }
            </div>
            <br />
            <button className="btn btn-bold btn-block btn-primary" type="submit">Register</button>
          </form>
          <hr className="w-30" />
          <p className="text-center text-muted fs-13 mt-20">Already have an account?
            <Link to="/login">Sign in</Link>
          </p>
        </div>
      </div>
    )
  }
}
export default signup;