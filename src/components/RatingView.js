import React, {Component} from 'react'
import {View, Image, Text, StyleSheet, TouchableOpacity} from 'react-native'
import {starEmpty, starFull} from '../utils/Images'
import {iconLightGray} from '../utils/Colors'

class RatingView extends Component {
	constructor() {
		super()

		this.state = {
			expanded: false
		}
	}

	renderStars() {
		let stars = []
		for (let i = 0; i < 5; i++) {
			const imageSrc = i < this.props.rating ? starFull : starEmpty
			stars.push(<Image source={imageSrc} key={i} style={styles.starImage}/>)
		}

		return stars
	}

	render() {
		return (
			<TouchableOpacity onPress={this.props.onPress}>
				<View style={styles.ratingView}>
					{this.renderStars()}
				</View>
			</TouchableOpacity>
		)
	}
}

const styles = StyleSheet.create({
	ratingView: {
		flexDirection: 'row',
		alignItems: 'center',
		paddingTop: 4,
		paddingBottom: 4
	},
	starImage: {
		marginRight: 2
	}
})

export default RatingView
