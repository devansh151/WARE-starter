
import { combineReducers } from "redux-immutable";

import { AppReducer } from "../../modules/app/shared/app.reducer";
import { BoardReducer } from "../../modules/board/shared/board.reducer";

export default combineReducers({
	app: AppReducer,
	board:BoardReducer
});





