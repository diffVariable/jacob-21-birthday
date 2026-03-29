import { useState } from "react";
import styles from "./styles/Carousel.module.css";
import { storageUrl } from "../../lib/supabase";

interface ICarouselProps {
  photos: string[]; //photo urls
}
const Carousel = ({ photos }: ICarouselProps) => {
  const [current, setCurrent] = useState(0);

  const PHOTO_COUNT = photos.length;
  const goTo = (index: number) => {
    setCurrent((index + PHOTO_COUNT) % PHOTO_COUNT);
  };

  return (
    <>
      <div className={styles.carouselWrap}>
        <div
          className={styles.track}
          style={{ transform: `translateX(-${current * 100}%)` }}
        >
          {photos?.map((photo, i) => (
            <div key={i} className={styles.slide}>
              <img
                src={storageUrl(photo)}
                alt={`Memory ${i + 1}`}
                className={styles.photo}
                loading="lazy"
              />
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
