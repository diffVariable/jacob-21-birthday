import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles/Splash.module.css";

// TODO: Replace these with real Lottie animations
// import { Player } from '@lottiefiles/react-lottie-player'
// import umiAnimation from '../assets/umi-golden.json'
// import gusAnimation from '../assets/gus-pug.json'

interface SplashProps {
  onReveal: () => void;
}

type Step = "idle" | "umiAwake" | "bothAwake";

export default function Splash({ onReveal }: SplashProps) {
  const [step, setStep] = useState<Step>("idle");

  const handleClick = () => {
    if (step === "idle") {
      setStep("umiAwake");
      setTimeout(() => setStep("bothAwake"), 1800);
    } else if (step === "bothAwake") {
      onReveal();
    }
  };

  const btnLabel =
    step === "idle"
      ? "Wake Them Up! 🐾"
      : step === "umiAwake"
        ? "Umi Is Nudging Gus... 🐾"
        : "See The Surprise! 🎉";

  return (
    <div className={styles.splash}>
      <motion.p
        className={styles.eyebrow}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.2 }}
      >
        🐾 A Very Special Invitation 🐾
      </motion.p>

      <motion.h1
        className={styles.heading}
        initial={{ opacity: 0, y: -10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.35 }}
      >
        Gus & Umi Have A Secret...
      </motion.h1>

      <motion.p
        className={styles.sub}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5 }}
      >
        They want you to come celebrate!
      </motion.p>

      <div className={styles.dogsRow}>
        {/* UMI — Golden Retriever */}
        <motion.div
          className={styles.dogSlot}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.6 }}
        >
          <motion.div
            className={`${styles.lottieBox} ${step !== "idle" ? styles.awake : styles.sleeping}`}
            animate={step !== "idle" ? { scale: [1, 1.1, 1] } : {}}
            transition={{ duration: 0.4 }}
          >
            <span className={styles.dogEmoji}>🐕</span>
            {step === "idle" && <span className={styles.zzz}>z z z</span>}
          </motion.div>
          <span className={styles.dogName}>Umi</span>
          <span className={styles.lottieTag}>← Lottie Golden</span>
        </motion.div>

        {/* GUS — Pug */}
        <motion.div
          className={styles.dogSlot}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.75 }}
        >
          <motion.div
            className={`${styles.lottieBox} ${step === "bothAwake" ? styles.awake : styles.sleeping}`}
            animate={step === "bothAwake" ? { scale: [1, 1.15, 1] } : {}}
            transition={{ duration: 0.4 }}
          >
            <span className={styles.dogEmoji}>🐶</span>
            {step !== "bothAwake" && <span className={styles.zzz}>z z z</span>}
          </motion.div>
          <span className={styles.dogName}>Gus</span>
          <span className={styles.lottieTag}>← Lottie Pug</span>
        </motion.div>
      </div>

      <motion.button
        className={styles.btn}
        onClick={handleClick}
        disabled={step === "umiAwake"}
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.9 }}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.97 }}
      >
        {btnLabel}
      </motion.button>

      <motion.p
        className={styles.hint}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.1 }}
      >
        Click to reveal Jacob's special day
      </motion.p>
    </div>
  );
}
