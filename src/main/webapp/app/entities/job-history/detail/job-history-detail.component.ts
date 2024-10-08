import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatePipe, FormatMediumDatetimePipe } from 'app/shared/date';
import { IJobHistory } from '../job-history.model';

@Component({
  standalone: true,
  selector: 'jhi-job-history-detail',
  templateUrl: './job-history-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class JobHistoryDetailComponent {
  jobHistory = input<IJobHistory | null>(null);

  previousState(): void {
    window.history.back();
  }
}
