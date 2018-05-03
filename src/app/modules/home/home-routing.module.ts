
import { Routes, RouterModule } from "@angular/router";
import { NgModule } from "@angular/core";

import { HomeComponent } from './home.component';

import { HomeRouteGuardService } from './home-route-guard.service';
import { LoginRouteGuardService } from './../../login-route-guard.service';
import { AppComponent } from "../app/app.component";
import { BoardMainContainerComponent } from "../board/board-main-container/board-main-container.component";



const routes: Routes = [
	{
		path: '',
		component: HomeComponent,
		canActivate: [LoginRouteGuardService, HomeRouteGuardService],

		// canActivate: [LoginRouteGuardService],
		children: [
			{ path: 'board', component: BoardMainContainerComponent },
			{ path: '**', redirectTo:'board' }
		]
	}
];

@NgModule({

	imports: [RouterModule.forRoot(routes)],
	exports: [RouterModule]
})
export class HomeRoutingModule { }
