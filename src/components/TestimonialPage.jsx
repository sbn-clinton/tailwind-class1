"use client";

import { motion, useAnimation } from "framer-motion";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";

const TestimonialsPage = () => {
  const controls1 = useAnimation();
  const controls2 = useAnimation();
  const controls3 = useAnimation();

  const [ref1, inView1] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref2, inView2] = useInView({ triggerOnce: false, threshold: 0.1 });
  const [ref3, inView3] = useInView({ triggerOnce: false, threshold: 0.1 });

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

  const variants = {
    hidden: { opacity: 0, x: -100 },
    visible: { opacity: 1, x: 0 },
  };

  return (
    <>
      <section
        id="testimonials"
        className="p-6 my-12 scroll-mt-24 widescreen:section-min-height tallscreen:section-min-height max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Testimonials
        </h2>

        <motion.figure
          className="my-12"
          ref={ref1}
          initial="hidden"
          animate={controls1}
          variants={variants}
          transition={{ duration: 1 }}
        >
          <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
            <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-0 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugit
              amet ducimus, animi, assumenda obcaecati illo accusantium nulla
              eaque officiis officia facere quis ullam ab iure praesentium
              suscipit explicabo nesciunt dolores!
            </p>
          </blockquote>
          <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-400 dark:text-slate-400">
            &#8212; SBN Clinton
          </figcaption>
        </motion.figure>

        <motion.figure
          className="my-12"
          ref={ref2}
          initial="hidden"
          animate={controls2}
          variants={variants}
          transition={{ duration: 1, delay: 0.2 }}
        >
          <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
            <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-0 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
              Lorem ipsum, dolor sit amet consectetur adipisicing elit. Aut
              corporis minima dicta, atque architecto repudiandae dolorem
              temporibus corrupti, unde quibusdam sapiente. Pariatur nobis
              tempora facere. Veritatis.
            </p>
          </blockquote>
          <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-400 dark:text-slate-400">
            &#8212; Wile E. Coyete, Genius
          </figcaption>
        </motion.figure>

        <motion.figure
          className="my-12"
          ref={ref3}
          initial="hidden"
          animate={controls3}
          variants={variants}
          transition={{ duration: 1, delay: 0.4 }}
        >
          <blockquote className="bg-teal-600 dark:bg-black pl-14 pr-8 py-12 rounded-3xl relative">
            <p className="text-2xl sm:text-3xl text-left mt-2 text-white dark:text-slate-400 before:content-['\201C'] before:font-serif before:absolute before:top-0 before:left-0 before:text-9xl before:text-white before:opacity-25 before:transform before:translate-x-2 before:translate-y-2 after:content-['\201D'] after:font-serif after:absolute after:-bottom-0 after:right-0 after:text-9xl after:text-white after:opacity-25 after:transform after:-translate-x-2 after:-translate-y-2">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Necessitatibus &#8212;{" "}
              <span className="italic">iste neque ad minima voluptate</span>{" "}
              eius provident, et, <q>aliquid, sint</q> animi possimus!.💯
            </p>
          </blockquote>
          <figcaption className="italic text-xl sm:text-2xl text-right mt-2 text-slate-400 dark:text-slate-400">
            &#8212; Chidera Peter
          </figcaption>
        </motion.figure>
      </section>

      <hr className="mx-auto h-1 rounded-full bg-black dark:bg-white w-1/2"></hr>
    </>
  );
};

export default TestimonialsPage;
