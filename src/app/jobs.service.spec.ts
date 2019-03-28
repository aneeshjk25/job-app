import { TestBed } from '@angular/core/testing';

import { JobsService } from './jobs.service';
import { HttpClient } from '@angular/common/http';

describe('JobsService', () => {
  let httpClientSpy: { get: jasmine.Spy };
  let service: JobsService;
  beforeEach(() => {
    httpClientSpy = jasmine.createSpyObj('HttpClient', ['get']);
    service = new JobsService(httpClientSpy as unknown as HttpClient);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
  it('should make request to get data', () => {
    service.data();
    expect(httpClientSpy.get).toHaveBeenCalled();
    expect(httpClientSpy.get).toHaveBeenCalledWith('/api/data')
  })
});
