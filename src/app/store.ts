import {combineReducers, configureStore} from '@reduxjs/toolkit';
import weatherSlice from "./redux"

const rootReducer = combineReducers({
  weatherApp: weatherSlice
})

export const store = configureStore({
  reducer: rootReducer
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>;