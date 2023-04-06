import { Component, OnInit } from '@angular/core';
import {
	NgbCalendar,
	NgbDate,
	NgbDatepickerModule,
	NgbDateStruct,
	NgbInputDatepickerConfig,
} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-pcirugia',
  templateUrl: './pcirugia.component.html',
  styleUrls: ['./pcirugia.component.css'],
  providers: [NgbInputDatepickerConfig],
})
export class PcirugiaComponent {
  model: NgbDateStruct = { day: 4, month: 4, year: 2023 };
  
  constructor(config: NgbInputDatepickerConfig, calendar: NgbCalendar) {
		// customize default values of datepickers used by this component tree
		config.minDate = { year: 1900, month: 1, day: 1 };
		config.maxDate = { year: 2099, month: 12, day: 31 };

		// days that don't belong to current month are not visible
		config.outsideDays = 'hidden';

	


		// setting datepicker popup to close only on click outside
		config.autoClose = 'outside';

		// setting datepicker popup to open above the input
		config.placement = ['top-start', 'top-end'];

}
}