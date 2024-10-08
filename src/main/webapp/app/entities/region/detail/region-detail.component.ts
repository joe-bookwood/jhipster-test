import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatePipe, FormatMediumDatetimePipe } from 'app/shared/date';
import { IRegion } from '../region.model';

@Component({
  standalone: true,
  selector: 'jhi-region-detail',
  templateUrl: './region-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class RegionDetailComponent {
  region = input<IRegion | null>(null);

  previousState(): void {
    window.history.back();
  }
}
