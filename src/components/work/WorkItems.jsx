import React from "react";

const WorkItems = ({ item }) => {
  return (
    <div className="work__card" key={item.id}>
      <img src={item.image} alt="" className="work__img" />
      <h3 className="work__title">{item.title}</h3>
      <div className="github__button">
        <a href={item.client} className="work__button">
          GitHub Client <i className="bx bxl-github work__button-icon"></i>
        </a>
        <a href={item.server} className="work__button">
          GitHub Server <i className="bx bxl-github work__button-icon"></i>
        </a>
      </div>
      <a href={item.live_link} className="work__button">
        Live Site <i className="bx bx-right-arrow-alt work__button-icon"></i>
      </a>
    </div>
  );
};

export default WorkItems;
