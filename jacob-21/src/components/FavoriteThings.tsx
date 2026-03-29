import { motion } from "framer-motion";
import styles from "./styles/FavoriteThings.module.css";
import SectionLabel from "./common/SectionLabel";

interface FavoriteThing {
  icon: string;
  name: string;
  description: string;
}

const FAVORITES: FavoriteThing[] = [
  {
    icon: "🧸",
    name: "Paw Patrol Plushies",
    description: "His absolute favorites — any character!",
  },
  {
    icon: "🎮",
    name: "Anything Disney or Nickelodeon",
    description:
      "From toys to clothes, if it's Disney or Nick, Jacob is all in.",
  },
  {
    icon: "🍕",
    name: "Food",
    description:
      "Pizza, pasta, burgers — you name it, Jacob loves it. He's not picky when it comes to food, as long as it's delicious!",
  },
  {
    icon: "🎵",
    name: "Your Company",
    description:
      "Honestly, Jacob's favorite thing is just being around the people he loves. So if you're coming to celebrate, know that your presence is the best gift of all!",
  },
];

export default function FavoriteThings() {
  return (
    <section className="section">
      <SectionLabel eyebrow="Gift Ideas" title="Jacob's Favorite Things" />

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
