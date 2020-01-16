// jshint esversion:6
import { combineReducers } from 'redux';
import { persistReducer } from 'redux-persist';
import storage from 'redux-persist/lib/storage';
import TourReducer from './tour/tour.reducer';
import UserReducer from './user/user.reducer';
import ObjectReducer from './object/object.reducer';

const persistConfig = {
  key: 'root',
  storage
};

const rootReducer = combineReducers({
  tour: TourReducer,
  user: UserReducer,
  object: ObjectReducer
});

export default persistReducer(persistConfig, rootReducer);