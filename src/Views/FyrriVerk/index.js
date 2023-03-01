import Loading from "../../components/Loading";
import ImageCarousel from "../../components/ImageCarousel";
import { Suspense } from "react";

// Sólpallar og grindverk imports
import grindverk1 from "../../resources/images/solpallar-grindverk/img1.jpg";
import grindverk2 from "../../resources/images/solpallar-grindverk/img2.jpg";
import grindverk3 from "../../resources/images/solpallar-grindverk/img3.jpg";
import grindverk4 from "../../resources/images/solpallar-grindverk/img4.jpg";
import grindverk5 from "../../resources/images/solpallar-grindverk/img5.jpg";
import grindverk6 from "../../resources/images/solpallar-grindverk/img6.jpg";
import grindverk7 from "../../resources/images/solpallar-grindverk/img7.jpg";
import grindverk8 from "../../resources/images/solpallar-grindverk/img8.jpg";
import grindverk9 from "../../resources/images/solpallar-grindverk/img9.jpg";
import grindverk10 from "../../resources/images/solpallar-grindverk/img10.jpg";
import grindverk11 from "../../resources/images/solpallar-grindverk/img11.JPG";

// Utanhúsklæðning imports
import utanhusklaedning1 from "../../resources/images/utanhusklaedning/img1.jpg";
import utanhusklaedning2 from "../../resources/images/utanhusklaedning/img2.jpg";
import utanhusklaedning3 from "../../resources/images/utanhusklaedning/img3.jpg";
import utanhusklaedning4 from "../../resources/images/utanhusklaedning/img4.jpg";
import utanhusklaedning6 from "../../resources/images/utanhusklaedning/img6.jpg";
import utanhusklaedning7 from "../../resources/images/utanhusklaedning/img7.jpg";
import utanhusklaedning8 from "../../resources/images/utanhusklaedning/img8.JPG";

// Deko Gler imports
import dekogler1 from "../../resources/images/deko-gler/img1.jpeg";
import dekogler2 from "../../resources/images/deko-gler/img2.jpeg";
import dekogler3 from "../../resources/images/deko-gler/img4.jpeg";
import dekogler4 from "../../resources/images/deko-gler/img5.jpeg";

// Hurðir léttir veggir imports
import hurdirLettirVeggir1 from "../../resources/images/hurdir-lettirveggir/img1.jpg";
import hurdirLettirVeggir2 from "../../resources/images/hurdir-lettirveggir/img2.jpeg";
import hurdirLettirVeggir3 from "../../resources/images/hurdir-lettirveggir/img3.jpg";
import hurdirLettirVeggir4 from "../../resources/images/hurdir-lettirveggir/img4.jpg";
import hurdirLettirVeggir5 from "../../resources/images/hurdir-lettirveggir/img5.jpg";
import hurdirLettirVeggir6 from "../../resources/images/hurdir-lettirveggir/img6.JPG";
import hurdirLettirVeggir7 from "../../resources/images/hurdir-lettirveggir/img7.jpg";
import hurdirLettirVeggir8 from "../../resources/images/hurdir-lettirveggir/img8.jpg";
import hurdirLettirVeggir9 from "../../resources/images/hurdir-lettirveggir/img9.jpg";

const grindverkImages = [
  {
    src: grindverk10,
    alt: "Grindverk",
  },
  {
    src: grindverk1,
    alt: "Grindverk",
  },
  {
    src: grindverk2,
    alt: "Grindverk",
  },
  {
    src: grindverk3,
    alt: "Grindverk",
  },
  {
    src: grindverk4,
    alt: "Grindverk",
  },
  {
    src: grindverk5,
    alt: "Grindverk",
  },
  {
    src: grindverk6,
    alt: "Grindverk",
  },
  {
    src: grindverk7,
    alt: "Grindverk",
  },
  {
    src: grindverk9,
    alt: "Grindverk",
  },
  {
    src: grindverk8,
    alt: "Grindverk",
  },
  {
    src: grindverk11,
    alt: "Grindverk",
  },
];

const utanhusklaedningImages = [
  {
    src: utanhusklaedning1,
    alt: "Utanhúsklæðning",
  },
  {
    src: utanhusklaedning2,
    alt: "Utanhúsklæðning",
  },
  {
    src: utanhusklaedning3,
    alt: "Utanhúsklæðning",
  },
  {
    src: utanhusklaedning4,
    alt: "Utanhúsklæðning",
  },
  {
    src: utanhusklaedning6,
    alt: "Utanhúsklæðning",
  },
  {
    src: utanhusklaedning7,
    alt: "Utanhúsklæðning",
  },
  {
    src: utanhusklaedning8,
    alt: "Utanhúsklæðning",
  },
];

const dekoglerImages = [
  {
    src: dekogler1,
    alt: "Deko Gler",
  },
  {
    src: dekogler2,
    alt: "Deko Gler",
  },
  {
    src: dekogler3,
    alt: "Deko Gler",
  },
  {
    src: dekogler4,
    alt: "Deko Gler",
  }
];

const hurdirLettirVeggirImages = [
  {
    src: hurdirLettirVeggir1,
    alt: "Hurðir og léttir veggir",
  },
  {
    src: hurdirLettirVeggir2,
    alt: "Hurðir og léttir veggir",
  },
  {
    src: hurdirLettirVeggir3,
    alt: "Hurðir og léttir veggir",
  },
  {
    src: hurdirLettirVeggir6,
    alt: "Hurðir og léttir veggir",
  },
  {
    src: hurdirLettirVeggir7,
    alt: "Hurðir og léttir veggir",
  },
  {
    src: hurdirLettirVeggir8,
    alt: "Hurðir og léttir veggir",
  },
  {
    src: hurdirLettirVeggir9,
    alt: "Hurðir og léttir veggir",
  },
  {
    src: hurdirLettirVeggir4,
    alt: "Hurðir og léttir veggir",
  },
  {
    src: hurdirLettirVeggir5,
    alt: "Hurðir og léttir veggir",
  },
];

const FyrriVerkView = () => {
  return (
    <>
      <Suspense fallback={<Loading />}>
        <section className="max-w-screen-xl mx-auto px-3 space-y-20 mb-12">
          <section
            id="fyrri-verk-header"
            className="relative -mt-5 flex flex-col items-center justify-center text-center text-white py-0 px-3"
          >
            <div className="space-y-2 flex flex-col justify-start items-center max-w-none md:max-w-screen-xl mx-auto md:max-h-screen space-x-0 px-3">
              <div className="w-full mt-5 md:mt-0">
                <h1 className="text-center">Fyrri verk</h1>
              </div>
            </div>
          </section>
          <ImageCarousel title={"Utanhúsklæðning"} images={utanhusklaedningImages} />
          <ImageCarousel title={"Deko gler"} images={dekoglerImages} />
          <ImageCarousel title={"Sólpallar og grindverk"} images={grindverkImages} />
          <ImageCarousel
            title={"Hurðir og léttir veggir"}
            images={hurdirLettirVeggirImages}
          />
        </section>
      </Suspense>
    </>
  );
};

export default FyrriVerkView;
