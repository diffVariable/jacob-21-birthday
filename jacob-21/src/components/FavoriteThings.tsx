import { motion } from "framer-motion";
import styles from "./styles/FavoriteThings.module.css";

interface FavoriteThing {
  icon: string;
  name: string;
  description: string;
}

// TODO: Replace with Jacob's real favorites!
const FAVORITES: FavoriteThing[] = [
  {
    icon: "🧸",
    name: "Paw Patrol Plushies",
    description: "His absolute favorites — any character!",
  },
  {
    icon: "🎮",
    name: "Favorite Thing 2",
    description: "Replace with something Jacob loves",
  },
  {
    icon: "🍕",
    name: "Favorite Thing 3",
    description: "Replace with something Jacob loves",
  },
  {
    icon: "🎵",
    name: "Favorite Thing 4",
    description: "Replace with something Jacob loves",
  },
];

export default function FavoriteThings() {
  return (
    <section className="section">
      <div className="sec-label">🎁 Jacob's Favorite Things</div>

      <div className={styles.hint}>
        <span className={styles.hintIcon}>💡</span>
        <p className={styles.hintText}>
          Psst! If you're thinking of bringing a gift, here are some things
          Jacob absolutely loves — no pressure though, your presence is more
          than enough! 🐾
        </p>
      </div>

      <div className={styles.grid}>
        {FAVORITES.map((item, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.35, delay: i * 0.08 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <span className={styles.icon}>{item.icon}</span>
            <p className={styles.name}>{item.name}</p>
            <p className={styles.desc}>{item.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
