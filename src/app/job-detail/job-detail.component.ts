import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router, NavigationStart, NavigationEnd } from '@angular/router';
import { Response } from '../models/response';
import { filter, merge } from 'rxjs/operators';
import { forkJoin, zip } from 'rxjs';

@Component({
  selector: 'app-job-detail',
  templateUrl: './job-detail.component.html',
  styleUrls: ['./job-detail.component.scss']
})
export class JobDetailComponent implements OnInit {
  jobDetail: Response.JobDetail;
  constructor(
    private route: ActivatedRoute,
    private router: Router
  ) { }

  ngOnInit() {
    this.jobDetail = this.route.snapshot.data.jobDetail;
    zip(
      this.router.events
        .pipe(
          filter(event => event instanceof NavigationEnd),
        ),
      this.route.params
    ).subscribe(() => {
      this.jobDetail = this.route.snapshot.data.jobDetail;
    })
  }

}
