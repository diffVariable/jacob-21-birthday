import { useState } from "react";
import styles from "./styles/PhotoCarousel.module.css";

// TODO: Replace these with real photo imports or URLs
// import photo1 from '../assets/photos/jacob1.jpg'
// const PHOTOS = [photo1, photo2, ...]

const PHOTO_COUNT = 5; // Change this to match how many real photos you have

export default function PhotoCarousel() {
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    setCurrent((index + PHOTO_COUNT) % PHOTO_COUNT);
  };

  return (
    <section className="section">
      <div className="sec-label">📸 Photo Memories</div>

      <div className={styles.carouselWrap}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {Array.from({ length: PHOTO_COUNT }).map((_, i) => (
            <div key={i} className={styles.slide}>
              {/* TODO: Replace this placeholder with real photo
              <img src={PHOTOS[i]} alt={`Memory ${i + 1}`} className={styles.photo} />
              */}
              <span className={styles.placeholderIcon}>📷</span>
              <p className={styles.placeholderLabel}>Photo {i + 1}</p>
              <p className={styles.placeholderSub}>
                Replace with a real photo of Jacob
              </p>
            </div>
          ))}
        </div>

        <button
          className={`${styles.btn} ${styles.prev}`}
          onClick={() => goTo(current - 1)}
        >
          ←
        </button>
        <button
          className={`${styles.btn} ${styles.next}`}
          onClick={() => goTo(current + 1)}
        >
          →
        </button>
      </div>

      <div className={styles.dots}>
        {Array.from({ length: PHOTO_COUNT }).map((_, i) => (
          <button
            key={i}
            className={`${styles.dot} ${i === current ? styles.active : ""}`}
            onClick={() => goTo(i)}
            aria-label={`Go to photo ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
