import React from 'react';

class TodoForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.uniqueId(),
      title: "",
      body: "",
      tags: [],
      done: false
    }

    this.updateTitle = this.updateTitle.bind(this);
    this.updateBody = this.updateBody.bind(this);
    // this.updateTags = this.updateTags.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }
  
  updateTitle(e) {
    this.setState({
      title: e.target.value
    })
  }
  
  updateBody(e) {
    this.setState({
      body: e.target.value
    })
  }
  
  // updateTags(e) {
  //   const tags = this.state.tags
  //   tags.push(e.target.value);
  //   console.log(this.state.tags);
  //   this.setState({
  //     tags: tags
  //   })
  // }

  handleSubmit(e) {
    e.preventDefault();
    this.props.createTodo(this.state).then( 
     () => this.setState({
        id: this.uniqueId(),
        title: "",
        body: "",
        tags: [],
        done: false
    }));
  } 

 uniqueId() {
  return new Date().getTime();
 }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>Title:
            <input type="text" onChange={this.updateTitle} value={this.state.title}/>
          </label>
    
          <label>Body:
            <textarea onChange={this.updateBody} value={this.state.body} cols="30" rows="10"></textarea>
          </label>
    
          {/* <label>Tags:
            <input type="text" onChange={this.updateTags} value={this.state.tags}/>
          </label> */}

          <button>Make Todo!</button>
        </form>
        {/* <ul>
          {
            this.props.receiveErrors
          }
        </ul> */}
      </div>
    );
  }
}

export default TodoForm;