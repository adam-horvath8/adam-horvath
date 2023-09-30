import React from "react";
import ButtonSecondary from "./ButtonSecondary";

const WorkCard = ({name, img1, img2, alt1, alt2}) => {
  return (
    <div>
      <div>
        <img src={img1} alt={alt1} />
        <img src={img2} alt={alt2} />
      </div>
      <div>
        <div>
            <h3>{name}</h3>
            //Technology icons
            <p></p>
        </div>
        <div>
            <ButtonSecondary text="Review the Code"/>
            <ButtonSecondary text="Live Preview"/>
        </div>
      </div>
    </div>
  );
};

export default WorkCard;
