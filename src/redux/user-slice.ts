import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface InitialState {
  userEmail: string | undefined;
}

const initialUserState: InitialState = {
  userEmail: undefined,
};
const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUserEmail(state, action: PayloadAction<string>) {
      state.userEmail = action.payload;
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice.reducer;
