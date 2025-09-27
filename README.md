Employee CRUD Application (Java + Spring Boot + SQLite + React)

A full-stack CRUD application to manage employees.  
The backend is built with Spring Boot + SQLite, and the frontend is built with React.

Features
- Full CRUD (Create, Read, Update, Delete) flow
- REST API with Spring Boot
- SQLite database persistence
- React frontend with forms, table, and edit/delete actions
- Axios for API communication


 Project Structure


employee-crud/
│── backend/       # Java Spring Boot + SQLite
│── frontend/      # React frontend
│── README.md
│── .gitignore

 ▶️ Running the Project

 1️⃣ Clone the repo
bash
git clone https://github.com/YOUR-USERNAME/employee-crud.git
cd employee-crud


2️⃣ Backend Setup (Spring Boot + SQLite)

1. Go to backend folder:

bash
   cd backend
  
2. Build and run:

   bash
   mvn spring-boot:run

3. Backend will run on:

   http://localhost:8080
   

📌 API Endpoints:

| Method | Endpoint            | Description         |
| ------ | ------------------- | ------------------- |
| GET    | /api/employees      | Get all employees   |
| GET    | /api/employees/{id} | Get employee by ID  |
| POST   | /api/employees      | Create new employee |
| PUT    | /api/employees/{id} | Update employee     |
| DELETE | /api/employees/{id} | Delete employee     |



Frontend Setup (React)

1. Open another terminal, then:

bash
   cd frontend
   npm install
   npm run dev
   
2. Frontend will run on:
3.    
   http://localhost:5173

  Example JSON for API

`json
{
  "name": "Alice Johnson",
  "email": "alice@example.com",
  "position": "Software Engineer"
}
 Integration

* The frontend calls the backend API (`http://localhost:8080/api/employees`) using Axios.
* Make sure backend is running before starting frontend.



GitHub Deployment

bash
git init
git add .
git commit -m "Full Stack Employee CRUD App"
git branch -M main
git remote add origin https://github.com/YOUR-USERNAME/employee-crud.git
git push -u origin main

