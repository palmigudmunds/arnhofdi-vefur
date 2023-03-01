import React from "react";
import { useEffect } from "react";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { ReactComponent as Briefcase } from "../../resources/icons/briefcase.svg";
import { ReactComponent as Phone } from "../../resources/icons/phone-call.svg";

const paragraphVariants = {
  offscreen: {
    y: 50,
    opacity: 0,
  },
  onscreen: {
    y: 0,
    opacity: 1,
    transition: {
      type: "tween",
      duration: 1,
    },
  },
};

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

const Contacts = () => {
  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("onscreen");
    }
  }, [control, inView]);

  return (
    <div id="contacts" className="flex flex-col md:items-center max-w-none">
      <div className="md:w-1/2 flex flex-col md:items-center">
        <motion.h2
          className="text-start md:text-center md:w-10/12 xl:w-8/12"
          ref={ref}
          variants={headerVariants}
          initial="offscreen"
          animate={control}
        >
          Helstu tengiliðir
        </motion.h2>
      </div>
      <motion.div
        className="grid md:grid-cols-2 gap-8 md:gap-10 pt-10"
        ref={ref}
        variants={paragraphVariants}
        initial="offscreen"
        animate={control}
      >
        <div className="border-2 p-10 border-maingold shadow-[-5px_5px] shadow-maingold min-h[12rem] max-h-[15rem]">
          <h3 className="mb-4">Jóel Kristjánsson</h3>
          <div className="flex items-center">
            <Briefcase className="mb-px w-5 md:w-3.5 h-auto mr-3" />
            <p className="leading-tight">Framkvæmdastjóri & verkefnastjóri</p>
          </div>
          <div className="flex mt-2">
            <Phone className="mb-px w-5 md:w-3.5 h-auto mr-3" />
            <p>690-7718</p>
          </div>
        </div>

        <div className="border-2 p-10 border-maingold shadow-[-5px_5px] shadow-maingold min-h[12rem] max-h-[15rem]">
          <h3 className="mb-4">Ísak Einar Ágústsson </h3>
          <div className="flex items-center">
            <Briefcase className="mb-px w-5 md:w-3.5 h-auto mr-3" />
            <p className="leading-tight">Skrifstofa</p>
          </div>
          <div className="flex mt-2">
            <Phone className="mb-px w-5 md:w-3.5 h-auto mr-3" />
            <p>855-3344</p>
          </div>
        </div>

        <div className="border-2 p-10 border-maingold shadow-[-5px_5px] shadow-maingold min-h[12rem] max-h-[15rem]">
          <h3 className="mb-4">Israel Diaz</h3>
          <div className="flex items-center">
            <Briefcase className="mb-px w-5 md:w-3.5 h-auto mr-3" />
            <p className="leading-tight">Verkefnastjóri</p>
          </div>
          <div className="flex mt-2">
            <Phone className="mb-px w-5 md:w-3.5 h-auto mr-3" />
            <p>769-6496</p>
          </div>
        </div>

        <div className="border-2 p-10 border-maingold shadow-[-5px_5px] shadow-maingold min-h[12rem] max-h-[15rem]">
          <h3 className="mb-4">Þorsteinn Elvar</h3>
          <div className="flex items-center">
            <Briefcase className="mb-px w-5 md:w-3.5 h-auto mr-3" />
            <p className="leading-tight">Mannauðsstjóri</p>
          </div>
          <div className="flex mt-2">
            <Phone className="mb-px w-5 md:w-3.5 h-auto mr-3" />
            <p>777-0263</p>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default Contacts;
