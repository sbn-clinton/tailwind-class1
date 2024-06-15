import Navbar from "../components/Navbar";
import ContactPage from "../components/ContactPage";
import RocketPage from "../components/RocketPage";
import TestimonialsPage from "../components/TestimonialPage";
import HomePage from "@/components/HomePage";

export default function Home() {
  return (
    <>
      <HomePage />
      <RocketPage />
      <TestimonialsPage />
      <ContactPage />
    </>
  );
}
