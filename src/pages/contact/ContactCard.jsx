import React from "react";

const ContactCard = ({ icon, text }) => {
  return (
    <div>
      <img src={icon} alt="" />
      <span>{text}</span>
    </div>
  );
};

export default ContactCard;
