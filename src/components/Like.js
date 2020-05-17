import React, { Component } from "react";

class Like extends Component {
  render() {
    var classes = "badge badge-";
    classes += this.props.likeStatus ? "success" : "primary";
    return (
      <span
        className={classes}
        style={{ cursor: "pointer" }}
        onClick={this.props.onClick}
      >
        Like
      </span>
    );
  }
}

export default Like;
