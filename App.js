import React, {Component} from 'react'
import {NavigatorIOS} from 'react-native'
import Welcome from './src/screens/Welcome'
import Home from './src/screens/Home/Home'
import {isLoggedIn} from './src/utils/Helpers'
import {Provider} from 'react-redux'
import configureStore from './src/store/configureStore'

const store = configureStore()

export default class App extends Component {
	render() {
		if (isLoggedIn()) {
			return (
				<Provider store={store}>
					<NavigatorIOS
						initialRoute={{
							component: Home,
							title: 'Hotels'
						}}
						style={{flex: 1}}
					/>
				</Provider>
			)
		} else {
			return (
				<Provider store={store}>
					<NavigatorIOS
						initialRoute={{
							component: Welcome,
							title: 'Hotels'
						}}
						style={{flex: 1}}
					/>
				</Provider>
			)
		}
	}
}
