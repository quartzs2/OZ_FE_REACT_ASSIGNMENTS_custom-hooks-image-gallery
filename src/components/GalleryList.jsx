import { GALLERY_INFO } from '../constants/galleryInfo';
import Gallery from './Gallery';

function GalleryList() {
  return (
    <section className="gallery-container">
      {GALLERY_INFO.map(({ animalName, title, api: url }) => (
        <Gallery
          key={animalName}
          title={title}
          animalName={animalName}
          url={url}
        />
      ))}
    </section>
  );
}

export default GalleryList;
