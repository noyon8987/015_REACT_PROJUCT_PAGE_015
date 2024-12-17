import React from "react";

export default function HeroSection() {
  return (
    <div className="hero-section">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE’RE HERE TO <br /> HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE <br /> THE BEST AND WE’RE HERE TO HELP YOU
          WITH OUR <br />
          SHOES.
        </p>
        <div className="hero-btn">
          <button className="btn shop-btn">Shop Now</button>
          <button className="btn category-btn">Category</button>
        </div>
        <p>Also Available On</p>
        <div className="social_img">
          <img src="./src/image/flipkart.png" />
          <img src="./src/image/amazon.png" />
        </div>
      </div>

      <div className="hero-image">
        <img src="./src/image/shoe_image.png" />
      </div>
    </div>
  );
}
