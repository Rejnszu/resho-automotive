import React, { useState } from "react";
import styles from "./ImageGallery.module.scss";
import Image from "next/image";
import { MdArrowBackIos, MdArrowForwardIos } from "react-icons/md";
interface Props {
  images: string[];
}
const ImageGallery = ({ images }: Props) => {
  const [currentImageIndex, setCurrentImageIndex] = useState(0);
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
  return (
    <section className={styles.gallery}>
      <div
        style={{ backgroundImage: `url(${images[currentImageIndex]})` }}
        className={styles["main-img"]}
      >
        <MdArrowBackIos onClick={prevImage} />
        <MdArrowForwardIos onClick={nextImage} />
      </div>
      <div className={styles["thumbnail-img__wrapper"]}>
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
      </div>
    </section>
  );
};

export default ImageGallery;
