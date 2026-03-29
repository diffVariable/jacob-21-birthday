import { storageUrl } from "../lib/supabase";
import styles from "./styles/SupportItsMe.module.css";

export default function SupportBrand() {
  const PHOTOS = [
    "itsme/itsme1.png",
    "itsme/itsme2.png",
    "itsme/itsme3.png",
    "itsme/itsme4.png",
    "itsme/itsme5.png",
    "itsme/itsme6.png",
    "itsme/itsme8.png",
    "itsme/itsme9.png",
    "itsme/itsme10.png",
  ];
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={styles.textBox}>
          <div className="sec-label">Support Jacob's Dream</div>
          <h2 className={styles.title}>It's Me Apparel PH</h2>
          <p className={styles.desc}>
            Jacob runs his own apparel brand celebrating autism awareness and
            hidden illnesses. Show him some love and visit his shop!
          </p>
          <a
            className={styles.btn}
            href="https://itsme-apparelph.com"
            target="_blank"
            rel="noopener noreferrer"
          >
            Visit It's Me Apparel PH 🐾
          </a>
        </div>
        <div className={styles.photoGrid}>
          {PHOTOS.map((src, i) => (
            <img
              key={i}
              src={storageUrl(src)}
              alt={`It's Me Apparel PH product ${i + 1}`}
              className={styles.image}
              loading="lazy"
            />
          ))}
        </div>
      </div>
    </section>
  );
}
