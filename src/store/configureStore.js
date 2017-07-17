import {createStore, applyMiddleware} from 'redux'
import reducers from '../reducers/reducers'
import thunkMiddleware from 'redux-thunk'

const middlewares = [thunkMiddleware]

export default function configureStore() {
	return createStore(
		reducers,
		applyMiddleware(...middlewares)
	)
}
