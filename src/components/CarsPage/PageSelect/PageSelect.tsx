import React from "react";
import styles from "./PageSelect.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { offersActions } from "@/redux/offersPageSlice";
import { RootState } from "@/redux/store";
interface Props {
  offersAmount: number;
}
const PageSelect = ({ offersAmount }: Props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const offersPerPage = useSelector(
    (state: RootState) => state.offers.offersPerPage
  );
  let pageAmount = Math.ceil(offersAmount / offersPerPage);

  function createHelperArray(pageAmount) {
    let helperArray: number[] = [];
    for (let i = 1; i <= pageAmount; i++) {
      helperArray.push(i);
    }
    return helperArray;
  }
  const helperArray = createHelperArray(pageAmount);

  return (
    <section className={`${styles.pages} container section-padding`}>
      <select
        value={offersPerPage}
        onChange={(e) => {
          dispatch(offersActions.setOffersPerPage(+e.target.value));
        }}
      >
        <option value="12">12</option>
        <option value="24">24</option>
        <option value="36">36</option>
      </select>
      <ul className={styles["pages__numbers"]}>
        {helperArray.map((number) => (
          <li onClick={() => router.push(`/buy-a-car/${number}`)} key={number}>
            {number}
          </li>
        ))}
      </ul>
    </section>
  );
};

export default PageSelect;
