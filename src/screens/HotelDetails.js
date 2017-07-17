import React, {Component} from 'react'
import {Text, StyleSheet, Image, ScrollView, TouchableOpacity} from 'react-native'
import {heart} from '../utils/Images'
import RatingView from '../components/RatingView'

class HotelDetails extends Component {
	favoritesPressed() {
		console.log('Favorites pressed')
	}

	ratingTapped() {
		console.log('Rating tapped')
	}

	render() {
		return (
			<ScrollView style={styles.container}>
				<Image source={{uri: this.props.image}} style={styles.image}/>
				<RatingView rating={this.props.stars} onPress={this.ratingTapped.bind(this)}/>
				<Text style={styles.description}>{this.props.description}</Text>
				<Image source={heart} style={styles.image}/>
				<TouchableOpacity onPress={this.favoritesPressed.bind(this)}>
					<Image source={require('../../resources/heart.pdf')} style={styles.favorites}/>
				</TouchableOpacity>
			</ScrollView>
		)
	}
}

const styles = StyleSheet.create({
	container: {
		flex: 1
	},
	image: {
		height: 200
	},
	favorites: {
		width: 33,
		height: 29
	},
	description: {
		marginLeft: 10,
		marginRight: 10,
		marginTop: 10
	}
})

export default HotelDetails
