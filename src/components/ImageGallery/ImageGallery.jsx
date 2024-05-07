import ImageCard from "../ImageCard/ImageCard";
import css from "./ImageGallery.module.css";

export default function ImageGallery({ onOpen, items, changeImg }) {
  return (
    <ul className={css.list}>
      {items.map(({ id, alt_description, urls: { small, regular } }) => {
        return (
          <li
            key={id}
            onClick={() => {
              changeImg({ href: regular, alt: alt_description });
            }}
          >
            <ImageCard href={small} alt={alt_description} onClick={onOpen} />
          </li>
        );
      })}
    </ul>
  );
}
