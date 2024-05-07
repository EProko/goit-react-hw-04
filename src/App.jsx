import { useEffect, useState } from "react";
import { Toaster } from "react-hot-toast";

import "./App.css";
import fetchImages from "./HTTP-request";
import SearchBar from "./components/SearchBar/SearchBar";
import ImageGallery from "./components/ImageGallery/ImageGallery";
import Loader from "./components/Loader/Loader";
import LoadMoreBtn from "./components/LoadMoreBtn/LoadMoreBtn";
import ErrorMessage from "./components/ErrorMessage/ErrorMessage";
import ImageModal from "./components/ImageModal/ImageModal";

export default function App() {
  const [images, setImages] = useState([]);
  const [query, setQuery] = useState("");
  const [page, setPage] = useState(1);
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState(false);
  const [modalIsOpen, setIsOpen] = useState(false);
  const [modalImg, setModalImg] = useState("");

  const handleSearch = (newQuery) => {
    setQuery(newQuery);
    setPage(1);
    setImages([]);
  };

  const loadMorePage = () => {
    setPage(page + 1);
  };

  function openModal(regular) {
    setModalImg(regular);
    setIsOpen(true);
  }

  const closeModal = (event) => {
    if (event.key === "ESC" || event.target === event.currentTarget) {
      setIsOpen(false);
    }
  };

  useEffect(() => {
    if (query === "") {
      return;
    }

    async function getImages() {
      try {
        setIsLoading(true);
        const data = await fetchImages(query, page);

        setImages((prevImages) => {
          return [...prevImages, ...data];
        });
      } catch (error) {
        setError(true);
      } finally {
        setIsLoading(false);
      }
    }

    getImages();
  }, [query, page]);

  return (
    <>
      <ImageModal
        onClose={closeModal}
        onOpen={openModal}
        state={modalIsOpen}
        img={modalImg}
      />

      <SearchBar onSubmit={handleSearch} />

      {images.length > 0 && (
        <ImageGallery
          onOpen={openModal}
          items={images}
          changeImg={setModalImg}
        />
      )}

      <Toaster position="top-center" />

      {error && <ErrorMessage />}

      {images.length > 0 && !isLoading && (
        <LoadMoreBtn onClick={loadMorePage} />
      )}

      {isLoading && <Loader />}
    </>
  );
}
