import { Component, input } from '@angular/core';
import { RouterModule } from '@angular/router';

import SharedModule from 'app/shared/shared.module';
import { DurationPipe, FormatMediumDatePipe, FormatMediumDatetimePipe } from 'app/shared/date';
import { ITask } from '../task.model';

@Component({
  standalone: true,
  selector: 'jhi-task-detail',
  templateUrl: './task-detail.component.html',
  imports: [SharedModule, RouterModule, DurationPipe, FormatMediumDatetimePipe, FormatMediumDatePipe],
})
export class TaskDetailComponent {
  task = input<ITask | null>(null);

  previousState(): void {
    window.history.back();
  }
}
