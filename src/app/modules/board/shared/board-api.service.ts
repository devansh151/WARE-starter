import { Injectable } from "@angular/core";
import { ApiBridgeService } from "../../../core/services/api-bridge.service";
import { Subject } from 'rxjs/Subject';
import { BehaviorSubject } from 'rxjs/BehaviorSubject';

@Injectable()
export class BoardApiService {
	constructor(private apiBridge: ApiBridgeService) { }
	getAllProjects() {
		let url = `/getProjects`;
		return this.apiBridge.makeGet(url);
	}
	
	createIssue(){
		let url = `/createIssue`;
		return this.apiBridge.makePost(url);
	}

	getAllIssues(){
		let url = `/getIssues`;
		return this.apiBridge.makeGet(url);
	}
}