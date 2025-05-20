import React from "react";
import Navbar from "../components/Navbar";
import { gsap } from "gsap";
import Explanation from "../components/Explanation";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Blob from "../components/Blob";
// import Carousel from "../components/Carousel";
import Section3 from "../components/Section3";
import Explanation2 from "../components/Explanation2";



const Home = () => {
  return (
    <div className="">
      <Blob />
      <Navbar />
      <Hero />
      <Explanation />
      <Explanation2 />
      {/* <Carousel /> */}

      <Section3 />

      <Footer />
    </div>
  );
};

export default Home;
