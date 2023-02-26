import Loading from "../../components/Loading";
import ImageCarousel from "../../components/ImageCarousel";
import { Suspense } from "react";

// Grindverk imports
import grindverk1 from "../../resources/images/grindverk/img1.jpg";
import grindverk2 from "../../resources/images/grindverk/img2.jpg";
import grindverk3 from "../../resources/images/grindverk/img3.jpg";
import grindverk4 from "../../resources/images/grindverk/img4.jpg";
import grindverk5 from "../../resources/images/grindverk/img5.jpg";
import grindverk6 from "../../resources/images/grindverk/img6.jpg";
import grindverk7 from "../../resources/images/grindverk/img7.jpg";
import grindverk8 from "../../resources/images/grindverk/img8.jpg";
import grindverk9 from "../../resources/images/grindverk/img9.jpg";

// Bustadur imports
import bustadur1 from "../../resources/images/bustadur/img1.jpg";
import bustadur2 from "../../resources/images/bustadur/img2.jpg";
import bustadur3 from "../../resources/images/bustadur/img3.jpg";
import bustadur4 from "../../resources/images/bustadur/img4.jpg";
import bustadur5 from "../../resources/images/bustadur/img5.jpg";
import bustadur6 from "../../resources/images/bustadur/img6.jpg";
import bustadur7 from "../../resources/images/bustadur/img7.jpg";
import bustadur8 from "../../resources/images/bustadur/img8.JPG";
import bustadur9 from "../../resources/images/bustadur/img9.JPG";
import bustadur10 from "../../resources/images/bustadur/img10.JPG";

// Deko Gler imports
import dekogler1 from "../../resources/images/deko-gler/img1.jpeg";
import dekogler2 from "../../resources/images/deko-gler/img2.jpeg";
import dekogler3 from "../../resources/images/deko-gler/img3.jpeg";
import dekogler4 from "../../resources/images/deko-gler/img4.jpeg";
import dekogler5 from "../../resources/images/deko-gler/img5.jpeg";

// Hjólageymsla imports
import hjolageymsla1 from "../../resources/images/hjolageymsla/img1.jpg";
import hjolageymsla2 from "../../resources/images/hjolageymsla/img2.jpg";
import hjolageymsla3 from "../../resources/images/hjolageymsla/img3.jpg";
import hjolageymsla4 from "../../resources/images/hjolageymsla/img4.jpg";
import hjolageymsla5 from "../../resources/images/hjolageymsla/img5.jpg";
import hjolageymsla6 from "../../resources/images/hjolageymsla/img6.jpg";
import hjolageymsla7 from "../../resources/images/hjolageymsla/img7.jpg";
import hjolageymsla8 from "../../resources/images/hjolageymsla/img8.jpg";

// Hurðir imports
import hurdir1 from "../../resources/images/hurdir/img1.jpg";
import hurdir2 from "../../resources/images/hurdir/img2.jpg";
import hurdir3 from "../../resources/images/hurdir/img3.jpg";
import hurdir4 from "../../resources/images/hurdir/img4.jpg";
import hurdir5 from "../../resources/images/hurdir/img5.jpg";
import hurdir6 from "../../resources/images/hurdir/img6.jpg";
import hurdir7 from "../../resources/images/hurdir/img7.jpg";
import hurdir8 from "../../resources/images/hurdir/img8.jpg";
import hurdir9 from "../../resources/images/hurdir/img9.jpg";

// Hurðir léttir veggir imports
import hurdirLettirVeggir1 from "../../resources/images/hurdir-lettirveggir/img1.jpg";
import hurdirLettirVeggir2 from "../../resources/images/hurdir-lettirveggir/img2.jpg";
import hurdirLettirVeggir3 from "../../resources/images/hurdir-lettirveggir/img3.jpg";
import hurdirLettirVeggir4 from "../../resources/images/hurdir-lettirveggir/img4.jpg";
import hurdirLettirVeggir5 from "../../resources/images/hurdir-lettirveggir/img5.jpeg";
import hurdirLettirVeggir6 from "../../resources/images/hurdir-lettirveggir/img6.jpg";
import hurdirLettirVeggir7 from "../../resources/images/hurdir-lettirveggir/img7.jpg";
import hurdirLettirVeggir8 from "../../resources/images/hurdir-lettirveggir/img8.jpg";

const grindverkImages = [
  {
    src: grindverk1,
    alt: "Grindverk 1",
  },
  {
    src: grindverk2,
    alt: "Grindverk 2",
  },
  {
    src: grindverk3,
    alt: "Grindverk 3",
  },
  {
    src: grindverk4,
    alt: "Grindverk 4",
  },
  {
    src: grindverk5,
    alt: "Grindverk 5",
  },
  {
    src: grindverk6,
    alt: "Grindverk 6",
  },
  {
    src: grindverk7,
    alt: "Grindverk 7",
  },
  {
    src: grindverk8,
    alt: "Grindverk 8",
  },
  {
    src: grindverk9,
    alt: "Grindverk 9",
  },
];

const bustadurImages = [
  {
    src: bustadur1,
    alt: "Bustadur 1",
  },
  {
    src: bustadur2,
    alt: "Bustadur 2",
  },
  {
    src: bustadur3,
    alt: "Bustadur 3",
  },
  {
    src: bustadur4,
    alt: "Bustadur 4",
  },
  {
    src: bustadur5,

    alt: "Bustadur 5",
  },
  {
    src: bustadur6,
    alt: "Bustadur 6",
  },
  {
    src: bustadur7,
    alt: "Bustadur 7",
  },
  {
    src: bustadur8,
    alt: "Bustadur 8",
  },
  {
    src: bustadur9,
    alt: "Bustadur 9",
  },
  {
    src: bustadur10,
    alt: "Bustadur 10",
  },
];

const dekoglerImages = [
  {
    src: dekogler1,
    alt: "Deko Gler 1",
  },
  {
    src: dekogler2,
    alt: "Deko Gler 2",
  },
  {
    src: dekogler3,
    alt: "Deko Gler 3",
  },
  {
    src: dekogler4,
    alt: "Deko Gler 4",
  },
  {
    src: dekogler5,
    alt: "Deko Gler 5",
  },
];

const hjolageymslaImages = [
  {
    src: hjolageymsla1,
    alt: "Hjólageymsla 1",
  },
  {
    src: hjolageymsla2,
    alt: "Hjólageymsla 2",
  },
  {
    src: hjolageymsla3,
    alt: "Hjólageymsla 3",
  },
  {
    src: hjolageymsla4,
    alt: "Hjólageymsla 4",
  },
  {
    src: hjolageymsla5,
    alt: "Hjólageymsla 5",
  },
  {
    src: hjolageymsla6,
    alt: "Hjólageymsla 6",
  },
  {
    src: hjolageymsla7,
    alt: "Hjólageymsla 7",
  },
  {
    src: hjolageymsla8,
    alt: "Hjólageymsla 8",
  },
];

const hurdirImages = [
  {
    src: hurdir1,
    alt: "Hurðir 1",
  },
  {
    src: hurdir2,
    alt: "Hurðir 2",
  },
  {
    src: hurdir3,
    alt: "Hurðir 3",
  },
  {
    src: hurdir4,
    alt: "Hurðir 4",
  },
  {
    src: hurdir5,
    alt: "Hurðir 5",
  },
  {
    src: hurdir6,
    alt: "Hurðir 6",
  },
  {
    src: hurdir7,
    alt: "Hurðir 7",
  },
  {
    src: hurdir8,
    alt: "Hurðir 8",
  },
  {
    src: hurdir9,
    alt: "Hurðir 9",
  },
];

const hurdirLettirVeggirImages = [
  {
    src: hurdirLettirVeggir1,
    alt: "Hurðir og léttir veggir 1",
  },
  {
    src: hurdirLettirVeggir2,
    alt: "Hurðir og léttir veggir 2",
  },
  {
    src: hurdirLettirVeggir3,
    alt: "Hurðir og léttir veggir 3",
  },
  {
    src: hurdirLettirVeggir4,
    alt: "Hurðir og léttir veggir 4",
  },
  {
    src: hurdirLettirVeggir5,
    alt: "Hurðir og léttir veggir 5",
  },
  {
    src: hurdirLettirVeggir6,
    alt: "Hurðir og léttir veggir 6",
  },
  {
    src: hurdirLettirVeggir7,
    alt: "Hurðir og léttir veggir 7",
  },
  {
    src: hurdirLettirVeggir8,
    alt: "Hurðir og léttir veggir 8",
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
          <ImageCarousel title={"Grindverk"} images={grindverkImages} />
          <ImageCarousel title={"Bústaður"} images={bustadurImages} />
          <ImageCarousel title={"Deko gler"} images={dekoglerImages} />
          <ImageCarousel title={"Hjólageymsla"} images={hjolageymslaImages} />
          <ImageCarousel title={"Hurðir"} images={hurdirImages} />
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
