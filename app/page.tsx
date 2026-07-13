import Navbar from "@/components/layout/Navbar/Navbar";
import Footer from "@/components/layout/Footer/Footer";
import Hero from "@/components/sections/Hero/Hero";
import About from "@/components/sections/About/About";
import Mission from "@/components/sections/Mission/Mission";
import Products from "@/components/sections/Products/Products";
import Vision from "@/components/sections/Vision/Vision";
import Future from "@/components/sections/Future/Future";

export default function HomePage() {
  return (
    <main className="relative bg-bg-base">
      <Navbar />
      <Hero />
      <About />
      <Mission />
      <Products />
      <Vision />
      <Future />
      <Footer />
    </main>
  );
}
