import { MockInstance, afterEach, beforeEach, describe, expect, it, vitest } from 'vitest';
import { HttpTestingController, provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed, inject } from '@angular/core/testing';
import { ActivatedRoute, convertToParamMap } from '@angular/router';

import { FaIconLibrary } from '@fortawesome/angular-fontawesome';
import { faEye, faPencilAlt, faPlus, faSort, faSortDown, faSortUp, faSync, faTimes } from '@fortawesome/free-solid-svg-icons';
import { NgbModal } from '@ng-bootstrap/ng-bootstrap/modal';
import { TranslateModule } from '@ngx-translate/core';
import { Subject, of } from 'rxjs';

import { sampleWithRequiredData } from '../job-history.test-samples';
import { JobHistoryService } from '../service/job-history.service';

import { JobHistory } from './job-history';

vitest.useFakeTimers();

describe('JobHistory Management Component', () => {
  let httpMock: HttpTestingController;
  let comp: JobHistory;
  let fixture: ComponentFixture<JobHistory>;
  let service: JobHistoryService;
  let routerNavigateSpy: MockInstance;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
        provideHttpClientTesting(),
        {
          provide: ActivatedRoute,
          useValue: {
            data: of({
              defaultSort: 'id,asc',
            }),
            queryParamMap: of(
              convertToParamMap({
                page: '1',
                size: '1',
                sort: 'id,desc',
              }),
            ),
            snapshot: {
              queryParams: {},
              queryParamMap: convertToParamMap({
                page: '1',
                size: '1',
                sort: 'id,desc',
              }),
            },
          },
        },
      ],
    });

    fixture = TestBed.createComponent(JobHistory);
    comp = fixture.componentInstance;
    service = TestBed.inject(JobHistoryService);
    routerNavigateSpy = vitest.spyOn(comp.router, 'navigate');

    const library = TestBed.inject(FaIconLibrary);
    library.addIcons(faEye, faPencilAlt, faPlus, faSort, faSortDown, faSortUp, faSync, faTimes);
    httpMock = TestBed.inject(HttpTestingController);
  });

  afterEach(() => {
    TestBed.resetTestingModule();
    httpMock.verify();
  });

  it('should call load all on init', async () => {
    // WHEN
    TestBed.tick();
    const req = httpMock.expectOne({ method: 'GET' });
    req.flush([{ id: 18667 }], { headers: { link: '<http://localhost/api/foo?page=1&size=20>; rel="next"' } });
    await vitest.runAllTimersAsync();

    // THEN
    expect(comp.isLoading()).toEqual(false);
    expect(comp.jobHistories()[0]).toEqual(expect.objectContaining({ id: 18667 }));
  });

  describe('trackId', () => {
    it('should forward to jobHistoryService', () => {
      const entity = { id: 18667 };
      vitest.spyOn(service, 'getJobHistoryIdentifier');
      const id = comp.trackId(entity);
      expect(service.getJobHistoryIdentifier).toHaveBeenCalledWith(entity);
      expect(id).toBe(entity.id);
    });
  });

  it('should calculate the sort attribute for a non-id attribute', () => {
    // WHEN
    comp.navigateToWithComponentValues({ predicate: 'non-existing-column', order: 'asc' });

    // THEN
    expect(routerNavigateSpy).toHaveBeenLastCalledWith(
      expect.anything(),
      expect.objectContaining({
        queryParams: expect.objectContaining({
          sort: ['non-existing-column,asc'],
        }),
      }),
    );
  });

  it('should calculate the sort attribute for an id', () => {
    // WHEN
    TestBed.tick();
    httpMock.expectOne({ method: 'GET' });

    // THEN
    expect(service.jobHistoriesParams()).toMatchObject(expect.objectContaining({ sort: ['id,desc'] }));
  });

  it('should infinite scroll', async () => {
    // GIVEN
    TestBed.tick();
    let req = httpMock.expectOne({ method: 'GET' });
    req.flush([{ id: 18667 }], { headers: { link: '<http://localhost/api/foo?page=1&size=20>; rel="next"' } });
    await vitest.runAllTimersAsync();
    expect(comp.jobHistories().length).toEqual(1);
    expect(comp.jobHistories()[0]).toEqual(expect.objectContaining({ id: 18667 }));

    // WHEN
    comp.loadNextPage();
    TestBed.tick();
    expect(service.jobHistoriesParams()).toMatchObject(expect.objectContaining({ page: '1' }));
    req = httpMock.expectOne({ method: 'GET' });
    req.flush([{ id: 27293 }], {
      headers: { link: '<http://localhost/api/foo?page=0&size=20>; rel="prev",<http://localhost/api/foo?page=2&size=20>; rel="next"' },
    });
    await vitest.runAllTimersAsync();
    expect(comp.jobHistories().length).toEqual(2);
    expect(comp.jobHistories()[1]).toEqual(expect.objectContaining({ id: 27293 }));

    comp.loadNextPage();
    TestBed.tick();
    expect(service.jobHistoriesParams()).toMatchObject(expect.objectContaining({ page: '2' }));
    req = httpMock.expectOne({ method: 'GET' });
    req.flush([{ id: 27293 }], {
      headers: { link: '<http://localhost/api/foo?page=0&size=20>; rel="prev",<http://localhost/api/foo?page=2&size=20>; rel="next"' },
    });
    await vitest.runAllTimersAsync();
    expect(comp.jobHistories().length).toEqual(2);
    expect(comp.jobHistories()[1]).toEqual(expect.objectContaining({ id: 27293 }));
  });

  describe('delete', () => {
    let ngbModal: NgbModal;
    let deleteModalMock: any;

    beforeEach(() => {
      deleteModalMock = { componentInstance: {}, closed: new Subject() };
      // NgbModal is not a singleton using TestBed.inject.
      // ngbModal = TestBed.inject(NgbModal);
      ngbModal = (comp as any).modalService;
      vitest.spyOn(ngbModal, 'open').mockReturnValue(deleteModalMock);
    });

    it('on confirm should call load', inject([], () => {
      // GIVEN
      vitest.spyOn(comp, 'load');

      // WHEN
      comp.delete(sampleWithRequiredData);
      deleteModalMock.closed.next('deleted');

      // THEN
      expect(ngbModal.open).toHaveBeenCalled();
      expect(comp.load).toHaveBeenCalled();
    }));

    it('on dismiss should call load', inject([], () => {
      // GIVEN
      vitest.spyOn(comp, 'load');

      // WHEN
      comp.delete(sampleWithRequiredData);
      deleteModalMock.closed.next();

      // THEN
      expect(ngbModal.open).toHaveBeenCalled();
      expect(comp.load).not.toHaveBeenCalled();
    }));
  });
});
