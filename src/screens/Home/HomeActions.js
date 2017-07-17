import * as types from '../../reducers/types'
import Settings from '../../utils/Constants'

export function getHotels(dispatch) {
	fetch(`${Settings.API_URL}/hotel_api/`, {
		method: 'GET',
		headers: {
			'Accept': 'application/json',
			'Content-Type': 'application/json',
			'Authorization': 'Token fc6de7f1196b776fad0929fd44a5b93eb77aa4c3'
		}
	}).then((response) => response.json())
		.then((responseJson) => {
			dispatch({
				type: types.GET_HOTELS_SUCCESS,
				payload: responseJson
			})
		}).catch((error) => {
		console.error(error)
	})
}

export function setHotelDetails(dispatch, hotel) {
	dispatch({
		type: types.SET_HOTEL_DETAILS,
		payload: hotel
	})
}
