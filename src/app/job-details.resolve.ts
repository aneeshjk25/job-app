import { Injectable } from "@angular/core";
import { Resolve, ActivatedRouteSnapshot } from "@angular/router";
import { Observable } from "rxjs";
import { JobsService } from './jobs.service';
import { Response } from './models/response';
import { map } from 'rxjs/operators';
@Injectable()
export class JobDetailResolve implements Resolve<Response.JobDetail> {
    constructor(private jobsService: JobsService) { }

    resolve(route: ActivatedRouteSnapshot): Observable<Response.JobDetail> {
        return this.jobsService.data()
        .pipe(map(( (response) => {
            return response.body.find(jd => jd.id === route.params.id)!
        })))
    }

}  