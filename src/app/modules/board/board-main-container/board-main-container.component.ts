import { Component, OnInit } from '@angular/core';
import { BoardActions } from "../shared/board.actions";
import { List, Map, fromJS } from 'immutable';
import { NgRedux, select } from '@angular-redux/store';
import { Subject } from 'rxjs/Subject';

@Component({
  selector: 'board-main-container',
  templateUrl: './board-main-container.component.pug',
  styleUrls: ['./board-main-container.component.scss']
})
export class BoardMainContainerComponent implements OnInit {
  @select(['board', 'projects']) projects$: Subject<any>;
  constructor(private boardActions:BoardActions,private redux:NgRedux<any>) { }

  ngOnInit() {
  }

  getProjects(){
    this.redux.dispatch(this.boardActions.getProjects());
  }

}