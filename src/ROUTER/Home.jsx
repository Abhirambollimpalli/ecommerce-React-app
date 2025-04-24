
import React, { useState, useEffect } from "react";
import "./Home.css";
import { Link } from "react-router-dom";

const Home = () => {
  const [state, setState] = useState(0);
  // const images = [
  //   "https://images.vexels.com/media/users/3/194698/raw/34d9aa618f832510ce7290b4f183484a-shop-online-slider-template.jpg",
  //   "https://images.all-free-download.com/images/graphicwebp/ecommerce_website_banner_template_customers_sketch_flat_design_6920122.webp",
  //   "https://static.vecteezy.com/system/resources/previews/002/294/859/original/flash-sale-web-banner-design-e-commerce-online-shopping-header-or-footer-banner-free-vector.jpg",
  //   "https://static.vecteezy.com/system/resources/thumbnails/003/543/610/small_2x/paper-art-shopping-online-on-smartphone-and-new-buy-sale-promotion-pink-backgroud-for-banner-market-ecommerce-women-concept-free-vector.jpg",
  //   "https://img.freepik.com/premium-psd/special-offer-banner-with-3d-rendered-sale-concept_351527-1382.jpg"
  // ];

  // useEffect(() => {
  //   const interval = setInterval(() => {
  //     setState((prevIndex) =>
  //       prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //     );
  //   }, 3000); 

  //   return () => clearInterval(interval); 
  // }, [images.length]); 

  // const nextSlide = () => {
  //   setState((prevIndex) =>
  //     prevIndex === images.length - 1 ? 0 : prevIndex + 1
  //   );
  // };

  const prevSlide = () => {
    setState((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  return (
    // <div>
    //   <div className="slider-container">
    //   <button onClick={prevSlide} className="prev">❮</button>
    //   <img src={images[state]} alt="slide" className="slide-image" />
    //   <button onClick={nextSlide} className="next">❯</button>
    // </div>
    <>
    <div className="content">
      <div id="h3">
      <h1>Online Shopping</h1>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Soluta 
          tempora ipsum praesentium excepturi minus nostrum at perspiciatis in 
          consectetur. Laudantium!Lorem ipsum dolor sit amet consectetur adipisicing elit</p>
        <button id="hb"><Link  className="bl" to="/product" style={{color: "#EDF1D6", textDecoration: "none"} }>click...</Link></button>
      </div>
      <div id="h2">
        <img src="/shop1.jpg" alt=""  id="h1"/>
        <img src="/cart.png" alt="" id="home" />
      </div>
    </div>
    </>
  );
};

export default Home;
