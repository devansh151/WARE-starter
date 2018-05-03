import { IReducer, IAction } from "../../../shared/models";
import { fromJS, Record, List } from "immutable";
import { BoardConstants } from "./board.constants";

const initialState = fromJS({
    board:{
        message:''
    }
});

export const BoardReducer: IReducer<any> = (state: any = initialState, action: IAction) => {
	switch (action.type) {
		case BoardConstants.SET_MESSAGE:
            return state.setIn(['board','message'], action.payload);
        default:
            return state;
    }
}