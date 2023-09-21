import { combineReducers, configureStore } from "@reduxjs/toolkit";
// import { favoriteFilterReducer } from "./contacts/favoriteFilterSlice";
import { userFilterReducer } from "./contacts/userFilterSlice";
import { usersApi } from "./contacts/userSlice";
import { authReducer } from "./auth/authSlice";
import {
    persistStore,
    persistReducer,
    FLUSH,
    REHYDRATE,
    PAUSE,
    PERSIST,
    PURGE,
    REGISTER,
  } from 'redux-persist';
  import storage from 'redux-persist/lib/storage';

  const authPersistConfig = {
    key: 'auth',
    storage,
    whitelist: ['token'],
  };

const rootReducer = combineReducers({
    auth: persistReducer(authPersistConfig, authReducer),
    [usersApi.reducerPath]: usersApi.reducer,       // user reducer
    // favoriteFilter: favoriteFilterReducer,
    userFilter: userFilterReducer,
});

export const store = configureStore({
    reducer: rootReducer,
    middleware: (getDefaultMiddleware) => 
    getDefaultMiddleware({
        serializableCheck: {
          ignoredActions: [FLUSH, REHYDRATE, PAUSE, PERSIST, PURGE, REGISTER],
        },
      }).concat(usersApi.middleware),
      devTools: process.env.NODE_ENV === 'development'
});

export const persistor = persistStore(store);
