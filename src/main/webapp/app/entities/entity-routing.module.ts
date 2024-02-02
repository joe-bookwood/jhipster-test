import { NgModule } from '@angular/core';
import { RouterModule } from '@angular/router';

@NgModule({
  imports: [
    RouterModule.forChild([
      {
        path: 'region',
        data: { pageTitle: 'jhipsterTestApp.region.home.title' },
        loadChildren: () => import('./region/region.routes'),
      },
      {
        path: 'country',
        data: { pageTitle: 'jhipsterTestApp.country.home.title' },
        loadChildren: () => import('./country/country.routes'),
      },
      {
        path: 'location',
        data: { pageTitle: 'jhipsterTestApp.location.home.title' },
        loadChildren: () => import('./location/location.routes'),
      },
      {
        path: 'department',
        data: { pageTitle: 'jhipsterTestApp.department.home.title' },
        loadChildren: () => import('./department/department.routes'),
      },
      {
        path: 'task',
        data: { pageTitle: 'jhipsterTestApp.task.home.title' },
        loadChildren: () => import('./task/task.routes'),
      },
      {
        path: 'employee',
        data: { pageTitle: 'jhipsterTestApp.employee.home.title' },
        loadChildren: () => import('./employee/employee.routes'),
      },
      {
        path: 'job',
        data: { pageTitle: 'jhipsterTestApp.job.home.title' },
        loadChildren: () => import('./job/job.routes'),
      },
      {
        path: 'job-history',
        data: { pageTitle: 'jhipsterTestApp.jobHistory.home.title' },
        loadChildren: () => import('./job-history/job-history.routes'),
      },
      /* jhipster-needle-add-entity-route - JHipster will add entity modules routes here */
    ]),
  ],
})
export class EntityRoutingModule {}
