import css from "./ImageCard.module.css";

export default function ImageCard({ href, alt, onClick }) {
  return (
    <div className={css.card}>
      <img src={href} alt={alt} onClick={onClick}></img>
    </div>
  );
}
