// export const setLanguage = (payload) => {
//     return {
//       type: "SET_LANGUAGE",
//       payload ,
//     };
//   };

import { axiosInstance } from "../../network";

export const getUsers = () => (dispatch) => {
  return axiosInstance
    .get("users")
    .then((res) =>
      dispatch({
        type: "GET_USERS",
        payload: res.data,
      })
    )
    .catch((err) => console.log(err));
};
