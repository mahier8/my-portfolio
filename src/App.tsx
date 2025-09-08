import React from "react";
import Navbar from "./components/Navbar";
import Intro from "./sections/Intro";
import Testimonials from "./sections/Testimonials";
import Portfolio from "./sections/Portfolio";
import Works from "./sections/Works";
// import SeasonBackground from "./components/SeasonBackground";

const App: React.FC = () => {
  return (
    <>
      <Navbar />
      <main>
        {/* <SeasonBackground /> */}
        <Intro />
        <Testimonials />
        <Portfolio />
        <Works />
      </main>
    </>
  );
};

export default App;
