import React, {Component} from 'react'
import {View, TextInput, StyleSheet, AsyncStorage} from 'react-native'
import Button from '../components/Button'
import Home from './Home/Home'
import Settings from '../utils/Constants'

class Login extends Component {
	constructor(props) {
		super(props)

		this.state = {
			username: '',
			password: ''
		}
	}

	loginPressed() {
		fetch(`${Settings.API_URL}/api-token-auth/`, {
			method: 'POST',
			headers: {
				'Accept': 'application/json',
				'Content-Type': 'application/json',
			},
			body: JSON.stringify({
				username: this.state.username,
				password: this.state.password
			})
		}).then((response) => response.json())
			.then((responseJson) => {
				console.log(responseJson.token)

				this.storeToken(responseJson.token)
				this.showHome()
			}).catch((error) => {
			console.error(error)
		})
	}

	showHome() {
		this.props.navigator.push({
			component: Home,
			title: 'Home',
		})
	}

	async storeToken(token) {
		try {
			await AsyncStorage.setItem('token', token)
		} catch (error) {
			console.log(error)
		}
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.controlsContainer}>
					<TextInput
						style={styles.textStyle}
						autoCapitalize={'none'}
						autoCorrect={false}
						placeholder={'Username'}
						onChangeText={(username) => this.setState({username})}
						value={this.state.username}/>
					<TextInput
						style={styles.textStyle}
						autoCapitalize={'none'}
						autoCorrect={false}
						placeholder={'Password'}
						secureTextEntry={true}
						onChangeText={(password) => this.setState({password})}
						value={this.state.password}/>
					<Button
						caption="Login"
						onPress={this.loginPressed.bind(this)}/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	textStyle: {
		height: 25
	},
	container: {
		flex: 1,
		marginTop: 64,
		alignItems: 'center',
		justifyContent: 'center'
	},
	controlsContainer: {
		width: 200,
		height: 100,
		flexDirection: 'column',
		justifyContent: 'space-between'
	}
})

export default Login
