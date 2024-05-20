Yellow Owl
Student management System

API Reference
Get all items
  GET http://localhost:7000/api/students
Response
`{
    "_id": "6646ed6bce3d235fc1374166",
    "name": "newStudent",
    "email": "snaveedn2322@gmail.com",
    "phone": "92834934743",
    "enrollNumber": "983243483",
    "dateOfAdmission": "2024-05-28T00:00:00.000Z",
    "__v": 0
}`
create Student
  POST http://localhost:7000/api/students/create

   
 | body               
 :------------------------- 
  {
    "name":"jhon",
    "email":"jhon123@gmail.com",
    "phone":"9393893",
    "enrollNumber":"9283427312",
    "dateOfAdmission":"2-may"
}


 | Response              
 :------------------------- 
  {
    "name": "jhon",
    "email": "jhon123@gmail.com",
    "phone": "9393893",
    "enrollNumber": "9283427312",
    "dateOfAdmission": "2001-05-01T18:30:00.000Z",
    "_id": "664ab43b51c4d4861159eba8",
    "__v": 0
}

if the email or enrollNumber is already present it will throw an error 
{
    "message": "E11000 duplicate key error collection: test.students index: email_1 dup key: { email: \"jhon123@gmail.com\" }"
}

search Student by email
  GET http://localhost:7000/api/students?search=snaveedn2322@gmail.com


 | Response              
 :------------------------- 
   `{
        "_id": "6646ed6bce3d235fc1374166",
        "name": "newStudent",
        "email": "snaveedn2322@gmail.com",
        "phone": "92834934743",
        "enrollNumber": "983243483",
        "dateOfAdmission": "2024-05-28T00:00:00.000Z",
        "__v": 0
    }`

search Student by name
http://localhost:7000/api/students?search=newStudent

 | Response              
 :------------------------- 
   `{
        "_id": "6646ed6bce3d235fc1374166",
        "name": "newStudent",
        "email": "snaveedn2322@gmail.com",
        "phone": "92834934743",
        "enrollNumber": "983243483",
        "dateOfAdmission": "2024-05-28T00:00:00.000Z",
        "__v": 0
    }`
🔗 Links
main directory : https://github.com/NAVEED476/yellow-owl-backend

##clone using below Links

git clone https://github.com/NAVEED476/yellow-owl-backend.git

Installation
Make sure You have node js installed

Clone the repository by using git clone https://github.com/NAVEED476/yellow-owl-backend.git

cd backend

npm install

npm start

Deployed Link
https://vercel.com/naveed476s-projects/yellow-owl-backend
