const express = require('express');
const puppeteer = require('puppeteer');
const app = express();
const port = 5000;
const cors = require('cors');
app.use(cors());
app.use(express.json());


// Endpoint to scrape job listings (for simplicity, this example doesn't scrape real data)
app.get('/get-job-listings', async (req, res) => {
  const jobListings = [
    { title: 'Full Time', url: 'https://www.indeed.com/q-full-time-l-clemson,-sc-jobs.html?vjk=aeb62ac0db845bfd' },
    { title: 'Part Time', url: 'https://www.indeed.com/jobs?q=software&l=clemson%2C+sc&sc=0kf%3Aattr%2875GKK%29%3B&from=searchOnDesktopSerp&vjk=53931282ec95ce85' },
  ];
  res.json({ jobs: jobListings });
});

// Endpoint to apply for a job using Puppeteer
app.post('/apply-job', async (req, res) => {
  const { url } = req.body;
  try {
    await applyForJob(url);
    res.send('Job application submitted successfully!');
  } catch (error) {
    res.status(500).send('Error applying for job');
  }
});

// Function to automate the job application process with Puppeteer
async function applyForJob(url) {
  const browser = await puppeteer.launch({ headless: false });  // Launch the browser
  const page = await browser.newPage();
  await page.goto(url);

  // Example of automating form submission (you may need to update these selectors based on the site you're applying to)
  await page.type('input[name="first_name"]', '');
  await page.type('input[name="last_name"]', '');
  await page.type('input[name="email"]', '');
  await page.click('button[type="submit"]');  // Submit the application

  // Wait for a few seconds before closing the browser
  await page.waitForTimeout(5000);
  await browser.close();
}

// Start the server
app.listen(port, () => {
  console.log(`Server running on port ${port}`);
});
