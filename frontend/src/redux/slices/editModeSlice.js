import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  isEditScenarioActive: false,
  isEditVehicleActive:false
};

const editModeSlice = createSlice({
  name: 'editMode',
  initialState,
  reducers: {
    setEditScenarioMode: (state, action) => {
      state.isEditScenarioActive = action.payload;
    },
    setEdiVehicleMode: (state, action) => {
      state.isEditVehicleActive = action.payload;
    },
  },
});

export const { setEditScenarioMode,setEdiVehicleMode} = editModeSlice.actions;
export default editModeSlice.reducer;
