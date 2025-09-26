import getImgUrl from '../utils/getImgUrl';

function GalleryContent({ data, loading, error, animalName }) {
  const imgUrl = getImgUrl(data, animalName);
  const errorMessage = error?.message ?? '이미지를 불러오지 못했습니다. 🥲';

  if (loading) {
    return <div className="loading"></div>;
  }

  if (error || imgUrl === '') {
    return (
      <p className="error-message">
        {errorMessage}
        <br />
        잠시 후에 다시 시도해 주세요.
      </p>
    );
  }

  return <img src={imgUrl} alt={animalName} />;
}

export default GalleryContent;
