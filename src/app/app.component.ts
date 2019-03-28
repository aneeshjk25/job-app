import { Component, OnInit } from '@angular/core';
import { Response } from './models/response';
import { JobsService } from './jobs.service';
import { of } from 'rxjs';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent implements OnInit {
  jobDetails: Response.JobDetail[];
  constructor(private JobsService: JobsService) {

  }
  ngOnInit(): void {
    this.JobsService.data()
      .subscribe((data) => {
        this.jobDetails = data.body;
      })
  }
}
