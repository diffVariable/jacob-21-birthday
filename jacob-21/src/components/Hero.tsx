import styles from "./styles/Hero.module.css";

export default function Hero() {
  return (
    <section className={styles.hero}>
      <div className={styles.inner}>
        <div className={styles.paws}>🐾 🎂 🐾</div>
        <h1 className={styles.title}>
          Happy 21st,
          <br />
          <span className={styles.name}>Jacob!</span>
        </h1>
        <p className={styles.sub}>
          You are so loved. Come celebrate with us —<br />
          Gus and Umi are already so excited. 💛
        </p>
      </div>
    </section>
  );
}
