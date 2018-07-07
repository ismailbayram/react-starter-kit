import { createStore, applyMiddleware } from "redux";
import thunk from "redux-thunk";

import reducers from "../reducers/index";

const middleware = [thunk];
const AppStore = createStore(reducers, applyMiddleware(...middleware));

export default AppStore;
