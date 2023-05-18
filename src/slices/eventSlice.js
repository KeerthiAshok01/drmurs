import { createSlice } from "@reduxjs/toolkit";

export const eventSlice = createSlice({
  name: "event",
  initialState: {
    eposter: null,
    eConductorName: null,
    eConductorMail: null,
    eConductorContact: null,
    eDescription: null,
    eRules: null,
    post: null,
    eventName: null,
    eventParticipants: null,
    eventWinners: null,

    query: null,
  },
  reducers: {
    createEvent: (state, action) => {
      state.eposter = action.payload.ad;
      state.eConductorName = action.payload.name;
      state.eConductorMail = action.payload.mail;
      state.eConductorContact = action.payload.contact;
      state.eDescription = action.payload.description;
      state.eRules = action.payload.rules;
    },
    postEvent: (state, action) => {
      state.eventName = action.payload.eventName;
      state.eventParticipants = action.payload.eventParticipants;
      state.eventWinners = action.payload.eventWinners;
      state.post = action.payload.post;
    },
    addQuery: (state, action) => {
      state.query = action.payload.query;
    },
  },
});

export const { createEvent, postEvent, addQuery } = eventSlice.actions;

export default eventSlice.reducer;
