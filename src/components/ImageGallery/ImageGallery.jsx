import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ onOpen, items, changeImg }) {
  return (
    <ul className={css.list}>
      {items.map(({ id, alt_description, urls }) => {
        return (
          <li key={id}>
            <ImageCard href={urls} alt={alt_description} onOpen={onOpen} />
          </li>
        );
      })}
    </ul>
  );
}
