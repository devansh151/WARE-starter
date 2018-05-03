import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardMainContainerComponent } from './board-main-container/board-main-container.component';
import { BoardActions } from './shared/board.actions';
import { BoardApiService } from './shared/board-api.service';

@NgModule({
  imports: [
    CommonModule
  ],
  declarations: [BoardMainContainerComponent],
  providers: [
    BoardActions,
    BoardApiService
  ]
})
export class BoardModule { }
