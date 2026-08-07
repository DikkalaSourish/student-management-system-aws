# 🎓 Student Management System using AWS

A serverless **Student Management System** developed using **HTML, CSS, JavaScript**, and **Amazon Web Services (AWS)**. This project demonstrates CRUD (Create, Read, Update, Delete) operations using AWS Lambda, Amazon API Gateway, and Amazon DynamoDB, with the frontend hosted on Amazon S3.

---

## 🚀 Live Demo

**Website:**  
(Add your Amazon S3 website URL here)

Example:
http://your-bucket-name.s3-website.ap-south-1.amazonaws.com

---

## 📌 Features

- ➕ Add Student
- 📋 View All Students
- ✏️ Update Student Information
- 🗑️ Delete Student
- ☁️ Serverless Architecture using AWS
- 🌐 Hosted using Amazon S3

---

## 🛠️ Technologies Used

### Frontend
- HTML5
- CSS3
- JavaScript

### AWS Services
- Amazon S3
- AWS Lambda
- Amazon API Gateway
- Amazon DynamoDB
- AWS Identity and Access Management (IAM)
- Amazon CloudWatch

---

## 📂 Project Structure

```
student-management-system-aws/
│
├── frontend/
│   ├── index.html
│   ├── style.css
│   ├── script.js
│   └── aws.js
│
├── lambda/
│   ├── addStudent/
│   │   └── index.js
│   ├── getStudents/
│   │   └── index.js
│   ├── updateStudent/
│   │   └── index.js
│   └── deleteStudent/
│       └── index.js
│
├── README.md
└── .gitignore
```

---

## ⚙️ AWS Architecture

```
                User
                  │
                  ▼
        Amazon S3 Static Website
                  │
                  ▼
         Amazon API Gateway
      ┌────────┬────────┬────────┬────────┐
      │        │        │        │
      ▼        ▼        ▼        ▼
 AddStudent  GetStudents UpdateStudent DeleteStudent
   Lambda      Lambda      Lambda       Lambda
      │          │           │            │
      └──────────┴───────────┴────────────┘
                     │
                     ▼
              Amazon DynamoDB
```

---

## 📋 Student Information Stored

- Student ID
- Name
- Email
- Phone Number
- Department
- Year
- CGPA
- Address

---

## ▶️ How to Run

1. Clone the repository

```bash
git clone https://github.com/YOUR_USERNAME/student-management-system-aws.git
```

2. Open the `frontend` folder.

3. Update the API Gateway URL in `aws.js` if required.

4. Open `index.html` in your browser or host the frontend using Amazon S3 Static Website Hosting.

---

## 🎯 Learning Outcomes

- Developed a complete CRUD application using AWS services.
- Learned Serverless Application Development.
- Integrated Amazon API Gateway with AWS Lambda.
- Stored and managed data using Amazon DynamoDB.
- Hosted a static website using Amazon S3.
- Configured IAM roles and CORS settings.
- Implemented REST APIs for frontend-backend communication.

---

## 👨‍💻 Author

**Sourish Dikkala**

B.Tech Computer Science and Engineering (Artificial Intelligence & Machine Learning)

---

## 📄 License

This project is intended for educational and learning purposes.
