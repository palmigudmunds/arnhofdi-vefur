import React from "react";
import Container from "../../components/container";
import Loading from "../../components/Loading";
import { Suspense } from "react";
import { useNavigate } from "react-router-dom";
import Hero from "../../components/Hero";
import Thjonusta from "../../components/Thjonusta";
import ImageCarousel from "../../components/ImageCarousel";
import Contacts from "../../components/Contacts";

const grindverk1 =
  "https://res.cloudinary.com/dq2uenf18/image/upload/q_auto,f_auto,fl_lossy/v1678028132/ahverk/solpallar-grindverk/img1_p60el5.jpg";
const dekogler1 =
  "https://res.cloudinary.com/dq2uenf18/image/upload/q_auto,f_auto,fl_lossy/v1678028105/ahverk/deko-gler/img1_bcp4sd.jpg";
const hurdirLettirVeggir1 =
  "https://res.cloudinary.com/dq2uenf18/image/upload/q_auto,f_auto,fl_lossy/v1678028066/ahverk/hurdir-lettirveggir/img1_jikzwe.jpg";
const utanhusklaedning2 =
  "https://res.cloudinary.com/dq2uenf18/image/upload/q_auto,f_auto,fl_lossy/v1678022904/ahverk/utanhusklaedning/img2_of2snq.jpg";
const hurdirLettirVeggir7 =
  "https://res.cloudinary.com/dq2uenf18/image/upload/q_auto,f_auto,fl_lossy/v1678028069/ahverk/hurdir-lettirveggir/img7_nbgmqs.jpg";

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
  },
];

const FrontPageView = () => {
  let navigate = useNavigate();

  return (
    <>
      <Suspense fallback={<Loading />}>
        <div className="space-y-12 md:space-y-24 mb-28">
          <Hero />
          <Container>
            <Thjonusta />
            <div>
              <ImageCarousel title={"Fyrri verk"} images={images} />
              <div className="flex flex items-start justify-start md:w-10/12 xl:w-8/12">
                <button
                  className="bg-maingold text-white text-lg md:text-xl py-2 px-10 border border-white hover:bg-white hover:text-maingold hover:border-maingold ease-in-out duration-200"
                  onClick={() => navigate("/fyrri-verk")}
                >
                  Sjá allt
                </button>
              </div>
            </div>
            <Contacts />
          </Container>
        </div>
      </Suspense>
    </>
  );
};

export default FrontPageView;
