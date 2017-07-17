import React from 'react'
import {TouchableOpacity, Text} from 'react-native'

const Button = (props) => {
	return (
		<TouchableOpacity onPress={props.onPress} style={styles.buttonStyle}>
			<Text style={styles.textStyle}>{props.caption}</Text>
		</TouchableOpacity>
	)
}

const styles = {
	textStyle: {
		textAlign: 'center',
		color: '#007aaf',
		fontSize: 16,
		fontWeight: '600',
	},
	buttonStyle: {
		justifyContent: 'center',
		backgroundColor: '#fff',
		marginLeft: 5,
		marginRight: 5
	}
}

export default Button
