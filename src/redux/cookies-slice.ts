import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  showCookiesModal: boolean;
}

const initialCookiesState: InitialState = {
  showCookiesModal: true,
};
const cookiesSlice = createSlice({
  name: "cookies",
  initialState: initialCookiesState,
  reducers: {
    hideCookiesModal(state) {
      state.showCookiesModal = false;
    },
  },
});
export const cookiesActions = cookiesSlice.actions;
export default cookiesSlice.reducer;
