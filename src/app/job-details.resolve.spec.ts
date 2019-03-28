import { JobDetailResolve } from "./job-details.resolve";
import { of } from 'rxjs';
import { JobsService } from './jobs.service';
import { ActivatedRoute, ActivatedRouteSnapshot } from '@angular/router';
import { Response } from './models/response';

describe('JobDetailsResolve', () => {
    let jobDetailsResolve: JobDetailResolve;
    beforeEach(() => {
        const jobsServiceMock = { 'data': () => of({ body: [{ id: 1 }, { id: 2 }] }) } as unknown as JobsService;
        jobDetailsResolve = new JobDetailResolve(jobsServiceMock);
    })
    it('should return observalbe of proper job id', () => {
        const route = {
            params: {
                id: 2
            }
        }
        jobDetailsResolve.resolve(route as unknown as ActivatedRouteSnapshot)
            .subscribe((data) => {
                expect(data).toEqual({ id: 2} as unknown as Response.JobDetail);
            })
    })
})