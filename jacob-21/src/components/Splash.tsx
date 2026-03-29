import { useState } from "react";
import { motion } from "framer-motion";
import styles from "./styles/Splash.module.css";
import umiPic from "../assets/umi.png";
import gusPic from "../assets/gus.png";
import gusUmiAwakePic from "../assets/gusUmiAwake.jpg";

interface SplashProps {
  onReveal: () => void;
}

type Step = "idle" | "wakingUp" | "awake";

export default function Splash({ onReveal }: SplashProps) {
  const [step, setStep] = useState<Step>("idle");

  const handleClick = () => {
    if (step === "idle") {
      setStep("wakingUp");
      setTimeout(() => setStep("awake"), 1800);
    } else if (step === "awake") {
      onReveal();
    }
  };

  const btnLabel =
    step === "idle"
      ? "Wake Them Up! 🐾"
      : step === "wakingUp"
        ? "Waking them up... 🐾"
        : "See The Surprise! 🎉";

  const wakeAnimate =
    step === "wakingUp"
      ? { opacity: [1, 0.3, 1] }
      : step !== "idle"
        ? { scale: [1, 1.1, 1] }
        : { opacity: 1, y: 0 };

  const wakeTransition =
    step === "wakingUp"
      ? { repeat: Infinity, duration: 0.6, ease: "easeInOut" as const }
      : { duration: 0.4 };

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

      {step === "awake" && (
        <motion.p
          className={styles.sub}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5 }}
        >
          They want you to come celebrate their Hooman's special day!
        </motion.p>
      )}

      <div className={styles.dogsRow}>
        {step !== "awake" ? (
          <>
            <motion.div
              className={styles.dogSlot}
              initial={{ opacity: 0, y: 20 }}
              animate={wakeAnimate}
              transition={wakeTransition}
            >
              <span className={styles.zzz}>z z z</span>
              <img src={gusPic} alt="Gus" className={styles.dogPic} />

              <span className={styles.dogName}>Gus</span>
            </motion.div>
            <motion.div
              className={styles.dogSlot}
              initial={{ opacity: 0, y: 20 }}
              animate={wakeAnimate}
              transition={wakeTransition}
            >
              <span className={styles.zzz}>z z z</span>
              <img src={umiPic} alt="Umi" className={styles.dogPic} />

              <span className={styles.dogName}>Umi</span>
            </motion.div>
          </>
        ) : (
          <img
            src={gusUmiAwakePic}
            alt="Gus and Umi"
            className={styles.jacobPic}
          />
        )}
      </div>

      <motion.button
        className={styles.btn}
        onClick={handleClick}
        disabled={step === "wakingUp"}
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
