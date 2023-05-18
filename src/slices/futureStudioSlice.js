import { createSlice } from "@reduxjs/toolkit";

export const futureStudioSlice = createSlice({
  name: "futureStudio",
  initialState: [
    {
      goal: null,
      goaldescription: null,
      milestones: null,
    },
    [{ title: null, date: null, description: null }],
  ],
  reducers: {
    addMilestones: (state, action) => {
      state.goal = action.payload.goal;
      state.goaldescription = action.payload.goaldescription;
      state.milestones = action.payload.milestones;
    },
    addDiaryContent: (state, action) => {
      state[1].push(action.payload);
    },
  },
});

export const { addMilestones, addDiaryContent } = futureStudioSlice.actions;

export default futureStudioSlice.reducer;
