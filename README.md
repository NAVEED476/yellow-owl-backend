

# Yellow Owl Student Management System

## API Reference

### Get all students
**Endpoint:**
```
GET http://localhost:7000/api/students
```
**Response:**
```json
{
    "_id": "6646ed6bce3d235fc1374166",
    "name": "newStudent",
    "email": "snaveedn2322@gmail.com",
    "phone": "92834934743",
    "enrollNumber": "983243483",
    "dateOfAdmission": "2024-05-28T00:00:00.000Z",
    "__v": 0
}
```

### Create a Student
**Endpoint:**
```
POST http://localhost:7000/api/students/create
```
**Body:**
```json
{
    "name": "jhon",
    "email": "jhon123@gmail.com",
    "phone": "9393893",
    "enrollNumber": "9283427312",
    "dateOfAdmission": "2-may"
}
```
**Response:**
```json
{
    "name": "jhon",
    "email": "jhon123@gmail.com",
    "phone": "9393893",
    "enrollNumber": "9283427312",
    "dateOfAdmission": "2001-05-01T18:30:00.000Z",
    "_id": "664ab43b51c4d4861159eba8",
    "__v": 0
}
```
If the email or enrollNumber is already present, it will throw an error:
```json
{
    "message": "E11000 duplicate key error collection: test.students index: email_1 dup key: { email: \"jhon123@gmail.com\" }"
}
```

### Search Student by Email
**Endpoint:**
```
GET http://localhost:7000/api/students?search=snaveedn2322@gmail.com
```
**Response:**
```json
{
    "_id": "6646ed6bce3d235fc1374166",
    "name": "newStudent",
    "email": "snaveedn2322@gmail.com",
    "phone": "92834934743",
    "enrollNumber": "983243483",
    "dateOfAdmission": "2024-05-28T00:00:00.000Z",
    "__v": 0
}
```

### Search Student by Name
**Endpoint:**
```
GET http://localhost:7000/api/students?search=newStudent
```
**Response:**
```json
{
    "_id": "6646ed6bce3d235fc1374166",
    "name": "newStudent",
    "email": "snaveedn2322@gmail.com",
    "phone": "92834934743",
    "enrollNumber": "983243483",
    "dateOfAdmission": "2024-05-28T00:00:00.000Z",
    "__v": 0
}
```

## Links
**Main Directory:**
[GitHub Repository](https://github.com/NAVEED476/yellow-owl-backend)

**Clone Repository:**
```
git clone https://github.com/NAVEED476/yellow-owl-backend.git
```

**Deployed Link:**
[Yellow Owl Backend on Vercel](https://vercel.com/naveed476s-projects/yellow-owl-backend)

## Installation
Make sure you have Node.js installed.

1. Clone the repository:
    ```
    git clone https://github.com/NAVEED476/yellow-owl-backend.git
    ```
2. Navigate to the backend directory:
    ```
    cd backend
    ```
3. Install the dependencies:
    ```
    npm install
    ```
4. Start the application:
    ```
    npm start
    ```

---
