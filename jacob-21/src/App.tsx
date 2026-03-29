import { useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import "./App.css";
import Splash from "./components/Splash";
import Countdown from "./components/Countdown";
import Hero from "./components/Hero";
import PhotoCarousel from "./components/PhotoCarousel";
import FavoriteThings from "./components/FavoriteThings";
import Milestones from "./components/Milestones";
import Quotes from "./components/Quotes";
import RSVPForm from "./components/RSVPForm";
import SupportItsMe from "./components/SupportItsMe";

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
            <Milestones />
            <div className="divider-thin" />
            <FavoriteThings />
            <div className="divider" />
            <Quotes />
            <div className="divider" />
            <SupportItsMe />
            <div className="divider" />
            <section className="rsvp-wrap">
              <div className="sec-label">🎉 Will You Be There?</div>
              <div className="rsvp-inner">
                <RSVPForm />
              </div>
            </section>
            <footer className="footer">
              Made With 💛 By Diana, For Jacob's 21st 🐾
            </footer>
          </motion.main>
        )}
      </AnimatePresence>
    </div>
  );
}
