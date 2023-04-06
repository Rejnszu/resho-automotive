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
    fuel: "",
    color: "",
    powerUpperLevel: 0,
    powerLowerLevel: 0,
    mileageUpperLevel: 0,
    mileageLowerLevel: 0,
    enginecapacityUpperLevel: 0,
    enginecapacityLowerLevel: 0,
    priceUpperLevel: 0,
    priceLowerLevel: 0,
    yearUpperLevel: 0,
    yearLowerLevel: 0,
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
