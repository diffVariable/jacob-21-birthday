import { motion } from "framer-motion";
import styles from "./styles/Milestones.module.css";

interface Milestone {
  year: string;
  icon: string;
  title: string;
  description: string;
}

// TODO: Replace these with Jacob's real milestones!
const MILESTONES: Milestone[] = [
  {
    year: "Year 1",
    icon: "⭐",
    title: "Milestone Title Here",
    description: "A short description of this special moment in Jacob's life.",
  },
  {
    year: "Year 5",
    icon: "🐾",
    title: "Milestone Title Here",
    description: "A short description of this special moment in Jacob's life.",
  },
  {
    year: "Year 10",
    icon: "🧸",
    title: "Milestone Title Here",
    description: "A short description of this special moment in Jacob's life.",
  },
  {
    year: "Year 18",
    icon: "💛",
    title: "Milestone Title Here",
    description: "A short description of this special moment in Jacob's life.",
  },
  {
    year: "Year 21",
    icon: "🎂",
    title: "Today — Happy 21st!",
    description: "21 wonderful years of being wonderfully, perfectly you.",
  },
];

export default function Milestones() {
  return (
    <section className={`section blue-bg ${styles.section}`}>
      <div className="sec-label">🌟 Jacob's Milestones</div>
      <div className={styles.timeline}>
        {MILESTONES.map((ms, i) => (
          <motion.div
            key={i}
            className={styles.milestone}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-40px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <div className={styles.left}>
              <span className={styles.year}>{ms.year}</span>
              {i < MILESTONES.length - 1 && <div className={styles.line} />}
            </div>
            <div className={styles.card}>
              <div className={styles.icon}>{ms.icon}</div>
              <p className={styles.title}>{ms.title}</p>
              <p className={styles.desc}>{ms.description}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
