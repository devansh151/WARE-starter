import { Injectable } from "@angular/core";
import { ApiBridgeService } from "../../../core/services/api-bridge.service";
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BoardApiService {
	constructor(private apiBridge: ApiBridgeService) { }
	getMessage() {
		let url = `/getMessage`;
		return this.apiBridge.makeGet(url);
    }
}