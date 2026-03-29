import styles from "./styles/SupportItsMe.module.css";

export default function SupportBrand() {
  return (
    <section className={styles.wrap}>
      <div className={styles.inner}>
        <div className={`sec-label ${styles.pill}`}>
          ❤️ Support Jacob's Dream
        </div>
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
    </section>
  );
}
