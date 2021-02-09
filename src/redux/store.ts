import {createStore, combineReducers, applyMiddleware} from 'redux';
import thunk from 'redux-thunk';
import AsyncStorage from '@react-native-community/async-storage';
import {persistStore, persistReducer} from 'redux-persist';

import {themeReducer} from 'src/redux/reducers';

const persistConfig = {
  key: 'root',
  storage: AsyncStorage,
};

const rootReducer = combineReducers({
//   todoListReducers: persistReducer(persistConfig, todoReducers),
  theme: persistReducer(persistConfig, themeReducer),
});

const store = createStore(rootReducer, applyMiddleware(thunk));
const appPersist = persistStore(store);

export {store, appPersist};
