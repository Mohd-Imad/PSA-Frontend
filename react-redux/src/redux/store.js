import {createStore} from 'redux';
import {counterReducer} from './counter/counter.reducer'
import {composeWithDevTools} from '@redux-devtools/extension'

let store = createStore(counterReducer, composeWithDevTools())    //composeWithDevTools-- to debug the redux

export {store}