import {createStore, combineReducers, applyMiddleware} from 'redux';
import todos from '../reducers/reducer'
import {createLogger} from 'redux-logger';
import {routerReducer} from 'react-router-redux'


//reduxのlogを残してくれるようなstoreの作成
export default function configureStore() {
  const logger = createLogger({logger:console});
  const createStoreWithMiddleware = applyMiddleware(logger)(createStore);
  const store = createStoreWithMiddleware(
    combineReducers({
      todos: todos,
      routing: routerReducer
    })
  );
  return store;
}
