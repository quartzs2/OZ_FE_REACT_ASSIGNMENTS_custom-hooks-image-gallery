import getImgUrl from "../utils/getImgUrl";

function GalleryContent({ data, isLoading, error, animalName }) {
  const imgUrl = getImgUrl({ data, animalName });
  const errorMessage = error?.message ?? "이미지를 불러오지 못했습니다. 🥲";

  if (isLoading) {
    return <div className="loading" />;
  }

  if (error || imgUrl === "") {
    return (
      <div className="error-message">
        <p>{errorMessage}</p>
        <p>잠시 후에 다시 시도해 주세요.</p>
      </div>
    );
  }

  return <img src={imgUrl} alt={animalName} />;
}

export default GalleryContent;
