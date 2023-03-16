import { configureStore } from "@reduxjs/toolkit";
import { offersApiSlice } from "./api/offersApiSlice";
import { usersApiSlice } from "./api/usersApiSlice";
import offersReducer from "./offersPageSlice";
import messengerReducer from "./messenger-slice";
import cookiesReducer from "./cookies-slice";
import userReducer from "./user-slice";
export type RootState = ReturnType<typeof store.getState>;
const store = configureStore({
  reducer: {
    messenger: messengerReducer,
    cookies: cookiesReducer,
    user: userReducer,
    offers: offersReducer,
    [offersApiSlice.reducerPath]: offersApiSlice.reducer,
    [usersApiSlice.reducerPath]: usersApiSlice.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({
      serializableCheck: false,
    }).concat(offersApiSlice.middleware, usersApiSlice.middleware),
});

export default store;
