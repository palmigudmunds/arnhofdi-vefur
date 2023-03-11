import Loading from "../../components/Loading";
import ImageCarousel from "../../components/ImageCarousel";
import { Suspense } from "react";
import { grindverkImages } from "../../resources/images/grindverk";
import { utanhusklaedningImages } from "../../resources/images/utanhusklaedning";
import { dekoglerImages } from "../../resources/images/dekogler";
import { hurdirLettirVeggirImages } from "../../resources/images/hurdirlettirveggir";
import { thakvinnaImages } from "../../resources/images/thakvinna";
import { gluggarglerImages } from "../../resources/images/gluggargler";

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
          <ImageCarousel
            title={"Utanhúsklæðning"}
            images={utanhusklaedningImages}
          />
          <ImageCarousel title={"Deko gler"} images={dekoglerImages} />
          <ImageCarousel
            title={"Sólpallar og grindverk"}
            images={grindverkImages}
          />
          <ImageCarousel title={"Þök og þakkanntar"} images={thakvinnaImages} />
          <ImageCarousel title={"Gluggar og gler"} images={gluggarglerImages} />
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
