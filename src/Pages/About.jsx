import React from "react";

function About() {
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
    <div className="about-page">
      <div className="contact-heading">
        <h1>About Us</h1>
      </div>
      <div className="about-description">
        <div className="aleft">
          <span>ESTABLISHED 1989</span>
          <h1>Wide Range Of Medical Services</h1>
          <h4>
            We have established for over 10 year,we offer modern skin care
            treatment for men
          </h4>
          <p>
            Etiam semper nibh orci, ac tincidunt mi consectetur a. In quis
            tortor ex. Morbi cursus sed neque quis dictum. Duis bibendum
            ullamcorper pharetra, Viva mus quis turpis et enim volutpat
            convallls.Suspendisse maximus ex at lacus feugiat commodo. Fusce
            iaculis odio quis massa
          </p>
          <div className="aimgs">
            <img src="/a1.jpg" alt="image" />
            <img src="/a2.jpg" alt="image" />
            <img src="/a3.jpg" alt="image" />
          </div>
        </div>
        <div className="aright">
          <img src="/a4.jpg" alt="" />
        </div>
      </div>

      <div className="Acarts-box">
        {cart.map((item) => (
          <div className="acart">
            <img src={item.img} alt="" />
            <h1>{item.title}</h1>
            <p>{item.description}</p>
          </div>
        ))}
      </div>

      <h1 className="ourdoc">OUR DOCTOTS</h1>
      <div className="AdoctorCart">
        <div className="docCart1">
          <div className="docnameplat1">
            <h2>Johny Clark</h2>
            <p>Financial Manager</p>
          </div>
        </div>
        <div className="docCart2">
          <div className="docnameplat2">
            <h2>Pau Simmons</h2>
            <p>Financial Manager</p>
          </div>
        </div>
        <div className="docCart3">
          <div className="docnameplat3">
            <h2>Alex Willey</h2>
            <p>Dermatologist</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
