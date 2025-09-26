import { useEffect } from 'react';
import useFetch from '../hooks/useFetch';
import GalleryContent from './GalleryContent';

function Gallery({ title, animalName, url }) {
  const { data, loading, error, fetchData } = useFetch(url);

  useEffect(() => {
    fetchData();
  }, [url, fetchData]);

  return (
    <article className="gallery">
      <h2>{title}</h2>
      <button onClick={fetchData} disabled={loading}>
        new {animalName}
      </button>
      <GalleryContent
        data={data}
        loading={loading}
        error={error}
        animalName={animalName}
      />
    </article>
  );
}

export default Gallery;
