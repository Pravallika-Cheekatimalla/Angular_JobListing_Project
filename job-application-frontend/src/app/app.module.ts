import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { AppComponent } from './app.component';
import { JobSearchComponent } from './job-search/job-search.component'; // Import your JobSearchComponent

import { CommonModule } from '@angular/common';

@NgModule({
  declarations: [
    AppComponent,
    JobSearchComponent // Declare your JobSearchComponent here
  ],
  imports: [
    BrowserModule,
    CommonModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
