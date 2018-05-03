import { SafeHtmlPipe } from './pipes/safe-html.pipe';
import { TimepickerComponent } from './components/timepicker/timepicker.component';
import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { FlexLayoutModule } from '@angular/flex-layout';
import { FormsModule } from '@angular/forms';
import { ReactiveFormsModule } from "@angular/forms";
import { OverlayPanelModule } from 'primeng/components/overlaypanel/overlaypanel';
import { AccordionModule } from 'primeng/components/accordion/accordion';
import { DropdownModule } from 'primeng/components/dropdown/dropdown';
import { ListboxModule } from 'primeng/components/listbox/listbox';
import { MultiSelectModule } from 'primeng/components/multiselect/multiselect';
import { DialogModule } from 'primeng/components/dialog/dialog';
import { TooltipModule } from 'primeng/components/tooltip/tooltip';
import { SliderModule } from 'primeng/components/slider/slider';
import { DatepickerComponent } from './components/datepicker/datepicker.component';
import { OlaTabGroupComponent } from './components/ola-tab-group/ola-tab-group.component';
import { OlaTabItemComponent } from './components/ola-tab-group/ola-tab-item/ola-tab-item.component';
import { DismissableComponent } from './components/dismissable/dismissable.component';
import { CarouselComponent } from './components/carousel/carousel.component';
import { InfiniteScrollDirective } from './directives/infinite-scroll.directive';
import { ImgFallbackDirective } from './directives/img-fallback.directive';
import { RoleMatrixDirective } from './directives/role-matrix.directive';
import { ChipsComponent } from './components/chips/chips.component';
import { SortableDirective } from './directives/sortable.directive';

@NgModule({
	imports: [
		CommonModule,
		FlexLayoutModule,
		FormsModule,
		ReactiveFormsModule,
		DropdownModule,
		MultiSelectModule,
		DialogModule,
		TooltipModule,
		OverlayPanelModule,
		AccordionModule,
    	ListboxModule
	],
	exports: [
		CommonModule,
		FlexLayoutModule,
		FormsModule,
		DatepickerComponent,
		OlaTabGroupComponent,
		OlaTabItemComponent,
		TimepickerComponent,
		DismissableComponent,
		ReactiveFormsModule,
		CarouselComponent,
		InfiniteScrollDirective,
		RoleMatrixDirective,
		ChipsComponent,
		DropdownModule,
		MultiSelectModule,
		DialogModule,
		TooltipModule,
		SortableDirective,
		SafeHtmlPipe,
		TooltipModule,
		AccordionModule,
		ListboxModule,
		OverlayPanelModule,
    	SliderModule,
	],
	declarations: [
		DatepickerComponent,
		OlaTabGroupComponent,
		OlaTabItemComponent,
		TimepickerComponent,
		DismissableComponent,
		CarouselComponent,
		InfiniteScrollDirective,
		RoleMatrixDirective,
		ChipsComponent,
		ImgFallbackDirective,
		SortableDirective,
		SafeHtmlPipe
	],

})
export class SharedModule { }
