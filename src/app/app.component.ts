import { Component, OnInit } from '@angular/core';
import { Response } from './models/response';
import { JobsService } from './jobs.service';
import { BreakpointObserver, Breakpoints } from '@angular/cdk/layout';
import { Observable } from 'rxjs';
import { map } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  jobDetails: Response.JobDetail[];
  constructor(private JobsService: JobsService, private breakpointObserver: BreakpointObserver) {

  }
  ngOnInit(): void {
    this.JobsService.data()
      .subscribe((data) => {
        this.jobDetails = data.body;
      })
  }
}
