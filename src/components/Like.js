import React from "react";

const Like = ({ onClick, likeStatus }) => {
  var classes = "badge badge-";
  classes += likeStatus ? "success" : "primary";
  return (
    <span className={classes} style={{ cursor: "pointer" }} onClick={onClick}>
      Like
    </span>
  );
};

export default Like;
