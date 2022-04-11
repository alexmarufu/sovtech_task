import {
	userStateInterface,
} from '../interfaces';

import userReducer from './userReducer'

export { userReducer };

export interface RootReducerTypes {
	user: userStateInterface;
}
