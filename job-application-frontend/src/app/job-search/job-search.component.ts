import { Component, OnInit } from '@angular/core';
import axios, { Axios } from 'axios';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-job-search',
  imports: [CommonModule],
  templateUrl: './job-search.component.html',
  styleUrl: './job-search.component.css'
})
export class JobSearchComponent implements OnInit {
  jobs: any[] = [];
  constructor() { }

  ngOnInit(): void {
    this.getJobListings();
  }

  // Get job listings from the backend
  getJobListings() {
    axios.get('http://localhost:5000/get-job-listings')
      .then(response => {
        this.jobs = response.data.jobs;
      }
    )
      .catch(error => {
        console.error("error fetching job listings!", error);
      })
  }
  // Apply for a job (send request to backend)
  applyForJob(jobUrl: string) {
    axios.post('http://localhost:5000/apply-job', { url: jobUrl })
      .then(response => {
        alert('job application submitted successfully!');
      })
      .catch(error => {
        console.error('Error applying for job!', error);
      })
  }

}

