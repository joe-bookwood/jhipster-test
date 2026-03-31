import { beforeEach, describe, expect, it, vitest } from 'vitest';
import { HttpResponse } from '@angular/common/http';
import { provideHttpClientTesting } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ActivatedRoute } from '@angular/router';

import { TranslateModule } from '@ngx-translate/core';
import { Subject, from, of } from 'rxjs';

import { ICountry } from 'app/entities/country/country.model';
import { CountryService } from 'app/entities/country/service/country.service';
import { ILocation } from '../location.model';
import { LocationService } from '../service/location.service';

import { LocationFormService } from './location-form.service';
import { LocationUpdate } from './location-update';

describe('Location Management Update Component', () => {
  let comp: LocationUpdate;
  let fixture: ComponentFixture<LocationUpdate>;
  let activatedRoute: ActivatedRoute;
  let locationFormService: LocationFormService;
  let locationService: LocationService;
  let countryService: CountryService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [TranslateModule.forRoot()],
      providers: [
        provideHttpClientTesting(),
        {
          provide: ActivatedRoute,
          useValue: {
            params: from([{}]),
          },
        },
      ],
    });

    fixture = TestBed.createComponent(LocationUpdate);
    activatedRoute = TestBed.inject(ActivatedRoute);
    locationFormService = TestBed.inject(LocationFormService);
    locationService = TestBed.inject(LocationService);
    countryService = TestBed.inject(CountryService);

    comp = fixture.componentInstance;
  });

  describe('ngOnInit', () => {
    it('should call country query and add missing value', () => {
      const location: ILocation = { id: 13013 };
      const country: ICountry = { id: 21165 };
      location.country = country;

      const countryCollection: ICountry[] = [{ id: 21165 }];
      vitest.spyOn(countryService, 'query').mockReturnValue(of(new HttpResponse({ body: countryCollection })));
      const expectedCollection: ICountry[] = [country, ...countryCollection];
      vitest.spyOn(countryService, 'addCountryToCollectionIfMissing').mockReturnValue(expectedCollection);

      activatedRoute.data = of({ location });
      comp.ngOnInit();

      expect(countryService.query).toHaveBeenCalled();
      expect(countryService.addCountryToCollectionIfMissing).toHaveBeenCalledWith(countryCollection, country);
      expect(comp.countriesCollection()).toEqual(expectedCollection);
    });

    it('should update editForm', () => {
      const location: ILocation = { id: 13013 };
      const country: ICountry = { id: 21165 };
      location.country = country;

      activatedRoute.data = of({ location });
      comp.ngOnInit();

      expect(comp.countriesCollection()).toContainEqual(country);
      expect(comp.location).toEqual(location);
    });
  });

  describe('save', () => {
    it('should call update service on save for existing entity', () => {
      // GIVEN
      const saveSubject = new Subject<ILocation>();
      const location = { id: 8454 };
      vitest.spyOn(locationFormService, 'getLocation').mockReturnValue(location);
      vitest.spyOn(locationService, 'update').mockReturnValue(saveSubject);
      vitest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ location });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving()).toEqual(true);
      saveSubject.next(location);
      saveSubject.complete();

      // THEN
      expect(locationFormService.getLocation).toHaveBeenCalled();
      expect(comp.previousState).toHaveBeenCalled();
      expect(locationService.update).toHaveBeenCalledWith(expect.objectContaining(location));
      expect(comp.isSaving()).toEqual(false);
    });

    it('should call create service on save for new entity', () => {
      // GIVEN
      const saveSubject = new Subject<ILocation>();
      const location = { id: 8454 };
      vitest.spyOn(locationFormService, 'getLocation').mockReturnValue({ id: null });
      vitest.spyOn(locationService, 'create').mockReturnValue(saveSubject);
      vitest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ location: null });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving()).toEqual(true);
      saveSubject.next(location);
      saveSubject.complete();

      // THEN
      expect(locationFormService.getLocation).toHaveBeenCalled();
      expect(locationService.create).toHaveBeenCalled();
      expect(comp.isSaving()).toEqual(false);
      expect(comp.previousState).toHaveBeenCalled();
    });

    it('should set isSaving to false on error', () => {
      // GIVEN
      const saveSubject = new Subject<ILocation>();
      const location = { id: 8454 };
      vitest.spyOn(locationService, 'update').mockReturnValue(saveSubject);
      vitest.spyOn(comp, 'previousState');
      activatedRoute.data = of({ location });
      comp.ngOnInit();

      // WHEN
      comp.save();
      expect(comp.isSaving()).toEqual(true);
      saveSubject.error('This is an error!');

      // THEN
      expect(locationService.update).toHaveBeenCalled();
      expect(comp.isSaving()).toEqual(false);
      expect(comp.previousState).not.toHaveBeenCalled();
    });
  });

  describe('Compare relationships', () => {
    describe('compareCountry', () => {
      it('should forward to countryService', () => {
        const entity = { id: 21165 };
        const entity2 = { id: 2258 };
        vitest.spyOn(countryService, 'compareCountry');
        comp.compareCountry(entity, entity2);
        expect(countryService.compareCountry).toHaveBeenCalledWith(entity, entity2);
      });
    });
  });
});
