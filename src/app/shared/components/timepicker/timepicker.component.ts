import { Component, OnInit, Input, Output, EventEmitter, ChangeDetectionStrategy } from '@angular/core';
import { List, Range, Seq } from 'immutable';

@Component({
	selector: 'ola-timepicker',
	templateUrl: './timepicker.component.pug',
	styleUrls: ['./timepicker.component.scss'],
	changeDetection: ChangeDetectionStrategy.OnPush
})
export class TimepickerComponent implements OnInit {

	hours: Array<any>;
	minutes: Array<any>;
	meridium: Array<any>;

	selectedHours: any;
	selectedMinutes: any;
	selectedMeridium: any;

	selectedDate: number;
	selectedMonth: number;
	selectedYear: number;
	selectedTimestamp: Date;

	@Input('date') set setDate(date: Date) {
		if (date) {
			this.setSelectedDate(new Date(date));
			this.selectedTimestamp = date;
		}
	}

	@Output() selected: EventEmitter<any> = new EventEmitter();
	constructor() { }

	setSelectedDate(date: Date) {
		let hours = date.getHours();
		let meridium = hours < 12 ? 'AM' : 'PM';
		hours = (hours % 12) || 12;

		this.selectedHours = this.zeroPad(hours);
		this.selectedMinutes = this.zeroPad(date.getMinutes());
		this.selectedMeridium = meridium;

		this.selectedDate = date.getDate();
		this.selectedMonth = date.getMonth();
		this.selectedYear = date.getFullYear();
	}

	setSelectedDateParams(date: Date) {
		this.selectedDate = date.getDate();
		this.selectedMonth = date.getMonth();
		this.selectedYear = date.getFullYear();
	}

	emitDateTime(event?) {
		let date = new Date(this.selectedYear, this.selectedMonth, this.selectedDate, (this.selectedMeridium === 'PM' ? ((this.selectedHours < 12) ? +(this.selectedHours) + 12 : 12) : +((this.selectedHours === "12") ? 0 : this.selectedHours)), +this.selectedMinutes)
		if (event === undefined)
			this.selected.emit({ date: date, action: '' });
		else
			this.selected.emit({ date: date, action: event.action });
	}

	dateChanged(event) {
		this.setSelectedDateParams(event.date);
		this.emitDateTime(event);

	}

	mapNumeralsToLabelValuePairs(arr: Array<Number>) {
		return arr.map(a => {
			let formattedVal = this.zeroPad(a);
			return {
				label: formattedVal,
				value: formattedVal
			}
		})
	}

	zeroPad(num: Number) {
		return ("0" + num).slice(-2);
	}
	ngOnInit() {
		// this.setSelectedDate(new Date());

		this.hours = this.mapNumeralsToLabelValuePairs(Range(1, 13).toArray());
		this.minutes = this.mapNumeralsToLabelValuePairs(Range(0, 60).toArray());
		this.meridium = [{ label: 'AM', value: 'AM' }, { label: 'PM', value: 'PM' }];
		this.emitDateTime(event)
	}

}
