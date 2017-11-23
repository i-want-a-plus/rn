import { combineReducers } from 'redux';
import { AsyncStorage } from 'react-native';
import { NavigationActions } from 'react-navigation';

import * as types from '../actions/types';
import actions from '../actions';

import nav from './nav';
import auth from './auth';
import * as courseReducers from './course';

const AppReducer = combineReducers({
  init: function authReducer (state = {}, action) {
    switch (action.type) {
      case types.APP_LOADING_FULFILLED:
        return { ...state, hasFinished: true };
      default:
        return state;
    };
  },
  nav,
  auth,
  ...courseReducers
});

export default AppReducer;