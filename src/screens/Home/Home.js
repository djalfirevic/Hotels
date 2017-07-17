import React, {Component} from 'react'
import ItemsList from '../../components/ItemsList'
import {connect} from 'react-redux'
import {getHotels, setHotelDetails} from './HomeActions'
import HotelDetails from '../HotelDetails'

class Home extends Component {
	constructor(props) {
		super(props)
	}

	componentWillReceiveProps(nextProps) {
		if (this.props.hotelDetails != nextProps.hotelDetails) {
			this.props.navigator.push({
				component: HotelDetails,
				title: nextProps.hotelDetails.name,
				passProps: nextProps.hotelDetails
			})
		}
	}

	componentDidMount() {
		// We should set it to null, because IF clause will never be executed if we tap on the same row.
		this.props.setHotel(null)
		this.props.getHotels()
	}

	loadHotelDetails(hotel) {
		this.props.setHotel(hotel)
	}

	render() {
		return (
			<ItemsList items={this.props.hotels} onPress={this.loadHotelDetails.bind(this)}/>
		)
	}
}

function mapStateToProps(state) {
	return ({
		hotels: state.home.hotels,
		hotelDetails: state.home.hotelDetails
	})
}

function mapDispatchToProps(dispatch) {
	return ({
		getHotels: () => {
			getHotels(dispatch)
		},
		setHotel: (hotel) => {
			setHotelDetails(dispatch, hotel)
		}
	})
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
