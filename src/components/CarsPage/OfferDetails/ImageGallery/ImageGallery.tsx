import React, { useEffect, useState, useRef } from "react";
import styles from "./ImageGallery.module.scss";
import Image from "next/image";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
import { AiOutlineClose } from "react-icons/ai";
import { BiLeftArrow, BiRightArrow } from "react-icons/bi";
import ScrollContainer from "react-indiana-drag-scroll";
interface Props {
  images: string[];
}
const ImageGallery = ({ images }: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
  const [showEnlargedImage, setShowEnglargedImage] = useState(false);
  const scrollRef = useRef(null);

  const nextImage = (): void => {
    if (currentImageIndex < images.length - 1) {
      setCurrentImageIndex((prevIndex) => prevIndex + 1);
    } else {
      setCurrentImageIndex(0);
    }
  };
  const prevImage = (): void => {
    if (currentImageIndex === 0) {
      setCurrentImageIndex(images.length - 1);
    } else {
      setCurrentImageIndex((prevIndex) => prevIndex - 1);
    }
  };
  const openImage = (e) => {
    if (
      e.target.classList.contains(`${styles["main-img"]}`) ||
      e.target.classList.contains(`${styles["next-image"]}`) ||
      e.target.classList.contains(`${styles["prev-image"]}`)
    ) {
      setShowEnglargedImage(true);
    } else {
      setShowEnglargedImage(false);
    }
  };
  useEffect(() => {
    const currentImage: any = Array.from(scrollRef?.current.childNodes).find(
      (child, i) => i === currentImageIndex
    );

    currentImage.scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "center",
    });
  }, [currentImageIndex]);
  useEffect(() => {
    const keyMoves = (e: KeyboardEvent) => {
      if (e.key === "ArrowRight") {
        e.preventDefault();
        nextImage();
      } else if (e.key === "ArrowLeft") {
        e.preventDefault();
        prevImage();
      }
    };

    window.addEventListener("keydown", keyMoves);
    return () => {
      window.removeEventListener("keydown", keyMoves);
    };
  });

  return (
    <section onClick={(e) => openImage(e)} className={styles.gallery}>
      <div
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        className={styles["main-img"]}
      >
        <MdArrowBackIos onClick={prevImage} />
        <MdArrowForwardIos onClick={nextImage} />
      </div>
      {showEnlargedImage && (
        <div className={styles["enlarged-image"]}>
          <AiOutlineClose />
          <BiLeftArrow className={styles["prev-image"]} onClick={prevImage} />
          <BiRightArrow className={styles["next-image"]} onClick={nextImage} />
          <Image
            key={images[currentImageIndex].slice(-10)}
            src={images[currentImageIndex]}
            alt={images[currentImageIndex].slice(-10)}
            width={1200}
            height={800}
          />
        </div>
      )}
      <ScrollContainer
        className={styles["thumbnail-img__wrapper"]}
        innerRef={scrollRef}
      >
        {images.map((image, i) => {
          return (
            <Image
              key={image.slice(-10) + i}
              className={styles["thumbnail-img"]}
              src={image}
              alt={image.slice(-10)}
              width={150}
              height={100}
              onClick={() => setCurrentImageIndex(i)}
            />
          );
        })}
      </ScrollContainer>
    </section>
  );
};

export default ImageGallery;
