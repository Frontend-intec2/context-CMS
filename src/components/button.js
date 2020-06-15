import React from "react";
import "./button.css";
import CreateIcon from "@material-ui/icons/Create";

class Button extends React.Component {
  render() {
    return (
      <a href="#schrijf">
        <button className="btn-warning myshadow minibutton">
          <CreateIcon className="CreateIcon" />
          Schrijf je in
        </button>
      </a>



    );
  }
}

export default Button;
