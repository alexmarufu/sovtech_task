import { People } from "../interfaces";

export type userActionType = {
	type: string;
	payload: {
		error: any;
		//page: number;
		people: People[];
		person: People[];
	}
};