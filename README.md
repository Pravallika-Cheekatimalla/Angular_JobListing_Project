**Angular Job Listing Project**

**Overview**
The **Angular Job Listing Project** is a web application that allows users to search and apply for jobs. The project consists of a **frontend** built with Angular and a **backend** powered by Node.js and Express.

**Features**
- Job search functionality
- Apply for jobs directly through the application
- Display job listings dynamically
- Responsive UI built with Angular Material

**Technologies Used**
**Frontend (Angular)**
- Angular 16
- TypeScript
- Angular Material
- Axios (for HTTP requests)

**Backend (Node.js & Express)**
- Node.js
- Express.js
- CORS

**Installation & Setup**
**1. Clone the Repository**
git clone https://github.com/Pravallika-Cheekatimalla/Angular_JobListing_Project.git
cd Angular_JobListing_Project


**2. Install Dependencies**
**For Frontend:**
cd job-application-frontend
npm install

**For Backend:**

cd job-backend
npm install


**3. Run the Application**
**Start the Backend Server:**
cd job-backend
node app.js

**Start the Angular Frontend:**
cd job-application-frontend
npm install
ng build
ng serve

- The frontend should now be available at "http://localhost:4200/"
- The backend should be running at "http://localhost:5000/"

**API Endpoints (Backend)**
| Method | Endpoint            | Description          |
|--------|--------------------|----------------------|
| GET    | /jobs              | Fetch all jobs      |
| POST   | /apply-job         | Apply for a job     |



**Contributing**
Contributions are welcome! To contribute:
1. Fork the repository
2. Create a new branch (`git checkout -b feature-branch`)
3. Commit changes (`git commit -m "Added new feature"`)
4. Push to the branch (`git push origin feature-branch`)
5. Open a Pull Request



