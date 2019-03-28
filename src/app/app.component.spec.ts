import { TestBed, async, ComponentFixture } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { AppComponent } from './app.component';
import { CUSTOM_ELEMENTS_SCHEMA } from '@angular/core';
import { of } from 'rxjs';
import { JobsService } from './jobs.service';
import { Response } from './models/response';

describe('AppComponent', () => {
  let component: AppComponent;
  let fixture: ComponentFixture<AppComponent>;
  beforeEach(async(() => {
    const jobsServiceMock =  { 'data': () => of({ body: [1, 2]}) };
    TestBed.configureTestingModule({
      imports: [
        RouterTestingModule
      ],
      declarations: [
        AppComponent
      ],
      schemas: [CUSTOM_ELEMENTS_SCHEMA],
      providers: [
        { provide: JobsService, useValue: jobsServiceMock }
      ]
    }).compileComponents();
  }));
  beforeEach(() => {
    fixture = TestBed.createComponent(AppComponent);
    component = fixture.debugElement.componentInstance;
    fixture.detectChanges();
  })
  it('should create the app', () => {
    expect(component).toBeTruthy();
  });
  it('should set job details to response from jobsservice request', () => {
    expect(component.jobDetails).toEqual([1, 2] as unknown as Response.JobDetail[])
  })
  it('should render jobdetails as list of links', () => {
    const element:HTMLElement = fixture.nativeElement;
    expect(element.querySelectorAll('a').length).toEqual(2);
  })
  it('jobdetail link should point to proper url and title', () => {
    component.jobDetails = [ { id: '1', title: '1'} as unknown as Response.JobDetail];
    fixture.detectChanges();
    const element:HTMLElement = fixture.nativeElement;
    const a = element.querySelector('a')!;
    expect(a.textContent).toEqual('1');
    expect(a.getAttribute('href')).toEqual('/job-detail/1');
  })
});
