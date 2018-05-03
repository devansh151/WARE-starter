import { Subscription } from 'rxjs/Subscription';
import { Dropdown } from 'primeng/components/dropdown/dropdown';
import { Component, OnInit, Input, ViewChild } from '@angular/core';
import { NgRedux, select } from '@angular-redux/store';
import { Subject } from 'rxjs/Subject';
import { List, fromJS } from 'immutable';

import { Router } from '@angular/router';
import { OverlayPanel } from 'primeng/components/overlaypanel/overlaypanel';
import { FormGroup, FormControl, FormBuilder, Validators } from '@angular/forms';
import { UserService } from './../../../core/services/user.service';
import { InputText } from "primeng/components/inputtext/inputtext";
import { SearchFormModel } from "./shared/models/search-form.model";
import { HeaderActions } from './shared/header.actions';

@Component({
	selector: 'ola-header',
	templateUrl: './header.component.pug',
	styleUrls: ['./header.component.scss'],
	providers: [SearchFormModel]
})
export class HeaderComponent implements OnInit {
	
	constructor(private userService: UserService, private _fb: FormBuilder, private formModel: SearchFormModel, private redux: NgRedux<any>, private headerActions: HeaderActions,private router: Router) { }


	ngOnInit() {
		
	}

	

	ngOnDestroy() {
	}

}	
