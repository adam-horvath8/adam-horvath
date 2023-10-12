import React from "react";



const ButtonPrimary = ({ text, href }) => {
  return (
    <a href={href} className="nav-button">
      {text}
    </a>
  );
};

export default ButtonPrimary;
