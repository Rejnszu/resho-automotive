import React, { useState } from "react";
import styles from "./EditOfferForm.module.scss";
import Button from "@/components/UI/Button";
import { CarOffer } from "@/models/models";
import Image from "next/image";
import { useEditOfferMutation } from "@/redux/api/offersApiSlice";
import { useRouter } from "next/router";
import Spinner from "@/components/UI/Spinner";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";
import { carBrands } from "@/dummyData/DummyData";
import { yearArray } from "@/dummyData/DummyData";
interface Props {
  offer: CarOffer;
}
const EditOfferForm = ({ offer }: Props) => {
  const { name, phone } = useSelector((state: RootState) => state.user.user);
  const router = useRouter();
  const [editOffer, { isSuccess, isLoading }] = useEditOfferMutation();
  const [carOffer, setCarOffer] = useState<CarOffer>({
    ...offer,
    name: name,
    phone: phone,
  });

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    setCarOffer({ ...carOffer, [e.target.name]: e.target.value.toLowerCase() });
  };
  const onChangeImages = (e: React.ChangeEvent<HTMLInputElement>): void => {
    let helperArray = [];
    Array.from(e.target.files).map((file: any) => {
      if (file.size > 300000) {
        alert(`${file.name} is to big to upload.`);
        return;
      }
      const reader = new FileReader();
      reader.onload = function () {
        helperArray.push(reader.result);

        setCarOffer({
          ...carOffer,
          images: [...carOffer.images, ...helperArray],
        });
      };
      reader.readAsDataURL(file);
    });
  };

  const edit = async (e) => {
    e.preventDefault();
    editOffer(carOffer);
  };
  if (isSuccess) {
    setTimeout(() => router.push("/admin/dashboard/your-offers"), 1000);
  }
  return (
    <form onSubmit={edit} className={styles["edit-offer__form"]}>
      <div className={styles["input__wrapper"]}>
        <label htmlFor="title">Offer Title</label>
        <input
          required
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
                onClick={() => {
                  setCarOffer({
                    ...carOffer,
                    images: carOffer.images.filter((img) => {
                      return img !== image;
                    }),
                  });
                }}
              />
            );
          })}
        </div>
      </div>
      <div className={styles["input__wrapper"]}>
        <label htmlFor="brand">Brand</label>
        <select
          required
          onChange={onChange}
          value={carOffer.brand}
          id="brand"
          name="brand"
        >
          {carBrands.map((brand) => {
            return (
              <option key={brand.id} value={brand.name}>
                {brand.name}
              </option>
            );
          })}
        </select>
      </div>
      <div className={styles["input__wrapper"]}>
        <label htmlFor="model">Model</label>
        <input
          required
          onChange={onChange}
          value={carOffer.model}
          type="text"
          id="model"
          name="model"
        />
      </div>
      <div className={styles["input__wrapper"]}>
        <label htmlFor="number">Mileage [km]</label>
        <input
          required
          onChange={onChange}
          value={carOffer.mileage}
          type="number"
          id="mileage"
          name="mileage"
        />
      </div>
      <div className={styles["input__wrapper"]}>
        <label htmlFor="number">Year of production</label>

        <select
          required
          onChange={onChange}
          value={carOffer.year}
          id="year"
          name="year"
        >
          <option>year</option>

          {yearArray.map((year) => {
            return (
              <option key={year} value={year}>
                {year}
              </option>
            );
          })}
        </select>
      </div>
      <div className={styles["input__wrapper"]}>
        <label htmlFor="power">Power [KM]</label>
        <input
          required
          onChange={onChange}
          value={carOffer.power}
          type="number"
          id="power"
          name="power"
        />
      </div>
      <div className={styles["input__wrapper"]}>
        <label htmlFor="enginecapacity">Engine Capacity [cm³]</label>
        <input
          required
          onChange={onChange}
          value={carOffer.enginecapacity}
          type="text"
          id="enginecapacity"
          name="enginecapacity"
        />
      </div>
      <div className={styles["input__wrapper"]}>
        <label htmlFor="fuel">Fuel</label>
        <select
          required
          onChange={onChange}
          value={carOffer.fuel}
          id="fuel"
          name="fuel"
        >
          <option>Fuel</option>
          <option value="petrol">petrol</option>
          <option value="diesel">diesel</option>
          <option value="electric">electric</option>
          <option value="hybrid">hybrid</option>
        </select>
      </div>
      <div className={styles["input__wrapper"]}>
        <label htmlFor="color">Color</label>
        <select
          required
          onChange={onChange}
          value={carOffer.color}
          id="color"
          name="color"
        >
          <option>Color</option>
          <option value="beigne">beigne</option>
          <option value="black">black</option>
          <option value="blue">blue</option>
          <option value="brown">brown</option>
          <option value="claret">claret</option>
          <option value="dark blue">dark blue</option>
          <option value="gold">gold</option>
          <option value="green">green</option>
          <option value="grey">grey</option>
          <option value="orange">orange</option>
          <option value="purple">purple</option>
          <option value="red">red</option>
          <option value="silver">silver</option>
          <option value="sky blue">sky blue</option>
          <option value="white">white</option>
          <option value="yellow">yellow</option>{" "}
          <option value="other">other</option>
        </select>
      </div>
      <div className={styles["input__wrapper"]}>
        <label htmlFor="price">Price [€]</label>
        <input
          required
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
      <Button type="submit" style={styles["button--edit-offer"]}>
        Edit Offer
      </Button>
      {isLoading && (
        <div className={styles.spinner}>
          <Spinner />
        </div>
      )}
    </form>
  );
};

export default EditOfferForm;
