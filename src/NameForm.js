import React, { Component } from 'react';

class NameForm extends Component {
    constructor(props) {
      super(props);

      this.state = {
        title: '',
        author: ''
      };
  
      this.handleChangeTitle = this.handleChangeTitle.bind(this);
      this.handleChangeAuthor = this.handleChangeAuthor.bind(this);
      this.handleSubmit = this.handleSubmit.bind(this);
    }
  
    handleChangeTitle(event) {
      this.setState({title: event.target.value});
    }

    handleChangeAuthor(event) {
      this.setState({author: event.target.value});
    }
  
    handleSubmit(event) {
      event.preventDefault();
      this.props.onSubmit(this.state)
    }
  
    render() {
      return (
        <form onSubmit={this.handleSubmit}>
        <div className="form-group">
          <label htmlFor="title">Title</label>
          <input type="text" className="form-control" id="title" placeholder="Enter Title" value={this.state.title} onChange={this.handleChangeTitle} />
        </div>
        <div className="form-group">
          <label htmlFor="author">Author</label>
          <input type="text" className="form-control" id="author" placeholder="Enter Author" value={this.state.author} onChange={this.handleChangeAuthor}/>
        </div>
        <div className="form-group">
          <button type="submit" className="btn btn-primary">Submit</button>
        </div>
      </form>
      );
    }
  }

export default NameForm;