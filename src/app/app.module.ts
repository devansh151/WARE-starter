import { NgModule, ErrorHandler } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';

/* App Entities */
import { AppComponent } from "./modules/app/app.component";

/* CoreModule & AppRoutingModule */
import { CoreModule } from './core/core.module';
import { HomeModule } from './modules/home/home.module';
import { ToastModule, ToastOptions } from 'ng2-toastr/ng2-toastr';
import { CustomOption } from './shared/toastr.config';
import { AppActions } from './modules/app/shared/app.actions';
import { LoginRouteGuardService } from './login-route-guard.service';
import { Router } from '@angular/router';

@NgModule({
	imports: [
		BrowserModule,
		BrowserAnimationsModule,
		CoreModule.forRoot(),
		ToastModule.forRoot(),
		HomeModule,
	],
	declarations: [
		AppComponent,
	],
	entryComponents: [
	],
	providers: [
		{ provide: ToastOptions, useClass: CustomOption },
		AppActions,
		LoginRouteGuardService
	],
	bootstrap: [AppComponent]
})
export class AppModule { }
