import { NgModule } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

import { CommonModule, PathLocationStrategy } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { ConfirmDialogModule } from 'primeng/components/confirmdialog/confirmdialog';

import { HomeComponent } from './home.component';
import { BoardModule } from "../board/board.module";
import { SidebarComponent } from './sidebar/sidebar.component';
import { HeaderComponent } from './header/header.component';
import { HomeRoutingModule } from './home-routing.module';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { HomeRouteGuardService } from './home-route-guard.service';
import { InputTextModule } from 'primeng/components/inputtext/inputtext';
import { OverlayPanelModule } from 'primeng/components/overlaypanel/overlaypanel';
import { HeaderActions } from "./header/shared/header.actions";
@NgModule({
	imports: [
		CommonModule,
		HomeRoutingModule,
		FlexLayoutModule,
		InputTextModule,
		OverlayPanelModule,
		FormsModule,
		ReactiveFormsModule,
		TooltipModule,
		ConfirmDialogModule,
		BoardModule
	],
	declarations: [
		HomeComponent,
		SidebarComponent,
		HeaderComponent
	],
	providers: [
		HomeRouteGuardService,
		HeaderActions,
		PathLocationStrategy
	]
})
export class HomeModule { }
