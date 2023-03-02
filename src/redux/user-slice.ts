import { createSlice, PayloadAction } from "@reduxjs/toolkit";

interface User {
  email: string;
  phone: number;
  id: string;
}

interface InitialState {
  user: User | undefined;
}

const initialUserState: InitialState = {
  user: undefined,
};
const userSlice = createSlice({
  name: "user",
  initialState: initialUserState,
  reducers: {
    setUser(state, action: PayloadAction<User>) {
      state.user = action.payload;
    },
  },
});
export const userActions = userSlice.actions;
export default userSlice.reducer;
