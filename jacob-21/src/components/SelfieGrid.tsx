import { motion } from "framer-motion";
import styles from "./styles/SelfieGrid.module.css";
import { storageUrl } from "../lib/supabase";

export default function SelfieGrid() {
  const PHOTOS = [
    "selfies/selfie1.jpg",
    "selfies/selfie2.jpg",
    "selfies/selfie3.jpg",
    "selfies/selfie4.jpg",
    "selfies/selfie5.jpg",
    "selfies/selfie6.jpg",
    "selfies/selfie7.jpg",
    "selfies/selfie8.jpg",
    "selfies/selfie9.jpg",
    "selfies/selfie10.jpg",
    "selfies/selfie11.jpg",
    "selfies/selfie12.jpg",
    "selfies/selfie13.jpg",
    "selfies/selfie14.jpg",
  ];
  return (
    <section className="section blue-bg">
      <div className="sec-label-wrap">
        <span className="sec-eyebrow">His World</span>
        <p className="sec-title">Jacob & His Paw Patrol Squad</p>
      </div>
      <div className={styles.grid}>
        {PHOTOS.map((photo, i) => (
          <motion.div
            key={i}
            className={styles.cell}
            initial={{ opacity: 0, scale: 0.9 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-20px" }}
            transition={{ duration: 0.3, delay: i * 0.05 }}
            whileHover={{ scale: 1.04, transition: { duration: 0.2 } }}
          >
            <img
              key={i}
              src={storageUrl(photo)}
              alt={`Jacob photo ${i + 1}`}
              className={styles.photo}
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>
    </section>
  );
}
