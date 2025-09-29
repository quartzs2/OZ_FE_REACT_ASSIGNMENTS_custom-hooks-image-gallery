import useFetch from "../hooks/useFetch";
import GalleryContent from "./GalleryContent";

function Gallery({ title, animalName, query }) {
  const { data, isLoading, error, refetch } = useFetch({ query });

  return (
    <article className="gallery">
      <h2>{title}</h2>
      <button onClick={refetch} disabled={isLoading}>
        new {animalName}
      </button>
      <GalleryContent data={data} isLoading={isLoading} error={error} animalName={animalName} />
    </article>
  );
}

export default Gallery;
