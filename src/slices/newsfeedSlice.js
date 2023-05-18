import { createSlice } from "@reduxjs/toolkit";

export const newsfeedSlice = createSlice({
  name: "newsfeed",
  initialState: {
    // status: false,
    // dp: null,
    // name: null,
    // postimg: null,
    // username: null,
    // date: null,
    // caption: null,
    // reactions: null,

    userpostimg: null,
    usercaptions: null,
    poststatus: false,

    textToUser: null,
    texted: null,

    commentByUser: null,
    commentToUser: null,
    comment: null,
  },
  reducers: {
    // otherPost: (state, action) => {
    //   state.status = true;
    //   state.dp = action.payload.dp;
    //   state.name = action.payload.name;
    //   state.username = action.payload.username;
    //   state.date = action.payload.date;
    //   state.postimg = action.payload.postimg;
    //   state.caption = action.payload.caption;
    //   state.reactions = action.payload.reactions;
    // },
    uploadFeed: (state, action) => {
      state.poststatus = true;
      state.userpostimg = action.payload.ad;
      state.usercaptions = action.payload.caption;
    },
    sendText: (state, action) => {
      state.textToUser = action.payload.user;
      state.texted = action.payload.text;
    },
    postComment: (state, action) => {
      state.commentByUser = action.payload.byUser;
      state.commentToUser = action.payload.toUser;
      state.comment = action.payload.comment;
    },
  },
});

export const { otherPost, uploadFeed, sendText, postComment } =
  newsfeedSlice.actions;

export default newsfeedSlice.reducer;
