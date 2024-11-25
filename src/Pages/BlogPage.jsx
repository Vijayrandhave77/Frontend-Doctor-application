import React from "react";

function BlogPage() {
  const blog = [
    {
      img: "/img1.png",
      date: "January 18, 2024",
      title: "HOW TO ADD VOLUME & SHAPE TO FACE",
      des: "Aliquet bibendum enim facilisis gravida egestas dui id ornare.",
    },
    {
      img: "/img2.png",
      date: "January 18, 2024",
      title: "HOW TO ADD VOLUME & SHAPE TO FACE",
      des: "Aliquet bibendum enim facilisis gravida egestas dui id ornare.",
    },
    {
      img: "/img3.jpg",
      date: "January 18, 2024",
      title: "HOW TO ADD VOLUME & SHAPE TO FACE",
      des: "Aliquet bibendum enim facilisis gravida egestas dui id ornare.",
    },
    {
      img: "/img11.jpg",
      date: "January 18, 2024",
      title: "HOW TO ADD VOLUME & SHAPE TO FACE",
      des: "Aliquet bibendum enim facilisis gravida egestas dui id ornare.",
    },
    {
      img: "/img22.jpg",
      date: "January 18, 2024",
      title: "HOW TO ADD VOLUME & SHAPE TO FACE",
      des: "Aliquet bibendum enim facilisis gravida egestas dui id ornare.",
    },
    {
      img: "/img33.jpg",
      date: "January 18, 2024",
      title: "HOW TO ADD VOLUME & SHAPE TO FACE",
      des: "Aliquet bibendum enim facilisis gravida egestas dui id ornare.",
    },
  ];
  return (
    <div className="blog-page-components">
      <div className="contact-heading">
        <h1>Our Blog</h1>
      </div>
      <div className="blog-box">
        {blog.map((item) => (
          <div className="blog-item">
            <img src={item.img} alt="" />
            <div className="blog-des">
              <p>{item.date}</p>
              <h4>{item.title}</h4>
              <p>{item.des}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default BlogPage;
