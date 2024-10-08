import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatePipe, FormatMediumDatetimePipe } from 'app/shared/date';
import { ICountry } from '../country.model';

@Component({
  standalone: true,
  selector: 'jhi-country-detail',
  templateUrl: './country-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class CountryDetailComponent {
  country = input<ICountry | null>(null);

  previousState(): void {
    window.history.back();
  }
}
