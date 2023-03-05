import React, { useState } from "react";
import FsLightbox from "fslightbox-react";

const ImageCarousel = ({ title, images }) => {
  const [lightboxController, setLightboxController] = useState({
    toggler: false,
    slide: 1,
  });

  function openLightboxOnSlide(number) {
    setLightboxController({
      toggler: !lightboxController.toggler,
      slide: number,
    });
  }

  return (
    <div id="older-works" className="flex flex-col justify-center max-w-none">
      <div className="flex flex-col items-start md:items-start">
        <h2 className="text-start md:text-start">{title}</h2>
        <div className="hide-scroll-bar w-full flex overflow-x-scroll scroll-smooth pb-5 pt-8">
          <div className="flex snap-x snap-proximity flex-nowrap">
            {images.map((image, i) => (
              <div className="inline-block snap-center px-3">
                <button
                  className="relative h-80 w-64 max-w-xs items-end justify-start overflow-hidden border-2 duration-150 ease-in-out hover:shadow-[-5px_5px] border-maingold hover:shadow-maingold"
                  onClick={() => openLightboxOnSlide(i + 1)}
                >
                  <img
                    src={image.src}
                    alt={image.alt}
                    className="w-full h-full object-cover"
                  />
                </button>
              </div>
            ))}
          </div>
          <FsLightbox
            toggler={lightboxController.toggler}
            sources={images.map((image) => image.src)}
            slide={lightboxController.slide}
          />
        </div>
      </div>
    </div>
  );
};

export default ImageCarousel;
