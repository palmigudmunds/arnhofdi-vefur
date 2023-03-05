import Loading from "../../components/Loading";
import ImageCarousel from "../../components/ImageCarousel";
import { Suspense } from "react";

// Sólpallar og grindverk imports
const grindverk1 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028132/ahverk/solpallar-grindverk/img1_p60el5.jpg";
const grindverk2 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028133/ahverk/solpallar-grindverk/img2_dtx6kl.jpg";
const grindverk3 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028133/ahverk/solpallar-grindverk/img3_x3f9ed.jpg";
const grindverk4 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028135/ahverk/solpallar-grindverk/img4_v1zfme.jpg";
const grindverk5 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028136/ahverk/solpallar-grindverk/img5_ihvpv2.jpg";
const grindverk6 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028135/ahverk/solpallar-grindverk/img6_byzfio.jpg";
const grindverk7 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028135/ahverk/solpallar-grindverk/img7_kt12qq.jpg";
const grindverk8 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028133/ahverk/solpallar-grindverk/img8_rabq2e.jpg";
const grindverk9 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028135/ahverk/solpallar-grindverk/img9_tuswor.jpg";
const grindverk10 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028135/ahverk/solpallar-grindverk/img10_ojng8g.jpg";
const grindverk11 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028133/ahverk/solpallar-grindverk/img11_lxawqg.jpg";

// Utanhúsklæðning imports
const utanhusklaedning1 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678027527/ahverk/utanhusklaedning/img1_wjamjn.jpg";
const utanhusklaedning2 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678022904/ahverk/utanhusklaedning/img2_of2snq.jpg";
const utanhusklaedning3 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678027533/ahverk/utanhusklaedning/img3_d7nag5.jpg";
const utanhusklaedning4 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678027527/ahverk/utanhusklaedning/img4_wwm21j.jpg";
const utanhusklaedning6 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678027529/ahverk/utanhusklaedning/img6_hf6eef.jpg";
const utanhusklaedning7 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678027531/ahverk/utanhusklaedning/img7_vwazg9.jpg";
const utanhusklaedning8 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678027528/ahverk/utanhusklaedning/img8_crsyu5.jpg";

// Deko Gler imports
const dekogler1 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028105/ahverk/deko-gler/img1_bcp4sd.jpg";
const dekogler2 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028105/ahverk/deko-gler/img2_ywa2xa.jpg";
const dekogler3 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028105/ahverk/deko-gler/img4_gqmnso.jpg";
const dekogler4 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028105/ahverk/deko-gler/img5_paukdg.jpg";

// Hurðir léttir veggir imports
const hurdirLettirVeggir1 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028066/ahverk/hurdir-lettirveggir/img1_jikzwe.jpg";
const hurdirLettirVeggir2 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028065/ahverk/hurdir-lettirveggir/img2_w3h3yh.jpg";
const hurdirLettirVeggir3 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028069/ahverk/hurdir-lettirveggir/img3_qrxljd.jpg";
const hurdirLettirVeggir4 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028066/ahverk/hurdir-lettirveggir/img4_a5zwbv.jpg";
const hurdirLettirVeggir5 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028066/ahverk/hurdir-lettirveggir/img5_rcgmah.jpg";
const hurdirLettirVeggir7 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028069/ahverk/hurdir-lettirveggir/img7_nbgmqs.jpg";
const hurdirLettirVeggir8 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028066/ahverk/hurdir-lettirveggir/img8_xgb5iz.jpg";
const hurdirLettirVeggir9 = "https://res.cloudinary.com/dq2uenf18/image/upload/v1678028066/ahverk/hurdir-lettirveggir/img9_ujm3wx.jpg";

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
