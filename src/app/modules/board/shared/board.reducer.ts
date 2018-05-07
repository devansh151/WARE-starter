import { IReducer, IAction } from "../../../shared/models";
import { fromJS, Record, List } from "immutable";
import { BoardConstants } from "./board.constants";

const initialState = fromJS({
    projects:[]
});

export const BoardReducer: IReducer<any> = (state: any = initialState, action: IAction) => {
	switch (action.type) {
		case BoardConstants.SET_ALL_PROJECTS:
            return state.setIn(['projects'], action.payload);
        default:
            return state;
    }
}