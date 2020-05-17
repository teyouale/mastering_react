import React, { Component } from "react";

class Like extends Component {
  render() {
    var classes = "badge badge-";
    classes += this.props.likeStatus ? "success" : "primary";
    return (
      <span className={classes} onClick={this.props.handleLike}>
        Like
      </span>
    );
  }
}

export default Like;
