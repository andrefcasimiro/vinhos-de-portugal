import { createStore, applyMiddleware, combineReducers } from "redux"
import {
  searchReducer,
} from "data/search/reducer"
import {
  languageReducer,
} from "data/languages/reducer"
import thunkMiddleware from "redux-thunk"
import { persistStore, persistReducer } from "redux-persist"
import storage from "redux-persist/lib/storage"

const persistConfig = {
  key: "root",
  storage,
}

const reducers = combineReducers({
  language: persistReducer(persistConfig, languageReducer),
  search: searchReducer,
})

const createStoreWithMiddleware = applyMiddleware(
  thunkMiddleware,
)(createStore)

export const store = createStoreWithMiddleware(
  reducers,
  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__(),
)

export const persistor = persistStore(store)
