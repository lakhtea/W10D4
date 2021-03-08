import React from "react";

class StepForm extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      id: this.uniqueId(),
      title: "",
      description: "",
      todo_id: this.props.todo_id,
    };
    this.updateTitle = this.updateTitle.bind(this);
    this.updateDescription = this.updateDescription.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  updateTitle(e) {
    this.setState({
      title: e.target.value,
    });
  }

  updateDescription(e) {
    this.setState({
      description: e.target.value,
    });
  }

  handleSubmit(e) {
    e.preventDefault();
    this.props.receiveStep(this.state);
    this.setState({
      id: this.uniqueId(),
      title: "",
      description: "",
    });
  }

  uniqueId() {
    return new Date().getTime();
  }

  render() {
    return (
      <div>
        <form onSubmit={this.handleSubmit}>
          <label>
            Title:
            <input
              onChange={this.updateTitle}
              type="text"
              value={this.state.title}
            />
          </label>
          <label>
            Description:
            <input
              onChange={this.updateDescription}
              type="text"
              value={this.state.description}
            />
          </label>

          <button>Create Step!</button>
        </form>
      </div>
    );
  }
}

export default StepForm;
