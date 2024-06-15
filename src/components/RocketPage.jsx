"use client";

import Image from "next/image";
import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const RocketPage = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();
  const controls4 = useAnimation();
  const controls5 = useAnimation();
  const controls6 = useAnimation();

  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref4, inView4] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref5, inView5] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref6, inView6] = useInView({ triggerOnce: false, threshold: 0.1 });

  useEffect(() => {
    if (inView1) controls1.start("visible");
    else controls1.start("hidden");
  }, [controls1, inView1]);

  useEffect(() => {
    if (inView2) controls2.start("visible");
    else controls2.start("hidden");
  }, [controls2, inView2]);

  useEffect(() => {
    if (inView3) controls3.start("visible");
    else controls3.start("hidden");
  }, [controls3, inView3]);

  useEffect(() => {
    if (inView4) controls4.start("visible");
    else controls4.start("hidden");
  }, [controls4, inView4]);

  useEffect(() => {
    if (inView5) controls5.start("visible");
    else controls5.start("hidden");
  }, [controls5, inView5]);

  useEffect(() => {
    if (inView6) controls6.start("visible");
    else controls6.start("hidden");
  }, [controls6, inView6]);

  const variants = {
    hidden: { opacity: 0 },
    visible: { opacity: 1 },
  };

  return (
    <>
      <section
        id="rockets"
        className="p-6 my-12 scroll-mt-24 widescreen:section-min-height tallscreen:section-min-height max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Our Rockets
        </h2>
        <ul className="list-none mx-auto my-12 flex flex-col md:flex-row md:flex-wrap items-center gap-16">
          <motion.li
            className="w-full md:w-1/4 flex-col flex items-center border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl"
            ref={ref1}
            initial="hidden"
            animate={controls1}
            variants={variants}
            transition={{ duration: 1 }}
          >
            <div className="w-1/2 mb-6">
              <Image
                src="/assets/img/clients/client-2.png"
                width={500}
                height={500}
                alt="Explorer"
              />
            </div>
            <h3 className="text-3xl text-center mt-2 text-slate-900 dark:text-white">
              Explorer
            </h3>
            <p className="hidden sm:block mt-2 text-3xl text-center text-slate-500 dark:text-slate-400">
              $
            </p>
            <p className="sm:hidden text-2xl mt-2 text-center text-slate-500 dark:text-slate-400">
              Affordable Exploration
            </p>
          </motion.li>
          <motion.li
            className="w-full md:w-1/4 flex-col flex items-center border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl"
            ref={ref2}
            initial="hidden"
            animate={controls2}
            variants={variants}
            transition={{ duration: 1, delay: 0.2 }}
          >
            <div className="w-1/2 mb-6">
              <Image
                src="/assets/img/clients/client-1.png"
                width={500}
                height={500}
                alt="Adventurer"
              />
            </div>
            <h3 className="text-3xl text-center mt-2 text-slate-900 dark:text-white">
              Adventurer
            </h3>
            <p className="hidden sm:block mt-2 text-3xl text-center text-slate-500 dark:text-slate-400">
              $$
            </p>
            <p className="sm:hidden text-2xl mt-2 text-center text-slate-500 dark:text-slate-400">
              Affordable Adventurer
            </p>
          </motion.li>
          <motion.li
            className="w-full md:w-1/4 flex-col flex items-center border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl"
            ref={ref3}
            initial="hidden"
            animate={controls3}
            variants={variants}
            transition={{ duration: 1, delay: 0.4 }}
          >
            <div className="w-1/2 mb-6">
              <Image
                src="/assets/img/clients/client-5.png"
                width={500}
                height={500}
                alt="Launch"
              />
            </div>
            <h3 className="text-3xl text-center mt-2 text-slate-900 dark:text-white">
              Launch
            </h3>
            <p className="hidden sm:block mt-2 text-3xl text-center text-slate-500 dark:text-slate-400">
              $$$
            </p>
            <p className="sm:hidden text-2xl mt-2 text-center text-slate-500 dark:text-slate-400">
              Affordable Launcher
            </p>
          </motion.li>
          <motion.li
            className="w-full md:w-1/4 flex-col flex items-center border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl"
            ref={ref4}
            initial="hidden"
            animate={controls4}
            variants={variants}
            transition={{ duration: 1, delay: 0.6 }}
          >
            <div className="w-1/2 mb-6">
              <Image
                src="/assets/img/clients/client-3.png"
                width={500}
                height={500}
                alt="Pioneer"
              />
            </div>
            <h3 className="text-3xl text-center mt-2 text-slate-900 dark:text-white">
              Pioneer
            </h3>
            <p className="hidden sm:block mt-2 text-3xl text-center text-slate-500 dark:text-slate-400">
              $$
            </p>
            <p className="sm:hidden text-2xl mt-2 text-center text-slate-500 dark:text-slate-400">
              Adventurous Pioneer
            </p>
          </motion.li>
          <motion.li
            className="w-full md:w-1/4 flex-col flex items-center border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl"
            ref={ref5}
            initial="hidden"
            animate={controls5}
            variants={variants}
            transition={{ duration: 1, delay: 0.8 }}
          >
            <div className="w-1/2 mb-6">
              <Image
                src="/assets/img/clients/client-4.png"
                width={500}
                height={500}
                alt="Voyager"
              />
            </div>
            <h3 className="text-3xl text-center mt-2 text-slate-900 dark:text-white">
              Voyager
            </h3>
            <p className="hidden sm:block mt-2 text-3xl text-center text-slate-500 dark:text-slate-400">
              $$$
            </p>
            <p className="sm:hidden text-2xl mt-2 text-center text-slate-500 dark:text-slate-400">
              Affordable Voyager
            </p>
          </motion.li>
          <motion.li
            className="w-full md:w-1/4 flex-col flex items-center border-solid border-slate-900 dark:border-gray-100 dark:bg-black bg-white py-6 px-2 rounded-3xl shadow-xl"
            ref={ref6}
            initial="hidden"
            animate={controls6}
            variants={variants}
            transition={{ duration: 1, delay: 1 }}
          >
            <div className="w-1/2 mb-6">
              <Image
                src="/assets/img/clients/client-6.png"
                width={500}
                height={500}
                alt="Discoverer"
              />
            </div>
            <h3 className="text-3xl text-center mt-2 text-slate-900 dark:text-white">
              Discoverer
            </h3>
            <p className="hidden sm:block mt-2 text-3xl text-center text-slate-500 dark:text-slate-400">
              $$$$
            </p>
            <p className="sm:hidden text-2xl mt-2 text-center text-slate-500 dark:text-slate-400">
              Luxury Discoverer
            </p>
          </motion.li>
        </ul>
      </section>
      <hr className="mx-auto h-1 rounded-full bg-black dark:bg-white w-1/2"></hr>
    </>
  );
};

export default RocketPage;
