import React from "react";
import HeroSection from "./HeroSection";
import mac from "../../assets/mac-system-cut.jfif";
import iphone from "../../assets/iphone-14-pro.webp";
import FeaturedProducts from "./FeaturedProducts";

const HomePage = () => {
  return (
    <div>
      <HeroSection
        title="Buy iPhone 14 Pro"
        subtitile="Experience the power of the latest iPhone 14 with our most Pro camera ever"
        link="/"
        image={iphone}
      />
      <FeaturedProducts />

      <HeroSection
        title="Built the ultimate setup"
        subtitile="Experience the power of the latest iPhone 14 with our most Pro camera ever"
        link="/"
        image={mac}
      />
    </div>
  );
};

export default HomePage;
