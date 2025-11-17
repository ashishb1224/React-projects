const Hero = () => {
  return (
    <main className="hero-section container">
      <div className="hero-content">
        <h1>YOUR FEET DESERVE THE BEST</h1>
        <p>
          YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH OUR
          SHOES.YOUR FEET DESERVE THE BEST AND WE'RE HERE TO HELP YOU WITH
          OURSHOES.
        </p>
        <div className="hero-button">
          <button className="btn">Shop Now</button>
          <button className="category-button">Category</button>
        </div>
        <div className="shopping"> 
          <p>Also Available on</p>
        </div>
        <div className="social-media">
          <img src="/images/flipkart.png" alt="Flipkart" />
          <img src="/images/amazon.png" alt="Amazon" />
        </div>
      </div>

      <div className="hero-image">
        <img src="/images/shoe_image.png" alt="" />
      </div>
    </main>
  );
};

export default Hero;
