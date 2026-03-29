import { motion } from "framer-motion";
import styles from "./styles/Funfacts.module.css";
import SectionLabel from "./common/SectionLabel";

const FACTS = [
  {
    icon: "📸",
    fact: "Looks at people's pictures when he misses them",
    desc: "His own sweet way of staying close to the people he loves.",
  },
  {
    icon: "🧸",
    fact: "Never leaves home without his Paw Patrol plushies",
    desc: "At least two. Always. And they have to be Gund brand — no substitutes!",
  },
  {
    icon: "🏆",
    fact: "44 Gund Paw Patrol plushies and counting",
    desc: "A collection built with love, one very specific plushie at a time.",
  },
  {
    icon: "🎢",
    fact: "Theme park superfan",
    desc: "Disneyland, Universal, Japan — if there's a ride and a character, Jacob is there.",
  },
  {
    icon: "🐾",
    fact: "Proud dog brother to 3 pups",
    desc: "Gus, Umi, and the newest addition — he loves them all fiercely.",
  },
  {
    icon: "🎂",
    fact: "Remembers everyone's birthdays",
    desc: "No calendar needed. Jacob just knows — and he makes sure you feel remembered.",
  },
  {
    icon: "✨",
    fact: "Gets genuinely excited when he sees people he loves",
    desc: "That kind of pure, unfiltered joy? It's contagious every single time.",
  },
  {
    icon: "👶",
    fact: "Forever young at heart",
    desc: "Disney, Nick Jr., YouTube, Paw Patrol — age is just a number when you're this joyful.",
  },
];

export default function FunFacts() {
  return (
    <section className="section">
      <SectionLabel eyebrow="About Him" title="Fun Facts About Jacob" />
      <div className={styles.grid}>
        {FACTS.map((item, i) => (
          <motion.div
            key={i}
            className={styles.card}
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-30px" }}
            transition={{ duration: 0.35, delay: i * 0.07 }}
            whileHover={{ y: -4, transition: { duration: 0.2 } }}
          >
            <span className={styles.icon}>{item.icon}</span>
            <p className={styles.fact}>{item.fact}</p>
            <p className={styles.desc}>{item.desc}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
