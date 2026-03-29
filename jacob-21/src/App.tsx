import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import Splash from "./components/Splash";
import Countdown from "./components/Countdown";
import Hero from "./components/Hero";
import PhotoCarousel from "./components/PhotoCarousel";
import FavoriteThings from "./components/FavoriteThings";
import RSVPForm from "./components/RSVPForm";
import SupportItsMe from "./components/SupportItsMe";
import FunFacts from "./components/Funfacts";
import JacobTaughtUs from "./components/TaughtUs";
import SelfieGrid from "./components/SelfieGrid";
import SectionLabel from "./components/common/SectionLabel";
import FloatingRSVP from "./components/common/FloatingRSVP";

export default function App() {
  const [revealed, setRevealed] = useState(false);

  return (
    <div className="app-wrap">
      <AnimatePresence mode="wait">
        {!revealed ? (
          <motion.div
            key="splash"
            initial={{ opacity: 1 }}
            exit={{ opacity: 0, scale: 0.95 }}
            transition={{ duration: 0.5 }}
          >
            <Splash onReveal={() => setRevealed(true)} />
          </motion.div>
        ) : (
          <motion.main
            key="invitation"
            className="invitation"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6 }}
          >
            <motion.div
              className="main-content-container"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6 }}
            >
              <Hero />
              <Countdown />
            </motion.div>

            <div className="divider" />
            <PhotoCarousel />
            <div className="divider-thin" />
            <FunFacts />
            <div className="divider-thin" />
            <FavoriteThings />
            <div className="divider-thin" />
            <JacobTaughtUs />
            <div className="divider" />
            <SupportItsMe />
            <div className="divider" id="rsvp-section" />
            <section className="rsvp-wrap">
              <SectionLabel eyebrow="RSVP" title="Will You Be There?" />
              <div className="rsvp-inner">
                <RSVPForm />
              </div>
            </section>
            <div className="divider" />
            <SelfieGrid />
            <FloatingRSVP />
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
