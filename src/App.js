import React, { Component } from 'react';
import './App.css';
import List from './List'
import Form from './NameForm'


class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      data: []
    }

    // This binding is necessary to make `this` work in the callback
    this.handleClick = this.handleClick.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleClick(e) {
    console.log(e.target)
    console.log("parentHandler")
  }

  handleSubmit(dataForm){
    console.log(dataForm)
  }

  componentDidMount(){
    const query = `query getCourse {courses{_id, title author description topic url }}`

    fetch('http://localhost:4000/courses', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
        'Accept': 'application/json',
      },
      body: JSON.stringify({query})
    })
    .then(r => r.json())
    .then(res => {
      const { courses } = res.data;
      this.setState({data : courses})
    })
    .catch(err => console.log("err",err));
  }

  render() {
    const { data } = this.state;
    return (
      <div className="container">
        <div className="row">         
          <div className="col-md-12">
            <Form onSubmit={this.handleSubmit} />       
            <List data={data}/>            
          </div>
        </div>
      </div>
    );
  }
}

export default App;
