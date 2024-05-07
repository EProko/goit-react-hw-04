import css from "./ImageCard.module.css";

export default function ImageCard({ href: { small, regular }, alt, onOpen }) {
  return (
    <div className={css.card}>
      <img src={small} alt={alt} onClick={() => onOpen(regular)}></img>
    </div>
  );
}
