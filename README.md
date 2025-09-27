Employee CRUD Application (Java + Spring Boot + SQLite)

A simple CRUD (Create, Read, Update, Delete) application to manage employees.



Features
- REST API with Spring Boot
- SQLite database for persistence
- CRUD operations: Create, Read, Update, Delete employees
- Ready for frontend integration (React, Angular, etc.)

 Tech Stack
- Java 17+
- Spring Boot
- Spring Data JPA
- SQLite

 API Endpoints

| Method | Endpoint               | Description              |
|--------|------------------------|--------------------------|
| GET    | /api/employees         | Get all employees       |
| GET    | /api/employees/{id}    | Get employee by ID      |
| POST   | /api/employees         | Create new employee     |
| PUT    | /api/employees/{id}    | Update employee         |
| DELETE | /api/employees/{id}    | Delete employee         |

---

 Running the App

1. Clone the repo:
   ```bash
   git clone https://github.com/your-username/employee-crud.git
   cd employee-crud/backend
