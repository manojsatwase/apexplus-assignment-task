import { configureStore } from '@reduxjs/toolkit';
import { scenarioApi } from '../api/scenariosApi';
import { vehicleApi } from '../api/vehicleApi';
import editModeReducer from './slices/editModeSlice';

const store = configureStore({
  reducer: {
    editMode: editModeReducer,
    [scenarioApi.reducerPath]: scenarioApi.reducer,
    [vehicleApi.reducerPath]: vehicleApi.reducer,
  },
  middleware: (getDefaultMiddleware) =>
    // Add the middleware for the APIs
    getDefaultMiddleware().concat(scenarioApi.middleware, vehicleApi.middleware),
});

export default store;
