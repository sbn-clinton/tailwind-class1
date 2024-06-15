import Image from "next/image";

const HomePage = () => {
  return (
    <div className="bg-teal-700 w-full ">
      <section
        id="home"
        className="flex sm:pt-40 flex-col-reverse justify-center sm:flex-row p-6 items-center gap-8 mb-12 scroll-mt-40 widescreen:section-min-height tallscreen:section-min-height max-w-6xl mx-auto"
      >
        <article className="sm:w-1/2">
          <h2 className="max-w-md text-4xl font-bold text-center sm:text-5xl sm:text-left text-slate-900 dark:text-white">
            We Go{" "}
            <span className="text-indigo-700 dark:text-indigo-300">
              {" "}
              Where No Rocket
            </span>{" "}
            Has Gone Before...
          </h2>
          <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
            We are building rockets for the next century today. From the moon to
            Mars, Jupiter and beyoud
          </p>
          <p className="max-w-md text-2xl mt-4 text-center sm:text-left text-slate-700 dark:text-slate-400">
            Think Acme Rockets
          </p>
        </article>
        <div className="sm:w-1/2 h-full pt-28 sm:pt-0  animate-slow-bounce ">
          <Image src="/assets/img/hero-img.png" width={500} height={500} />
        </div>
      </section>
    </div>
  );
};

export default HomePage;
