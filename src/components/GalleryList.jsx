import Gallery from "./Gallery";
import { getDogImage, getCatImage, getFoxImage } from "../api";

const GALLERY_INFO = [
  {
    title: "🐶 Dog Zone",
    animalName: "dog",
    query: getDogImage,
  },
  {
    title: "😺 Cat Zone",
    animalName: "cat",
    query: getCatImage,
  },
  {
    title: "🦊 Fox Zone",
    animalName: "fox",
    query: getFoxImage,
  },
];

function GalleryList() {
  return (
    <section className="gallery-container">
      {GALLERY_INFO.map(({ animalName, title, query }) => (
        <Gallery key={animalName} title={title} animalName={animalName} query={query} />
      ))}
    </section>
  );
}

export default GalleryList;
