import { FilterObject } from "@/models/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  offersPerPage: number;
  filterObject: FilterObject;
}

const initialOffersState: InitialState = {
  offersPerPage: 12,
  filterObject: {
    model: "",
    brand: "",
    year: "",
    fuel: "",
    color: "",
    powerUpperLevel: null,
    powerLowerLevel: null,
    mileageUpperLevel: null,
    mileageLowerLevel: null,
    engineCapacityUpperLevel: null,
    engineCapacityLowerLevel: null,
    priceUpperLevel: null,
    priceLowerLevel: null,
  },
};
const offersSlice = createSlice({
  name: "offers",
  initialState: initialOffersState,
  reducers: {
    setOffersPerPage(state, action: PayloadAction<number>) {
      state.offersPerPage = action.payload;
    },
    setFilterObject(state, action: PayloadAction<FilterObject>) {
      state.filterObject = action.payload;
    },
  },
});
export const offersActions = offersSlice.actions;
export default offersSlice.reducer;
