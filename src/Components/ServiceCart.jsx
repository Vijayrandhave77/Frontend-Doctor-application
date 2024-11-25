import React from "react";
import { NavLink } from "react-router-dom";
function ServiceCart() {
  const cart = [
    {
      img: "/c1.png",
      title: "Organic",
      description:
        "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing…",
    },
    {
      img: "/c2.png",
      title: "Natural",
      description:
        "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing…",
    },
    {
      img: "/c3.png",
      title: "Bioactive",
      description:
        "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing…",
    },
    {
      img: "c4.png",
      title: "Cosmatic",
      description:
        "Click edit button to change this text. Lorem ipsum dolor sit amet, consectetur adipiscing…",
    },
  ];
  return (
    <div className="service-cart-w">
      {cart.map((item) => (
        <div className="scart">
          <img src={item.img} alt="" />
          <h1>{item.title}</h1>
          <p>{item.description}</p>
          <button><NavLink to="service">Read More</NavLink></button>
        </div>
      ))}
    </div>
  );
}

export default ServiceCart;
