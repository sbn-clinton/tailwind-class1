import Link from "next/link";

const Footer = () => {
  return (
    <footer id="footer" className="bg-teal-700 text-white text-xl">
      <section className="max-w-4xl mx-auto p-4 flex flex-col sm:flex-row sm:justify-between">
        <address>
          <h2>Acme Rocket-Powered Products, Inc.</h2>
          555 Astro Way <br /> Fairfeild, New Jersey 1234-5555.
          <br />
          Email: <a href="/">Inquires@AcmeRockets.com</a> <br />
          Phone: <a href="tel:+234 814 232 8128">(234) 814 232 8123</a>
        </address>

        <nav className="hidden md:flex flex-col gap-2 " aria-label="footer">
          <Link className=" hover:opacity-90" href="Rockets">
            Rocket
          </Link>
          <Link className=" hover:opacity-90" href="Testimonials">
            Testimonials
          </Link>
          <Link className=" hover:opacity-90" href="Contacts">
            Contact
          </Link>
        </nav>
        <div className="flex flex-col sm:gap-2">
          <p className="text-right">
            Copyright &copy; <span id="year">2024</span>
          </p>
          <p className="text-right">All Rights Reserved</p>
        </div>
      </section>
    </footer>
  );
};

export default Footer;
