import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { BoardMainContainerComponent } from './board-main-container/board-main-container.component';
import { BoardActions } from './shared/board.actions';
import { BoardApiService } from './shared/board-api.service';
import { FlexLayoutModule } from '@angular/flex-layout';
import { SvgLineComponent } from './shared/components/svg-line/svg-line.component';

@NgModule({
  imports: [
    CommonModule,
    FlexLayoutModule 
  ],
  declarations: [BoardMainContainerComponent, SvgLineComponent],
  providers: [
    BoardActions,
    BoardApiService
  ]
})
export class BoardModule { }
