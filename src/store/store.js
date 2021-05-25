import { createStore } from "redux";
import { persistStore, persistReducer } from "redux-persist";
import sessionStorage from "redux-persist/lib/storage/session";
import rootReducer from './reducers/rootReducer.js';

const persistConfig = {
    key: "root",
    storage:sessionStorage,
    whitelist: ["teamReducer"]
};

const pReducer = persistReducer(persistConfig, rootReducer);

const store = createStore(pReducer);
const persistor = persistStore(store);
export { store, persistor };