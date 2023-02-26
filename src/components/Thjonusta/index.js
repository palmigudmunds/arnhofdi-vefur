import React, { useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { motion, useAnimation } from "framer-motion";
import { useInView } from "react-intersection-observer";

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

const Thjonusta = () => {
  let navigate = useNavigate();

  const control = useAnimation();
  const [ref, inView] = useInView();

  useEffect(() => {
    if (inView) {
      control.start("onscreen");
    }
  }, [control, inView]);

  return (
    <div
      id="thjonusta"
      className="flex flex-col-reverse md:flex-row justify-center max-w-none"
    >
      <div className="md:w-full flex flex-col items-start md:items-start pt-20 md:pt-0">
        <motion.h2
          className="text-start md:text-start md:w-10/12"
          variants={headerVariants}
          initial="offscreen"
          animate={control}
        >
          Um okkur
        </motion.h2>
        <motion.p
          className="pt-5 md:w-10/12"
          variants={paragraphVariants}
          initial="offscreen"
          animate={control}
        >
          Við erum ungt, framsækið verktakafyrirtæki sem býður upp á þjónustu í
          smíðageiranum og leggjum við mikla áherslu á vandvirkni og snyrtilegan
          frágang. Við virðum lög og samninga, sama hversu lítils háttar þeir
          eru, og höfum við heiðarleika og góð samskipti í fyrirrúmi. Við tökum
          vel á móti athugasemdum viðskiptavina og gerum okkar allra besta að
          mæta kröfum og væntingum þeirra til okkar.
        </motion.p>
        <motion.div
          className="pt-7 flex flex items-start md:w-10/12 xl:w-8/12"
          variants={paragraphVariants}
          initial="offscreen"
          animate={control}
        >
          <button
            className="bg-maingold text-white text-lg md:text-xl py-2 px-10 border border-white hover:bg-white hover:text-maingold hover:border-maingold ease-in-out duration-200"
            onClick={() => navigate("/hafdu-samband")}
          >
            Fáðu tilboð
          </button>
        </motion.div>
      </div>
      <div className="md:w-full flex flex-col items-start md:items-end">
        <motion.h2
          className="text-start md:text-start md:w-10/12"
          variants={headerVariants}
          ref={ref}
          initial="offscreen"
          animate={control}
        >
          Þjónusta
        </motion.h2>
        <motion.p
          className="pt-5 md:w-10/12"
          variants={paragraphVariants}
          initial="offscreen"
          animate={control}
        >
          Reynsla starfsmanna er fjölbreytt og bjóðum við okkar þjónustu því í
          ýmis konar verk. Starfsmenn okkar eru vanir bæði grófari vinnu (t.d.
          utanhússklæðningum, uppslátt á steypumótum, járnabindingu, þakvinnu,
          o.fl) og verkefnum innandyra en þar má nefna uppsetningu viðkvæmra
          innréttinga, s.s. DEKO kerfis, hurða, glugga, eldhúsinnréttinga og
          allt þess á milli.
        </motion.p>
      </div>
    </div>
  );
};

export default Thjonusta;
