import { useEffect, useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "./styles/Countdown.module.css";

const PARTY_DATE = new Date("2026-07-29T15:00:00");

interface TimeLeft {
  days: number;
  hours: number;
  minutes: number;
  seconds: number;
}

function getTimeLeft(): TimeLeft {
  const diff = PARTY_DATE.getTime() - Date.now();
  if (diff <= 0) return { days: 0, hours: 0, minutes: 0, seconds: 0 };
  return {
    days: Math.floor(diff / (1000 * 60 * 60 * 24)),
    hours: Math.floor((diff / (1000 * 60 * 60)) % 24),
    minutes: Math.floor((diff / (1000 * 60)) % 60),
    seconds: Math.floor((diff / 1000) % 60),
  };
}

interface CountUnitProps {
  value: number;
  label: string;
}

function CountUnit({ value, label }: CountUnitProps) {
  const display = String(value).padStart(2, "0");

  return (
    <div className={styles.unit}>
      <div className={styles.box}>
        <AnimatePresence mode="wait" initial={false}>
          <motion.span
            key={display}
            className={styles.number}
            initial={{ y: -16, opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: 16, opacity: 0 }}
            transition={{ duration: 0.2, ease: "easeOut" }}
          >
            {display}
          </motion.span>
        </AnimatePresence>
      </div>
      <span className={styles.label}>{label}</span>
    </div>
  );
}

export default function Countdown() {
  const [timeLeft, setTimeLeft] = useState<TimeLeft>(getTimeLeft);
  const isOver = PARTY_DATE.getTime() <= Date.now();

  const scrollDown = () => {
    window.scrollBy({ top: window.innerHeight, behavior: "smooth" });
  };

  useEffect(() => {
    if (isOver) return;
    const interval = setInterval(() => {
      setTimeLeft(getTimeLeft());
    }, 1000);
    return () => clearInterval(interval);
  }, [isOver]);

  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className="sec-label">⏰ The Party Starts In</div>

        {isOver ? (
          <motion.p
            className={styles.partyMessage}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", stiffness: 200 }}
          >
            🎉 It's Party Time! Happy 21st Jacob! 🐾
          </motion.p>
        ) : (
          <>
            <div className={styles.timer}>
              <CountUnit value={timeLeft.days} label="Days" />
              <span className={styles.sep}>:</span>
              <CountUnit value={timeLeft.hours} label="Hours" />
              <span className={styles.sep}>:</span>
              <CountUnit value={timeLeft.minutes} label="Minutes" />
              <span className={styles.sep}>:</span>
              <CountUnit value={timeLeft.seconds} label="Seconds" />
            </div>
            <p className={styles.date}>📅 July 29, 2026 · 3:00 PM</p>
            <motion.button
              className={styles.scrollBtn}
              onClick={scrollDown}
              animate={{ y: [0, 8, 0] }}
              transition={{
                repeat: Infinity,
                duration: 1.4,
                ease: "easeInOut",
              }}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
              aria-label="Scroll down"
            >
              ↓
            </motion.button>
          </>
        )}
      </div>
    </section>
  );
}
