import React from "react";

class StepListItem extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        <p>{this.props.step.title}</p>
        <p>{this.props.step.body}</p>
        <button>Done</button>
        <button>Delete</button>
      </div>
    );
  }
}

export default StepListItem;
