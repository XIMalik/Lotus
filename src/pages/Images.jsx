import React, { useState, useEffect } from "react";
import images from "./imagesarray";

const Images = () => {
  const [selectedImage, setSelectedImage] = useState(null);
  const [imageModalOpen, setImageModalOpen] = useState(false);

  const videourls = [
    "https://player.vimeo.com/external/328958120.sd.mp4?s=d3e2162f908f62de987c19e35672d7b053b756d7&profile_id=164&oauth2_token_id=57447761",
  ];

  useEffect(() => {
    setImageModalOpen(!!selectedImage);
  }, [selectedImage]);

  return (
    <div className="px-10 py-[60px]">
      <h1 className="text-[#d5934d] text-lg text-left mb-5">
        Lotus Residence Gallery
      </h1>
      <div className=" grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-3 mb-2">
        {images.map((url, index) => (
          <div
            key={index}
            className="rounded-md overflow-hidden max-h-[300px] cursor-pointer"
            onClick={() => setSelectedImage(url)}
          >
            <img
              src={url}
              alt={`Image ${index + 1}`}
              className="object-cover h-[100%] w-[100%]"
            />
          </div>
        ))}
      </div>

      {imageModalOpen && (
        <div
          onClick={() => setSelectedImage(null)}
          className="fixed z-50 top-0 left-0 w-full h-full p-5 flex flex-col items-center justify-center bg-black bg-opacity-75 backdrop-blur-sm transition-opacity duration-300"
        >
          <div className="max-w-2xl w-full max-h-fit rounded-md flex flex-col overflow-hidden justify-center relative">
            <img
              src={selectedImage}
              alt="Selected Image"
              className="w-full max-h-[80vh] object-cover rounded-md"
            />
            
          </div>
          <button
              className="bottom-10 absolute flex gap-2 bg-black/10 rounded-full hover:bg-black/20 ease-in duration-300 items-center p-2"
              onClick={() => setSelectedImage(null)}
            >
              <img
                width="28"
                height="28"
                src="https://img.icons8.com/sf-black/32/FFFFFF/delete-sign.png"
                alt="delete-sign"
              />
              <span className="font-extrabold text-white text-lg ">close</span>
            </button>
        </div>
      )}
    </div>
  );
};

export default Images;
