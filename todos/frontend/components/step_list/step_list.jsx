import React from "react";
import StepListItemContainer from "./step_list_item_container";
import StepForm from "./step_form";

class StepList extends React.Component {
  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div>
        {/* <StepForm /> */}
        <ul>
          {this.props.steps.map((step, idx) => {
            return <StepListItemContainer key={idx} step={step} />;
          })}
        </ul>
      </div>
    );
  }
}

export default StepList;
