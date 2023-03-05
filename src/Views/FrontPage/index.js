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

const grindverk1 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028132/ahverk/solpallar-grindverk/img1_p60el5.jpg";
const dekogler1 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028105/ahverk/deko-gler/img1_bcp4sd.jpg";
const hurdirLettirVeggir1 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028066/ahverk/hurdir-lettirveggir/img1_jikzwe.jpg";
const utanhusklaedning2 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678022904/ahverk/utanhusklaedning/img2_of2snq.jpg";
const hurdirLettirVeggir7 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028069/ahverk/hurdir-lettirveggir/img7_nbgmqs.jpg";

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
    src: utanhusklaedning2,
    alt: "Utanhúsklæðning",
  },
  {
    src: dekogler1,
    alt: "Deko gler",
  },
  {
    src: grindverk1,
    alt: "Grindverk",
  },
  {
    src: hurdirLettirVeggir1,
    alt: "Léttir veggir",
  },
  {
    src: hurdirLettirVeggir7,
    alt: "Hjólageymsla",
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
