import { combineReducers } from "redux";
import { changeLanguageReducer } from "./language";
import { changeThemeMode } from "./theme";
import usersReducer from "./users";
import { loaderReducer } from "./loading";

export default combineReducers({
  langugae: changeLanguageReducer,
  theme: changeThemeMode,
  users: usersReducer,
  isLoading: loaderReducer,
});
