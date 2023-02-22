import React, { useState } from "react";
import styles from "./AddOfferForm.module.scss";
import Button from "@/components/UI/Button";
import { CarOffer } from "@/models/models";
import Image from "next/image";
import { useAddOfferMutation } from "@/redux/api/offersApiSlice";
import { useRouter } from "next/router";
import Spinner from "@/components/UI/Spinner";
const AddOfferForm = () => {
  const router = useRouter();
  const [addNewOffer, { isSuccess, isLoading, isError }] =
    useAddOfferMutation();
  const [carOffer, setCarOffer] = useState<CarOffer>({
    title: "",
    images: [],
    description: "",
    model: "",
    power: 0,
    mileage: 0,
    year: 0,
    engine: "",
    price: 0,
  });

  const onChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ): void => {
    setCarOffer({ ...carOffer, [e.target.name]: e.target.value });
  };
  const onChangeImages = (e: React.ChangeEvent<HTMLInputElement>): void => {
    setCarOffer({
      ...carOffer,
      images: [
        ...carOffer.images,
        ...Array.from(e.target.files).map((file: any) => {
          return URL.createObjectURL(file);
        }),
        ,
      ],
    });
  };

  const addOffer = async (e) => {
    e.preventDefault();

    addNewOffer(carOffer);
  };
  if (isSuccess) {
    setTimeout(() => router.push("/admin/dashboard/your-offers"), 1000);
  }
  return (
    <form className={styles["add-offer__form"]}>
      <div className={styles["input__wrapper"]}>
        <label htmlFor="title">Offer Title</label>
        <input
          onChange={onChange}
          value={carOffer.title}
          type="text"
          id="title"
          name="title"
        />
      </div>
      <div className={styles["input__wrapper"]}>
        <label htmlFor="images">Images</label>
        <input
          onChange={(e) => {
            onChangeImages(e);
            console.log(Array.from(e.target.files));
          }}
          type="file"
          multiple
          id="images"
          name="images"
          accept="image/*"
        />
        <div className={styles.images}>
          {carOffer.images.map((image) => {
            if (image === undefined) {
              return;
            }
            return (
              <Image
                key={image}
                src={`${image}`}
                alt={image}
                width={100}
                height={100}
              />
            );
          })}
        </div>
      </div>
      <div className={styles["input__wrapper"]}>
        <label htmlFor="model">Model</label>
        <input
          onChange={onChange}
          value={carOffer.model}
          type="text"
          id="model"
          name="model"
        />
      </div>
      <div className={styles["input__wrapper"]}>
        <label htmlFor="power">Power</label>
        <input
          onChange={onChange}
          value={carOffer.power}
          type="number"
          id="power"
          name="power"
        />
      </div>

      <div className={styles["input__wrapper"]}>
        <label htmlFor="number">Mileage</label>
        <input
          onChange={onChange}
          value={carOffer.mileage}
          type="number"
          id="mileage"
          name="mileage"
        />
      </div>
      <div className={styles["input__wrapper"]}>
        <label htmlFor="number">Year of production</label>
        <input
          onChange={onChange}
          value={carOffer.year}
          type="number"
          id="year"
          name="year"
        />
      </div>
      <div className={styles["input__wrapper"]}>
        <label htmlFor="engine">Engine</label>
        <input
          onChange={onChange}
          value={carOffer.engine}
          type="text"
          id="engine"
          name="engine"
        />
      </div>
      <div className={styles["input__wrapper"]}>
        <label htmlFor="price">Price</label>
        <input
          onChange={onChange}
          value={carOffer.price}
          type="number"
          id="price"
          name="price"
        />
      </div>
      <div className={styles["input__wrapper"]}>
        <label htmlFor="description">Description</label>
        <textarea
          onChange={onChange}
          value={carOffer.description}
          typeof="text"
          id="description"
          name="description"
        ></textarea>
      </div>
      <Button style={styles["button--add-offer"]} onClick={addOffer}>
        Add Offer
      </Button>
      {isLoading && (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      )}
    </form>
  );
};

export default AddOfferForm;
