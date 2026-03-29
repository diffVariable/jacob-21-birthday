import { motion } from "framer-motion";
import styles from "./styles/Quotes.module.css";

interface Quote {
  text: string;
  from: string;
}

// TODO: Replace with real quotes from Jacob's loved ones!
const QUOTES: Quote[] = [
  {
    text: '"You make every room brighter just by walking into it."',
    from: "A Loved One",
  },
  {
    text: '"Watching you grow has been the greatest gift of our lives."',
    from: "A Loved One",
  },
];

export default function Quotes() {
  return (
    <section className={`section blue-bg ${styles.section}`}>
      <div className="sec-label">💙 Words From The Ones Who Love You</div>
      <div className={styles.list}>
        {QUOTES.map((q, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.12 }}
          >
            <p className={styles.text}>{q.text}</p>
            <p className={styles.from}>— {q.from}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
