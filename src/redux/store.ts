import { configureStore } from "@reduxjs/toolkit";
import { offersApiSlice } from "./api/offersApiSlice";
import messengerReducer from "./messenger-slice";
export type RootState = ReturnType<typeof store.getState>;
const store = configureStore({
  reducer: {
    messenger: messengerReducer,
    [offersApiSlice.reducerPath]: offersApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(offersApiSlice.middleware),
});

export default store;
