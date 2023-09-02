import { configureStore } from "@reduxjs/toolkit";
import {
  allUsersReducer,
  postOfFollowingReducer,
  userReducer,
} from "./reducers/User";
import { likeReducer } from "./reducers/Post";
const store = configureStore({
  reducer: {
    user: userReducer,
    postOfFollowing: postOfFollowingReducer,
    allUsers: allUsersReducer,
    like: likeReducer,
  },
});

export default store;
