import React from 'react';
import Banner from './../Banner';
import Axios from 'axios';
import config from '../../config';
class CreateArticle extends React.Component{
    constructor(){
      super();
      this.state={
        image:null,
        errors:{},
        content:"",
        title:"",
        category:null,
        categories:[{id:1,name:"Technology"},{id:2,name:"Food"},{id:3,name:"Travel"},{id:4,name:"Art"},{id:5,name:"Books"},{id:6,name:"Culture"},{id:7,name:"Fashion"},{id:8,name:"Economy"},{id:9,name:"Film"}]
      }
    }
    async uploadtocloud(image){
        const form = new FormData();
        form.append('file',image);
        form.append('upload_preset','ml_default');
        console.log(form);
        const response=await Axios.post('https://api.cloudinary.com/v1_1/read-it/image/upload',form);
        console.log(response.data);
        return response;
    }
    CreateArticleserv=async(token,username)=>{
      const resp=await this.uploadtocloud(this.state.image);
      const data=this.state
      if (resp){
        console.log(resp.data.url);
      const response=await Axios.post(`${config.apiUrl2}/articles`,{title:data.title,Category:data.category,image_url:resp.data.secure_url,Content:data.content,Created_by:username},{
        headers:{
          Authorization: `Bearer ${token}`
        }
      });
      console.log(response);
    }

    }
    handleSubmit=(event)=>{
      event.preventdefault();
    }
    validate=()=>{
      const formattederrors={}
      let flag=true
      if (!this.state.title){
          formattederrors['title']="Title cannot be Empty";
          flag=false
      }
      if (!this.state.category){
        formattederrors['category']="Category Cannot be Empty";
        flag=false
      }
      if (!this.state.image){
        formattederrors['image']="Image is Required";
        flag=false
      }
      if (!this.state.content){
        formattederrors['content']="Content Cannot be Empty";
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
      const flag=this.validate();
      if(flag){
        const response=await this.CreateArticleserv(this.props.user.token,this.props.user.data.name);
        console.log(response);
        this.props.history.push('/')
      }
         
    }
     
    
    handleInputChange=(event)=>{
      this.setState({
        [event.target.name] : event.target.type==='file'? event.target.files[0] : event.target.value
      });
      console.log(this.state);
   }

    render(){
      return (<div>
       
        <Banner backgroundImage={ `url(${process.env.PUBLIC_URL}/assets/img/bg-laptop.jpg)`}
    title="Write an article"
    subtitle=""
        />
       
        <main className="main-content">
          <section className="section">
            <div className="container">
              <div className="row">
                <div className="col-12 col-lg-12">
               
                  <form className="p-30 bg-gray rounded" onSubmit={this.handlesubmit}  >
                    <div className="row">
                      <div className="form-group col-md-12 my-5">
                        <input type="file" className="form-control" name="image" onChange={this.handleInputChange} />
                        { this.state.errors['image'] && <small className="text-danger" >{this.state.errors['image']}</small> }
                      </div>
                      <div className="form-group col-12 col-md-6">
                        <input className="form-control form-control-lg" type="text" name="title" placeholder="Title" onChange={this.handleInputChange} />
                        { this.state.errors['title'] && <small className="text-danger" >{this.state.errors['title']}</small> }
                      </div>
                      <div className="form-group col-12 col-md-6">
                        <select name id className="form-control form-control-lg" name="category" onChange={this.handleInputChange}>
                          <option value>Select category</option>
                          { this.state.categories.map((category)=> <option key={category.id} value={category.name}>{category.name}</option>)}
                  
                        </select>
                        { this.state.errors['category'] && <small className="text-danger" >{this.state.errors['category']}</small> }
                      </div>
                    </div>
                    <div className="form-group">
                      <textarea className="form-control form-control-lg" rows={5} placeholder="Content" name="content" onChange={this.handleInputChange} defaultValue={""} />
                      { this.state.errors['content'] && <small className="text-danger" >{this.state.errors['content']}</small> }
                    </div>
                    <div className="text-center">
                      <button className="btn btn-lg btn-primary" type="submit">Create Article</button>
                    </div>
                  </form>
                </div>
              </div>
            </div>
          </section>
        </main>
      </div>)
}
}

export default CreateArticle;