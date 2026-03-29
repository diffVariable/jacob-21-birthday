import { useState } from "react";
import styles from "./styles/Carousel.module.css";

const PHOTO_COUNT = 5;

interface ICarouselProps {
  photos?: string[]; //photo url
}
const Carousel = ({ photos }: ICarouselProps) => {
  const [current, setCurrent] = useState(0);

  const goTo = (index: number) => {
    setCurrent((index + PHOTO_COUNT) % PHOTO_COUNT);
  };

  return (
    <>
      {" "}
      <div className={styles.carouselWrap}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {Array.from({ length: PHOTO_COUNT }).map((_, i) => (
            <div key={i} className={styles.slide}>
              {/* TODO: Replace this placeholder with real photo
              <img src={photos?.[i] || ""} alt={`Memory ${i + 1}`} className={styles.photo} />
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
    </>
  );
};

export default Carousel;
