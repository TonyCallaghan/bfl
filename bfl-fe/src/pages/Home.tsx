import React from "react";
import Navbar from "../components/NavBar";
import { gsap } from "gsap";
import Explanation from "../components/Explanation";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Blob from "../components/Blob";



const Home = () => {
  return (
    <div className="bg-[#1d1d1f] text-white">
      {/* <section>
        <div id="blob" ref={blobRef} />
        <div id="blur" />
      </section> */}
      <Navbar />
      <Hero />
      <Explanation />

      <section
        id="section2"
        className="h-screen w-screen bg-primary flex justify-center items-center z-50"
      >
        <h1 className="text-6xl">Section 2</h1>
      </section>

      <section
        id="section3"
        className="h-screen w-screen bg-red flex justify-center items-center"
      >
        <h1 className="text-6xl">Section 3</h1>
      </section>

      <Footer />
    </div>
  );
};

export default Home;
