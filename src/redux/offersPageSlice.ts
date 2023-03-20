import { FilterObject } from "@/models/models";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  offersPerPage: number;
  filterObject: FilterObject;
}

const initialOffersState: InitialState = {
  offersPerPage: 8,
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
    enginecapacityUpperLevel: null,
    enginecapacityLowerLevel: null,
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
    resetFilter(state) {
      state.filterObject = initialOffersState.filterObject;
    },
  },
});
export const offersActions = offersSlice.actions;
export default offersSlice.reducer;
