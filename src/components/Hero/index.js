import React from "react";
import { useNavigate } from "react-router-dom";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import HeroSlider, { Overlay, Slide, Nav } from "hero-slider";

import grindverk2 from "../../resources/images/grindverk/img2.jpg";
import dekogler1 from "../../resources/images/deko-gler/img1.jpeg";
import bustadur3 from "../../resources/images/bustadur/img2.jpg";

const headerVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "ease",
      duration: 0.8,
    },
  },
};

const buttonVariants = {
  offscreen: {
    y: 70,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "ease",
      duration: 1,
    },
  },
};

const Hero = () => {
  let navigate = useNavigate();

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("onscreen");
    }
  }, [control, inView]);

  return (
    <HeroSlider
      height={"75vh"}
      autoplay
      controller={{
        initialSlide: 1,
        slidingDuration: 500,
        slidingDelay: 100,
        onSliding: (nextSlide) =>
          console.debug("onSliding(nextSlide): ", nextSlide),
        onBeforeSliding: (previousSlide, nextSlide) =>
          console.debug(
            "onBeforeSliding(previousSlide, nextSlide): ",
            previousSlide,
            nextSlide
          ),
        onAfterSliding: (nextSlide) =>
          console.debug("onAfterSliding(nextSlide): ", nextSlide),
      }}
    >
      <Overlay>
        <section
          id="opening-header"
          className="relative flex flex-col items-center justify-center text-center text-white py-0 px-3"
        >
          <div className="video-content pl-0 md:pl-28 lg:pl-20 2xl:pl-0 xl:max-w-screen-xl space-y-2 flex flex-col justify-start items-center md:items-start max-w-none md:max-w-screen-xl mx-auto md:max-h-screen space-x-0 px-3">
            <div className="w-full md:w-2/5">
              <motion.h1
                className="text-center md:text-left"
                ref={ref}
                variants={headerVariants}
                initial="offscreen"
                animate={control}
              >
                Vanda skal vinnu handa því verkin sýn’ oss merkin
              </motion.h1>
            </div>
            <motion.div
              className="pt-12"
              ref={ref}
              variants={buttonVariants}
              initial="offscreen"
              animate={control}
            >
              <button
                className="bg-maingold text-white text-lg md:text-xl py-2 px-10 border border-white hover:bg-white hover:text-maingold hover:border-maingold ease-in-out duration-200"
                onClick={() => navigate("#thjonusta")}
              >
                Það sem við gerum
              </button>
            </motion.div>
          </div>
        </section>
      </Overlay>

      <Slide
        background={{
          backgroundImageSrc: bustadur3,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: grindverk2,
        }}
      />

      <Slide
        background={{
          backgroundImageSrc: dekogler1,
        }}
      />

      <Nav />
    </HeroSlider>
  );
};

export default Hero;
