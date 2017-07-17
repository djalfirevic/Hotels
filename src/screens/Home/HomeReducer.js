import * as types from '../../reducers/types'
import initialState from '../../reducers/initialState'

export default function homeReducer(state = initialState.home, action) {
	switch (action.type) {
		case types.GET_HOTELS_SUCCESS:
			return {
				...state,
				hotels: action.payload
			}
		case types.SET_HOTEL_DETAILS:
			return {
				...state,
				hotelDetails: action.payload
			}
		default:
			return state
	}
}
