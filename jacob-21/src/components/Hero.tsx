import styles from "./styles/Hero.module.css";
import jacobPic1 from "../assets/jacob_hero1.jpg";
import jacobPic2 from "../assets/jacob_hero2.jpg";
import jacobPic3 from "../assets/jacob_hero3.jpg";
import { motion } from "framer-motion";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <h1 className={styles.title}>
          Happy 21st,
          <br />
          <span className={styles.name}>Jacob!</span>
        </h1>
        <div className={styles.pics}>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5 }}
          >
            <img src={jacobPic1} alt="Jacob 1" className={styles.jacobPic} />
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.6 }}
          >
            <img src={jacobPic2} alt="Jacob 2" className={styles.jacobPic} />
          </motion.span>
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.7 }}
          >
            <img src={jacobPic3} alt="Jacob 3" className={styles.jacobPic} />
          </motion.span>
        </div>

        <p className={styles.sub}>You are so loved. Come celebrate with us!</p>
      </div>
    </section>
  );
}
