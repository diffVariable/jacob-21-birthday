import styles from "./styles/Hero.module.css";
import jacobPic1 from "../assets/jacob_hero1.jpg";
import jacobPic2 from "../assets/jacob_hero2.jpg";
import jacobPic3 from "../assets/jacob_hero3.jpg";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.pics}>
          <img src={jacobPic1} alt="Jacob 1" className={styles.jacobPic} />
          <img src={jacobPic2} alt="Jacob 2" className={styles.jacobPic} />
          <img src={jacobPic3} alt="Jacob 3" className={styles.jacobPic} />
        </div>
        <h1 className={styles.title}>
          Happy 21st,
          <br />
          <span className={styles.name}>Jacob!</span>
        </h1>
        <p className={styles.sub}>You are so loved. Come celebrate with us!</p>
      </div>
    </section>
  );
}
