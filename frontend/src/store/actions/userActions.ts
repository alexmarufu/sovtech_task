import { AxiosResponse } from "axios";
import { Dispatch, Action } from "redux";
import { UserActionTypes } from "../actionTypes";
import axios from "../Axios";
import { People } from "../interfaces";

export const getPeople =
  (query:string) =>
  async (dispatch: Dispatch): Promise<Action> => {
    dispatch({ type: UserActionTypes.GET_PEOPLE_REQUEST });
    try {
      const res: AxiosResponse = await axios.post("",{query: query});
      console.log(res);
      if (res.status === 200) {
        const people: People[] = res.data?.data?.getPeople;
        return dispatch({
          type: UserActionTypes.GET_PEOPLE_SUCCESS,
          payload: { people }
        });
      }
      const { error } = res.data?.data;
      console.log(error)
      return dispatch({
        type: UserActionTypes.SET_ERROR,
        payload: { error: "something went wrong" }
      });
    } catch (error) {
      console.log(error)
      return dispatch({
        type: UserActionTypes.SET_ERROR,
        payload: { error: "something went wrong" }
      });
    }
  };



  export const getPerson =
  (query:string) =>
  async (dispatch: Dispatch): Promise<Action> => {
    dispatch({ type: UserActionTypes.GET_PEOPLE_REQUEST });
    try {
      const res: AxiosResponse = await axios.post("",{query: query});
      console.log(res);
      if (res.status === 200) {
        const person: People[] = res.data?.data?.getPerson;
        return dispatch({
          type: UserActionTypes.GET_PERSON_SUCCESS,
          payload: { person }
        });
      }
      const { error } = res.data?.data;
      console.log(error)
      return dispatch({
        type: UserActionTypes.SET_ERROR,
        payload: { error: "something went wrong" }
      });
    } catch (error) {
      console.log(error)
      return dispatch({
        type: UserActionTypes.SET_ERROR,
        payload: { error: "something went wrong" }
      });
    }
  };

export const incrementPage = () => (dispatch: Dispatch) => {
  return dispatch({
    type: UserActionTypes.INCREMENT_PAGE,
  });
}

export const decrementPage = () => (dispatch: Dispatch) => {
  return dispatch({
    type: UserActionTypes.DECREMENT_PAGE,
  });
}