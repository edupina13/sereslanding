import { useEffect, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";

import Navbar from "./components/Navbar";
import SplashScreen from "./components/SplashScreen";

import Hero from "./sections/Hero";
import Services from "./sections/Services";
import About from "./sections/About";
import Education from "./sections/Education";
import Testimonials from "./sections/Testimonials";
import Social from "./sections/Social";
// import Videos from "./sections/Videos"; /* ← Fase 4 */
import EXPECT from "./sections/Expect";
import FAQ from "./sections/FAQ";
import CTA from "./sections/CTA";
import Footer from "./sections/Footer";
import WhatsAppButton from "./components/WhatsAppButton";

export default function App() {
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setLoading(false);
    }, 450);

    return () => clearTimeout(timer);
  }, []);

  return (
    <>
      <AnimatePresence>
        {loading && (
          <motion.div
            initial={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.4 }}
            className="fixed inset-0 z-[9999]"
          >
            <SplashScreen />
          </motion.div>
        )}
      </AnimatePresence>

      <Navbar />

      <Hero />
      <Services />
      <About />
      <Education />
      <Testimonials />
      <Social />
      {/* <Videos /> ← Fase 4 */}
      <FAQ />
      <EXPECT />
      <CTA />
      <Footer />
      <WhatsAppButton />
    </>
  );
}