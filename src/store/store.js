import {compose,createStore,applyMiddleware} from "redux";
import {persistStore, persistReducer} from "redux-persist";
import logger from "redux-logger";
import {rootReducer} from "./root-reducer";
import storage from 'redux-persist/lib/storage'
import thunk from "redux-thunk";


//this is optional, the createStore can work fine without any 2nd and 3thr argument

const persistConfig ={
    key:'root',
    storage,
    whitelist:['cart']
}
const persistedReducer = persistReducer(persistConfig,rootReducer)
const middleWares = [process.env.NODE_ENV !== 'production' && logger,thunk].filter(Boolean)
const composeEnhancer = (process.env.NODE_ENV !== 'production' && window && window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__)||compose

const composeEnhancers = composeEnhancer(applyMiddleware(...middleWares))



export const store = createStore(persistedReducer,undefined,composeEnhancers)
export const persistor = persistStore(store)