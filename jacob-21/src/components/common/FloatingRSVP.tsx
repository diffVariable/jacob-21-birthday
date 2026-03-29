import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles/FloatingRSVP.module.css";

const MESSAGES = [
  "I want to RSVP already!",
  "okay okay I'll come",
  "save me a seat!!",
  "Jacob deserves my yes 💛",
  "just let me RSVP omg",
];

export default function FloatingRSVP() {
  const [visible, setVisible] = useState(false);
  const [msgIndex, setMsgIndex] = useState(0);
  const [rsvpInView, setRsvpInView] = useState(false);

  // Show button after user scrolls a bit
  useEffect(() => {
    const handleScroll = () => {
      setVisible(window.scrollY > 300);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Hide when RSVP section is visible on screen
  useEffect(() => {
    const rsvpSection = document.getElementById("rsvp-section");
    if (!rsvpSection) return;

    const observer = new IntersectionObserver(
      ([entry]) => setRsvpInView(entry.isIntersecting),
      { threshold: 0.1 },
    );

    observer.observe(rsvpSection);
    return () => observer.disconnect();
  }, []);

  // Cycle through witty messages every 3 seconds
  useEffect(() => {
    if (!visible || rsvpInView) return;
    const interval = setInterval(() => {
      setMsgIndex((prev) => (prev + 1) % MESSAGES.length);
    }, 5000);
    return () => clearInterval(interval);
  }, [visible, rsvpInView]);

  const scrollToRSVP = () => {
    document.getElementById("rsvp-section")?.scrollIntoView({
      behavior: "smooth",
      block: "start",
    });
  };

  const shouldShow = visible && !rsvpInView;

  return (
    <AnimatePresence>
      {shouldShow && (
        <motion.button
          className={styles.btn}
          onClick={scrollToRSVP}
          initial={{ y: 100, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: 100, opacity: 0 }}
          transition={{ type: "spring", stiffness: 260, damping: 20 }}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <AnimatePresence mode="wait">
            <motion.span
              key={msgIndex}
              initial={{ opacity: 0, y: 6 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -6 }}
              transition={{ duration: 0.3 }}
              className={styles.label}
            >
              {MESSAGES[msgIndex]}
            </motion.span>
          </AnimatePresence>
        </motion.button>
      )}
    </AnimatePresence>
  );
}
