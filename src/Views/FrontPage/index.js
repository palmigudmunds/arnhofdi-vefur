import React, { useEffect } from "react";
import Container from "../../components/container";
import Loading from "../../components/Loading";
import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../../components/Hero";
import Thjonusta from "../../components/Thjonusta";
import ImageCarousel from "../../components/ImageCarousel";
import Contacts from "../../components/Contacts";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

import grindverk1 from "../../resources/images/grindverk/img1.jpg";
import dekogler1 from "../../resources/images/deko-gler/img1.jpeg";
import hurdir1 from "../../resources/images/hurdir/img1.jpg";
import hjolageymsla1 from "../../resources/images/hjolageymsla/img1.jpg";
import lettveggir1 from "../../resources/images/hurdir-lettirveggir/img1.jpg";
import bustadur2 from "../../resources/images/bustadur/img2.jpg";

const headerVariants = {
  offscreen: {
    y: 30,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 0.8,
    },
  },
};

const images = [
  {
    src: bustadur2,
    alt: "Bústaður",
  },
  {
    src: dekogler1,
    alt: "Deko gler",
  },
  {
    src: hjolageymsla1,
    alt: "Hjólageymsla",
  },
  {
    src: lettveggir1,
    alt: "Léttveggir",
  },
  {
    src: grindverk1,
    alt: "Grindverk",
  },
  {
    src: hurdir1,
    alt: "Hurðir",
  }
];

const FrontPageView = () => {
  let navigate = useNavigate();

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("onscreen");
    }
  }, [control, inView]);

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="space-y-12 md:space-y-24 mb-28">
          <Hero />
          <Container>
            <Thjonusta />
            <div>
              <ImageCarousel title={"Fyrri verk"} images={images} />
              <motion.div
                className="flex flex items-start justify-start md:w-10/12 xl:w-8/12"
                variants={headerVariants}
                ref={ref}
                initial="offscreen"
                animate={control}
              >
                <button
                  className="bg-maingold text-white text-lg md:text-xl py-2 px-10 border border-white hover:bg-white hover:text-maingold hover:border-maingold ease-in-out duration-200"
                  onClick={() => navigate("/fyrri-verk")}
                >
                  Sjá allt
                </button>
              </motion.div>
            </div>
            <Contacts />
          </Container>
        </div>
      </Suspense>
    </>
  );
};

export default FrontPageView;
