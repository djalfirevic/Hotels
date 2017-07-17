import React, {Component} from 'react'
import {View, StyleSheet} from 'react-native'
import Button from '../components/Button'
import Login from './Login'
import SignUp from './SignUp'

class Welcome extends Component {
	loginPressed() {
		this.props.navigator.push({
			component: Login,
			title: 'Login',
		})
	}

	signUpPressed() {
		this.props.navigator.push({
			component: SignUp,
			title: 'Sign Up',
		})
	}

	render() {
		return (
			<View style={styles.container}>
				<View style={styles.footer}>
					<Button
						caption="Login"
						onPress={this.loginPressed.bind(this)}/>
					<Button
						caption="Sign Up"
						onPress={this.signUpPressed.bind(this)}/>
				</View>
			</View>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		flexDirection: 'row',
		marginTop: 64,
		alignItems: 'flex-end'
	},
	footer: {
		flex: 1,
		flexDirection: 'row',
		height: 50,
		justifyContent: 'space-between',
		marginLeft: 20,
		marginRight: 20
	}
})

export default Welcome
