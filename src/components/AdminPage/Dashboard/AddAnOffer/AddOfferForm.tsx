import React, { useState } from "react";
import styles from "./AddOfferForm.module.scss";
import Button from "@/components/UI/Button";
import { CarOffer } from "@/models/models";
import Image from "next/image";
import { useAddOfferMutation } from "@/redux/api/offersApiSlice";
import { useRouter } from "next/router";
import Spinner from "@/components/UI/Spinner";
import { useSelector } from "react-redux";
import { RootState } from "@/redux/store";

const AddOfferForm = () => {
  const email = useSelector((state: RootState) => state.user.userEmail);
  const router = useRouter();
  const [addNewOffer, { isSuccess, isLoading, isError }] =
    useAddOfferMutation();
  const [carOffer, setCarOffer] = useState<CarOffer>({
    title: "",
    images: [],
    description: "",
    model: "",
    brand: "",
    power: 0,
    mileage: 0,
    year: 0,
    engine: "",
    fuel: "",
    engineCapacity: 0,
    color: "",
    price: 0,
    email: email,
  });

  const onChange = (
    e: React.ChangeEvent<
      HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement
    >
  ): void => {
    setCarOffer({ ...carOffer, [e.target.name]: e.target.value });
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

  const addOffer = async (e) => {
    e.preventDefault();

    addNewOffer(carOffer);
  };
  if (isSuccess) {
    setTimeout(() => router.push("/admin/dashboard/your-offers"), 1000);
  }
  return (
    <form onSubmit={addOffer} className={styles["add-offer__form"]}>
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
          required
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
        <input
          required
          onChange={onChange}
          value={carOffer.brand}
          type="text"
          id="brand"
          name="brand"
        />
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
          <option value="1990">1990</option>
          <option value="1991">1991</option>
          <option value="1992">1992</option>
          <option value="1993">1993</option>
          <option value="1994">1994</option>
          <option value="1995">1995</option>
          <option value="1996">1996</option>
          <option value="1997">1997</option>
          <option value="1998">1998</option>
          <option value="1999">1999</option>
          <option value="2000">2000</option>
          <option value="2001">2001</option>
          <option value="2002">2002</option>
          <option value="2003">2003</option>
          <option value="2004">2004</option>
          <option value="2005">2005</option>
          <option value="2006">2006</option>
          <option value="2007">2007</option>
          <option value="2008">2008</option>
          <option value="2009">2009</option>
          <option value="2010">2010</option>
          <option value="2011">2011</option>
          <option value="2012">2012</option>
          <option value="2013">2013</option>
          <option value="2014">2014</option>
          <option value="2015">2015</option>
          <option value="2016">2016</option>
          <option value="2017">2017</option>
          <option value="2018">2018</option>
          <option value="2019">2019</option>
          <option value="2020">2020</option>
          <option value="2021">2021</option>
          <option value="2022">2022</option>
          <option value="2023">2023</option>
        </select>
      </div>
      <div className={styles["input__wrapper"]}>
        <label htmlFor="engine">Engine</label>
        <input
          required
          onChange={onChange}
          value={carOffer.engine}
          type="text"
          id="engine"
          name="engine"
        />
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
        <label htmlFor="engineCapacity">Engine Capacity [cm³]</label>
        <input
          required
          onChange={onChange}
          value={carOffer.engineCapacity}
          type="text"
          id="engineCapacity"
          name="engineCapacity"
        />
      </div>
      <div className={styles["input__wrapper"]}>
        <label htmlFor="fuel">Fuel</label>
        <input
          required
          onChange={onChange}
          value={carOffer.fuel}
          type="text"
          id="fuel"
          name="fuel"
        />
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
      <Button type="submit" style={styles["button--add-offer"]}>
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
