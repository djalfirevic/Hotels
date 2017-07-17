import React from 'react'
import {View, StyleSheet, Image, Text, TouchableOpacity} from 'react-native'

const Row = (props) => {
	return (
		<TouchableOpacity onPress={() => {
			props.onPress(props.hotel)
		}}>
			<View style={styles.container}>
				<Image source={{uri: props.hotel.image}} style={styles.photo}/>
				<Text style={styles.text}>
					{props.hotel.name}
				</Text>
			</View>
		</TouchableOpacity>
	)
}

const styles = StyleSheet.create({
	container: {
		flex: 1,
		padding: 12,
		flexDirection: 'row',
		alignItems: 'center',
	},
	text: {
		marginLeft: 12,
		fontSize: 16,
	},
	photo: {
		height: 40,
		width: 40,
		borderRadius: 20,
	},
})

export default Row
