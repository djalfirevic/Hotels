import {AsyncStorage} from 'react-native'

export async function isLoggedIn() {
	try {
		const value = await
			AsyncStorage.getItem('token')
		if (value !== null) {
			console.log(value)
			return true
		}
	} catch (error) {
		console.log(error)
		return false
	}
}
