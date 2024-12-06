import React, { useEffect, useState } from "react";
import Header from "../components/Header";
import { useParams } from "react-router-dom";
import Intro from "./Intro";
import Wyg from "./Wyg";
import Rnr from "./Rnr";
import Images from "./Images";

const Lotus = () => {
  
  const [section, setSection] = useState("");

  const routeParams = useParams();
  console.log(routeParams);

  const handleClickScroll = () => {
    const element = document.getElementById(routeParams.id);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };
  const ClickScroll = () => {
    const element = document.getElementById(section);
    if (element) {
      // 👇 Will scroll smoothly to the top of the next section
      element.scrollIntoView({ behavior: "smooth" });
    }
  };

  useEffect(() => {
    handleClickScroll();
  }, [routeParams]);

  useEffect(() => {
    ClickScroll();
  });
  return (
    <>
      <Header />
      <div className="body-text font-normal text-black text-normal text-sm flex justify-center items-center flex-col gap-3">
        <div className="links sm:gap-2">
          <button className="p-3 hover:bg-[#d5934d]/5 ease-in duration-150 text-[#1B1D42]/50 rounded-full" onClick={() => setSection("wyg")}><h1>What you get</h1></button>
          <button className="p-3 hover:bg-[#d5934d]/5 ease-in duration-150 text-[#1B1D42]/50 rounded-full" onClick={() => setSection("images")}><h1>Gallery</h1></button>
          <button className="p-3 hover:bg-[#d5934d]/5 ease-in duration-150 text-[#1B1D42]/50 rounded-full" onClick={() => setSection("rnr")}><h1>Rates & Reservation</h1></button>
        </div>
          <div id="intro" className="test w-full"><Intro/></div>
          <div id="wyg" className="test w-full bg-[#f8f8f8]/70"><Wyg/></div>
          <div id="images" className="main w-full"><Images/></div>
          <div id="rnr" className="main2 w-full bg-[#f8f8f8]"><Rnr/></div>
        </div>
        <span className="text-black/50 text-xs flex text-center justify-center w-screen bg-[#f8f8f8] py-[30px]">© 2024 Lotus Residence Shortlet Apartments, Ilorin</span>
    </>
  );
};

export default Lotus;
