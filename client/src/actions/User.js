import axios from "axios";

export const loginUser = (email, password) => async (dispatch) => {
  try {
    dispatch({ type: "loginRequest" });

    const { data } = await axios.post(
      "/api/v1/user/login-user",
      {
        email,
        password,
      },
      { headers: { "Content-Type": "application/json" } }
    );

    dispatch({ type: "loginSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "loginFailure", payload: error.response.data.message });
  }
};

export const loadUser = () => async (dispatch) => {
  try {
    dispatch({ type: "loadUserRequest" });

    const { data } = await axios.get("/api/v1/user/my-profile");

    dispatch({ type: "loadUserSuccess", payload: data.user });
  } catch (error) {
    dispatch({ type: "loadUserFailure", payload: error.response.data.message });
  }
};

export const getFollowingPosts = () => async (dispatch) => {
  try {
    dispatch({ type: "postOfFollowingRequest" });
    const { data } = await axios.get("/api/v1/post/get-following-post");
    dispatch({ type: "postOfFollowingSuccess", payload: data.posts });
  } catch (error) {
    dispatch({
      type: "postOfFollowingFailure",
      payload: error.response.data.message,
    });
  }
};

export const getAllUsersReducer = () => async (dispatch) => {
  try {
    dispatch({ type: "allUsersRequest" });
    const { data } = await axios.get("/api/v1/user/all-users");
    dispatch({ type: "allUsersSuccess", payload: data.users });
  } catch (error) {
    dispatch({
      type: "allUsersFailure",
      payload: error.response.data.message,
    });
  }
};
