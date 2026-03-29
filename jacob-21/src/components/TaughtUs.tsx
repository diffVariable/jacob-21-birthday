import { motion } from "framer-motion";
import styles from "./styles/JacobTaughtUs.module.css";

const LESSONS = [
  {
    number: "01",
    title: "To Be Patient",
    desc: "Good things, and good people, are worth waiting for.",
  },
  {
    number: "02",
    title: "Everyone Shines In Their Own Way",
    desc: "Jacob reminded us that different isn't less. It's just beautifully, uniquely more.",
  },
  {
    number: "03",
    title: "Just Being Yourself Is Enough",
    desc: "He never pretended to be anyone else. And in doing so, he taught us the freedom of just being you.",
  },
  {
    number: "04",
    title: "That Joy Doesn't Need A Reason",
    desc: "Jacob can light up a room just because he saw someone he loves. No occasion needed.",
  },
  {
    number: "05",
    title: "How To Love Without Holding Back",
    desc: "Whether it's his dogs, his plushies, or the people he adores — Jacob loves fully and without hesitation.",
  },
  {
    number: "06",
    title: "That The Little Things Are The Big Things",
    desc: "Remembering your birthday. A tight hug. Bringing his favorite Gund everywhere. Jacob taught us that showing up is everything.",
  },
];

export default function JacobTaughtUs() {
  return (
    <section className={`section blue-bg ${styles.section}`}>
      <div className="sec-label-wrap">
        <span className="sec-eyebrow">Life Lessons</span>
        <p className="sec-title">Things Jacob Taught Us</p>
      </div>
      <div className={styles.list}>
        {LESSONS.map((lesson, i) => (
          <motion.div
            key={i}
            className={styles.item}
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.4, delay: i * 0.1 }}
          >
            <span className={styles.number}>{lesson.number}</span>
            <div className={styles.content}>
              <p className={styles.title}>{lesson.title}</p>
              <p className={styles.desc}>{lesson.desc}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
