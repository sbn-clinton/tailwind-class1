const ContactPage = () => {
  return (
    <>
      <section
        id="contact"
        className="p-6 my-12 scroll-mt-24 widescreen:section-min-height tallscreen:section-min-height max-w-6xl mx-auto"
      >
        <h2 className="text-4xl font-bold text-center sm:text-5xl mb-6 text-slate-900 dark:text-white">
          Contact Us
        </h2>
        <form
          action=""
          className="max-w-4xl mx-auto text-2xl sm:text-3xl flex flex-col items-start gap-4"
        >
          <label htmlFor="subject" className="">
            Subject
          </label>
          <input
            type="text"
            id="subject"
            name="subject"
            required
            minlength="3"
            maxlength="60"
            className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
            placeholder="Your Subject"
          />
          <label htmlFor="message" className="">
            Message:
          </label>
          <textarea
            className="w-full text-black text-2xl sm:text-3xl p-3 rounded-xl border border-solid border-slate-900 dark:border-none"
            name="message"
            id="message"
            cols="30"
            rows="10"
            placeholder="Your Message"
            required
          ></textarea>
          <button className="bg-teal-700 hover:bg-teal-500 active:bg-teal-300 text-white p-3 w-48 rounded-xl border border-solid border-slate-900 dark:border-none self-center">
            Submit
          </button>
        </form>
      </section>
    </>
  );
};

export default ContactPage;
