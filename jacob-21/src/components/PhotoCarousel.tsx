import Carousel from "./common/Carousel";
import SectionLabel from "./common/SectionLabel";

export default function PhotoCarousel() {
  const PHOTOS = [
    "adventure/adventure1.jpg",
    "adventure/adventure2.jpg",
    "adventure/adventure3.jpg",
    "adventure/adventure4.jpg",
    "adventure/adventure5.jpg",
    "adventure/adventure6.jpg",
    "adventure/adventure7.jpg",
    "adventure/adventure8.jpg",
    "adventure/adventure9.jpg",
    "adventure/adventure10.jpg",
    "adventure/adventure11.jpg",
    "adventure/adventure12.jpg",
    "adventure/adventure13.jpg",
    "adventure/adventure14.jpg",
    "adventure/adventure15.jpg",
    "adventure/adventure16.jpg",
    "adventure/adventure17.jpg",
    "adventure/adventure18.jpg",
    "adventure/adventure19.jpg",
    "adventure/adventure20.jpg",
    "adventure/adventure21.jpeg",
  ];
  return (
    <section className="section">
      <SectionLabel eyebrow="Memories" title="Jacob's Adventures" />
      <Carousel photos={PHOTOS} />
    </section>
  );
}
