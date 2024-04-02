import React from "react";

const IconShow = ({ fill = "currentcolor", ...other }) => {
  return (
    <svg
      viewBox="0 0 24 24"
      ariaHidden="true"
      style={{height:'10px',width:'10px'}}
      fill={fill}
      {...other}
    >
      <path
        d="M23.96 17.69a.5.5 0 0 1-.46.31H.5a.5.5 0 0 1-.35-.86l11.5-11a.5.5 0 0 1 .69 0l11.5 11a.5.5 0 0 1 .12.55z"
        fillRule="evenodd"
      />
    </svg>
  );
};
export default React.memo(IconShow);
