import { UserService } from './../../../core/services/user.service';
import { Injectable } from "@angular/core";
import { fromJS, List, Map, Set } from "immutable";
import { IActionCreator, IAction } from "../../../shared/models";
import { AppActions } from "../../app/shared/app.actions";
import { BoardConstants } from "./board.constants";
import { BoardApiService } from "./board-api.service";
import { Router } from '@angular/router';
@Injectable()
export class BoardActions {

  constructor(private router: Router,private appActions:AppActions,private boardApiService:BoardApiService ) { }

  setMesage: IActionCreator = (data:any) => {
    return {
      type: BoardConstants.SET_MESSAGE,
      payload: data
    }
  }

  getMessage() {
    return (dispatch) => {
      this.boardApiService.getMessage()
        .map(res => res.json())
        .subscribe(res => {
          dispatch(this.setMesage(fromJS(res.message)));
        }, err => {
          dispatch(this.appActions.parseAndShowError(err));
        })
    }
  }

}
