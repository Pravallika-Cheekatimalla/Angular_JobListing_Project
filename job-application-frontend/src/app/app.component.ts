import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';
import { JobSearchComponent } from './job-search/job-search.component'

@Component({
  selector: 'app-root',
  imports: [RouterOutlet, JobSearchComponent],
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'job-application-frontend';
}
