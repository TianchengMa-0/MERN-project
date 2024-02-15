import React from "react";
import { Link } from "react-router-dom";
import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import './home.css'

const Home = () => {
  function handleCopy() {
    alert('COPY? MONEY!');
  }
  return (
    <div >

      <h1 onCopy={handleCopy}>Stop Coding \(O.o)/ Make Friends</h1>
      <div className="signup">
      <Link to="/signup">signup</Link>
      </div>
      <div className="login">
      <Link to="/login">login</Link>
      </div>

      <Carousel className="carousel" infiniteLoop="true" interval="3000" autoPlay="true" stopOnHover="true" showThumbs={false} >
                <div>
                    <img src="assets/image.jpg" alt="img" />
                    <p className="legend">Legend 1</p>
                </div>
                <div>
                    <img src="assets/image.jpg" alt="img" />
                    <p className="legend">Legend 2</p>
                </div>
              
            </Carousel>
      


    </div>
  );
};
  
export default Home;