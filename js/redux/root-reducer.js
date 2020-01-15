// jshint esversion:6
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import TourReducer from './tour/tour.reducer';
// import UserReducer from './user/user.reducer'; // doesnt exist yet
// import ObjectReducer from './object/object.reducer'; // doesnt exist yet

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  tour: TourReducer,
  // user: UserReducer, // doesnt exist yet
  // object: ObjectReducer // doesnt exist yet
});

export default persistReducer(persistConfig, rootReducer);