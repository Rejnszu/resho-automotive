import React, { useRef } from "react";
import styles from "./PageSelect.module.scss";
import { useDispatch, useSelector } from "react-redux";
import { useRouter } from "next/router";
import { offersActions } from "@/redux/offersPageSlice";
import { RootState } from "@/redux/store";
import { RxDoubleArrowRight, RxDoubleArrowLeft } from "react-icons/rx";

interface Props {
  offersAmount: number;
  currentPageNumber: number;
}
const PageSelect = ({ offersAmount, currentPageNumber }: Props) => {
  const router = useRouter();
  const dispatch = useDispatch();
  const pageListRef = useRef<HTMLUListElement>(null);
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
  let helperArray = createHelperArray(pageAmount);
  function createPaginatedArray(currentPageNumber, helperArray) {
    let paginatedArray;
    if (currentPageNumber === 1) {
      paginatedArray = helperArray.slice(0, 3);
    } else if (currentPageNumber === helperArray.length) {
      paginatedArray = helperArray.slice(-3);
    } else {
      paginatedArray = helperArray.slice(
        currentPageNumber - 2,
        currentPageNumber + 1
      );
    }
    return paginatedArray;
  }

  const paginatedArray = createPaginatedArray(currentPageNumber, helperArray);
  const showArrows = helperArray.length > 3;
  return (
    <section className={`${styles.pages} container section-padding`}>
      <select
        value={offersPerPage}
        onChange={(e) => {
          dispatch(offersActions.setOffersPerPage(+e.target.value));
        }}
      >
        <option value="8">8</option>
        <option value="16">16</option>
        <option value="24">24</option>
      </select>
      <ul ref={pageListRef} className={styles["pages__numbers"]}>
        {showArrows && (
          <li
            onClick={() => {
              router.push(`/buy-a-car/1`);
              Array.from(pageListRef.current.children).forEach((child) =>
                child.classList.remove(styles.active)
              );
              setTimeout(() => {
                Array.from(pageListRef.current.children)[1].classList.add(
                  styles.active
                );
              }, 100);
            }}
            key="start"
          >
            <RxDoubleArrowLeft />
          </li>
        )}
        {paginatedArray?.map((number, i) => (
          <li
            className={i === 0 ? styles.active : ""}
            onClick={(e) => {
              router.push(`/buy-a-car/${number}`);
              Array.from(pageListRef.current.children).forEach((child) =>
                child.classList.remove(styles.active)
              );
              e.currentTarget.classList.add(styles.active);
            }}
            key={number}
          >
            {number}
          </li>
        ))}
        {showArrows && (
          <li
            onClick={() => {
              router.push(`/buy-a-car/${helperArray.length}`);
              Array.from(pageListRef.current.children).forEach((child) =>
                child.classList.remove(styles.active)
              );
              setTimeout(() => {
                Array.from(pageListRef.current.children)[
                  paginatedArray.length
                ].classList.add(styles.active);
              }, 100);
            }}
            key="end"
          >
            <RxDoubleArrowRight />
          </li>
        )}
      </ul>
    </section>
  );
};

export default PageSelect;
