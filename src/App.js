import React, { Component } from 'react';
import logo from './logo.png';
import './App.css';
import './util.css';
import { FormGroup} from 'react-bootstrap';
import Gallery from './components/Gallery.js';
import { Input,Button,Icon,Header } from 'semantic-ui-react'
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      query: '',
      items: []
    };
  }

  search() {
    const API_URL = 'https://www.googleapis.com/books/v1/volumes?q=';
    fetch(`${API_URL}${this.state.query}`)
      .then(response => response.json())
      .then(json => {
        let {items} = json;
        this.setState({items})
      }); 
  }

  render() {
    return (
      <div className="App">
       <div className="Top">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <Header as='h1'>BOOK-A-HOLIC</Header>
        
        </header>
        <h4 style={{marginTop:30,color:"#fff",fontWeight:"bold"}}>Fantastic Books and where to buy them!</h4>
       
        <div className="container main-content">
          <FormGroup style={{display:"flex",alignItems:"center",justifyContent:"center",marginTop:20}}>
  
           
              <Input type="text" required style={{width:300}} icon='search' placeholder="Search for a Book.."
              onChange={ event => this.setState({ query: event.target.value }) }
              />
         
          </FormGroup>
     
          <Button size='huge' style={{paddingTop:10,paddingBottom:10,paddingRight:20,paddingLeft:20,marginBottom:20}} content='Search..' secondary  onClick={ event => {
            this.search();
            }}>
              
               <Icon name='search' /> Search
            </Button>
            </div>
            </div>
            <div className="Gallery">
          <Gallery items={this.state.items} />
          </div>
        </div>
      
    );
  }
}

export default App;
