import React from "react";

const Rnr = () => {
  return (
    <div className="rnr px-10 py-[40px] h-fit flex flex-col gap-4  relative">
      <div className="flex flex-col gap-2">
      <h1 className="text-[#d5934d] text-lg text-left">Rates & Reservation</h1>

      <span className="leading-loose text-[#1B1D42]/50 mb-7 w-full lg:w-[60%]">
        Indulge in comfort at Lotus Residences Shortlets, Ilorin. Thoughtfully designed
        amenities await your arrival for a seamless and enjoyable stay. Welcome
        to your home away from home.
      </span>
      </div>
      <div className="w-full flex flex-col md:flex-row gap-3 justify-center items-center">
        <div className="holder w-[100%] md:w-[50%] md:h-[300px] flex">
          <div className="receipt bg-white w-[100%] rounded-md h-[100%] p-8 flex flex-col justify-evenly">
            <div className="flex justify-between text-sm mb-5 border-dashed rounded-md border-[0.5px] p-3">
              <span className="text-black/30">Type</span>
              <span className="text-black/70">
                Reservation Price <span className="text-black/30">/ day</span>
              </span>
            </div>
            <hr className="mb-5 border-dotted" />

            <div className="details flex flex-col gap-2 text-md md:text-lg">
              <div className="flex justify-between items-center mb-5 border-dashed rounded-xl">
                <span className="text-black/50">Studio apartment</span>
                <span className="text-black/70 font-bold">
                  ₦35000.00
                </span>
              </div>
              <div className="flex justify-between mb-5 border-dashed rounded-xl">
                <span className="text-black/50">1-bedroom apartment</span>
                <span className="text-black/70 font-bold">
                  ₦50000.00
                </span>
              </div>
              <div className="flex justify-between mb-5 border-dashed rounded-xl">
                <span className="text-black/50">2-bedroom apartment</span>
                <span className="text-black/70 font-bold">
                  ₦70000.00
                </span>
              </div>
              <div className="flex justify-between mb-5 border-dashed rounded-xl">
                <span className="text-black/50">2 bed maisonette</span>
                <span className="text-black/70 font-bold">
                  ₦85000.00
                </span>
              </div>
            </div>

            <hr className="mb-5 border-dotted" />

            <a target='_blank' href="https://www.google.com/maps/place/Lotus+Residence/@8.4773007,4.4904218,18z/data=!4m9!1m2!2m1!1s42+Gerewu+Road,+Islamic+Village,+Ilorin,+Kwara+State!3m5!1s0x103653ef4de0a005:0x44b9dbdd31e3635f!8m2!3d8.4773009!4d4.4916775!16s%2Fg%2F11l73ps_7n?entry=ttu">
            <div className="title text-md justify-center text-center font-extrabold text-[#d5934d] flex gap-1 items-center">
            <img width="20" height="20" src="https://img.icons8.com/ios-glyphs/24/d5934d/marker--v1.png" alt="marker--v1"/>42 Gerewu Road, Islamic Village, Ilorin, Kwara State</div></a>
          </div>
        </div>

        <div className="w-full md:w-[50%] h-[300px] flex flex-col gap-5 justify-center rounded-md p-10 bg-white tomake">
          <h1 className="text-white text-lg  text-center">
            To make a reservation or for more inquiries, reach us through either
            of the following avenues
          </h1>
          <div className="icons flex gap-5 justify-center w-full">
            <div className="icon hover:translate-y-[-5px] ease-in-out duration-500">
              <a href="https://wa.me/+2348065771879">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/fluency/48/whatsapp.png"
                  alt="whatsapp"
                />{" "}
              </a>
            </div>
            <div className="icon hover:translate-y-[-5px] ease-in-out duration-500">
              {" "}
              <a href="https://instagram.com/lotusresidencesilorin">
                <img
                  width="48"
                  height="48"
                  src="https://img.icons8.com/fluency/48/instagram-new.png"
                  alt="instagram-new"
                />
              </a>
            </div>
            <div className="icon hover:translate-y-[-5px] ease-in-out duration-500">
              {" "}
              <a href="tel:+2348065771879">
                <img
                  width="40"
                  height="40"
                  src="https://img.icons8.com/ios-filled/50/FFFFFF/apple-phone.png"
                  alt="apple-phone"
                />{" "}
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};



export default Rnr;
