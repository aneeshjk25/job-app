import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {MatSidenavModule, MatListModule, MatToolbarModule, MatButtonModule, MatIconModule, MatCardModule} from '@angular/material'

import { HttpClientModule } from '@angular/common/http';

import { RouterModule, Routes } from '@angular/router';
import { JobDetailComponent } from './job-detail/job-detail.component';
import { LayoutModule } from '@angular/cdk/layout';
import { JobDetailResolve } from './job-details.resolve';

const appRoutes: Routes = [
  {
    path: 'job', component: AppComponent,
  },
  {
    path: 'job-detail/:id', component : JobDetailComponent, resolve: {
      jobDetail: JobDetailResolve
    }
  }
]

@NgModule({
  declarations: [
    AppComponent,
    JobDetailComponent
  ],
  imports: [
    MatSidenavModule,
    MatListModule,
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    HttpClientModule,
    RouterModule.forRoot(
      appRoutes,
      { enableTracing: false } // <-- debugging purposes only
    ),
    LayoutModule,
    MatToolbarModule,
    MatButtonModule,
    MatIconModule,
    MatCardModule
  ],
  providers: [
    JobDetailResolve
  ],
  bootstrap: [AppComponent]
})
export class AppModule { }
