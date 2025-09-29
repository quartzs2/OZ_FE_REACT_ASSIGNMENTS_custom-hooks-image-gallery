import { ANIMAL_IMG_MAP } from "../constants/animalImgMap";

function getImgUrl({ data, animalName }) {
  if (!data) return "";

  const imgUrl = ANIMAL_IMG_MAP.get(animalName)(data);
  return imgUrl ?? "";
}

export default getImgUrl;
