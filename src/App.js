import React,{Component} from 'react';
import Alert from './ui-components/Alert';
class App extends Component{

  constructor(){
    super();
    this.state={
      showalert:true
    };
    this.togglealert=this.togglealert.bind(this);
  }
  togglealert(){
    this.setState({
      showalert:!this.state.showalert
    });
  }
  render (){
    return (
    <div className="container">
    <Alert type="success" toggleAlert={this.togglealert} show={this.state.showalert}>
      <small>This is alert</small>
      </Alert>
    
    </div>
    )
};
}


export default App;
