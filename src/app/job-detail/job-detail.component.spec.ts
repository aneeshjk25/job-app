import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { JobDetailComponent } from './job-detail.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { ActivatedRoute, Router, NavigationEnd } from '@angular/router';
import { Subject } from 'rxjs';
import { Response } from '../models/response';

describe('JobDetailComponent', () => {
  let component: JobDetailComponent;
  let fixture: ComponentFixture<JobDetailComponent>;
  let fakeParam: Subject<string>;
  let fakeNavigationEvent: Subject<NavigationEnd>
  let fakeRoute:ActivatedRoute;
  beforeEach(async(() => {
    fakeParam = new Subject();
    fakeNavigationEvent = new Subject();
    fakeRoute = {
      snapshot: {
        data: {
          jobDetail: {jobDetail: 'jobDetail'}
        }
      },
      params: fakeParam
    } as unknown as ActivatedRoute;
    const fakeRouter = { 'events' : fakeNavigationEvent};
    TestBed.configureTestingModule({
      declarations: [ JobDetailComponent ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: ActivatedRoute, useValue: fakeRoute},
        { provide: Router, useValue: fakeRouter} 
      ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(JobDetailComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
  it('shold set jobdetails properly when user reaches the page first time', () => {
    expect(component.jobDetail).toEqual({jobDetail: 'jobDetail'} as unknown as Response.JobDetail);
  })
  it('should change jobdetails when user navigates to a different job id', () => {
    const aR = fixture.debugElement.injector.get(ActivatedRoute);
    aR.snapshot.data.jobDetail = {jobDetail: 'jobDetail2'};
    fakeParam.next('1');
    const n = new NavigationEnd(1,'1','1');
    fakeNavigationEvent.next(n);
    expect(component.jobDetail).toEqual({jobDetail: 'jobDetail2'} as unknown as Response.JobDetail)
  })
});
