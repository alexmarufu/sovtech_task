import { UserActionTypes } from '../actionTypes';
import { userStateInterface, } from '../interfaces';
import { userActionType } from '../types';

const initialState = {
	loading: false,
	message: '',
	error: '',
	people: [],
	person: [],
};

const userReducer = (
	state: userStateInterface = initialState,
	action: userActionType
): userStateInterface => {
	switch (action.type) {
		case UserActionTypes.GET_PEOPLE_REQUEST: {
			return {
				...state,
				loading: true,
				error: '',
			};
		}
		case UserActionTypes.GET_PEOPLE_SUCCESS: {
			return {
				...state,
				people: action.payload.people,
                loading: false,
			};
		}
		case UserActionTypes.GET_PERSON_SUCCESS: {
			return {
				...state,
				person: action.payload.person,
                loading: false,
			};
		}
//
        case UserActionTypes.SET_ERROR: {
			return {
				...state,
				error: action.payload.error,
                loading: false,
			};
		}
		
		default:
			return state;
	}
};

export default userReducer;
