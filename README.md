# Pragati

<img src="https://github.com/hokageCV/Planner/blob/master/client/public/homePage.png" style="width:900px; height:570px;" >

## Introduction
Pragati is a comprehensive educational platform that brings together all the resources that students need to succeed in school and college. With features like learning resources, a to-do list, a chat feature, and a bookmark system, Pragati makes it easier for students to stay organized and motivated.

## Features
- Learning Resources
    Pragati offers a wealth of educational resources, including study materials, tutorials, and practice problems. These resources are sourced from reputable sources and are constantly updated to provide the most relevant information.
    They can also add their own resources, making it easy to personalize their learning experience
- To-Do List
    The to-do list makes it easy for students to keep track of their assignments and tasks
- Chat Feature
     allows students to connect with their peers and educators. They can ask questions, share resources, and collaborate on projects, all within the platform
- Bookmark System
    bookmark system allows students to save their favourite resources for quick and easy access later.
---
## User Authentication API

### Introduction
This API allows users to sign up and log in to access protected resources on your website. It includes two endpoints: `/user/signup` and `/user/login`.

### Endpoints
#### `POST BaseURL/user/signup`
This endpoint is used for user registration. It requires the following parameters in the request body:

- `firstName`: The first name of the user. (Required)
- `lastName`: The last name of the user. (Required)
- `email`: The email address of the user. (Required)
- `password`: The password of the user. (Required)
- `isSchoolStudent`: A boolean indicating whether the user is a school student or not. (Optional)

Example Request Body:
```
{
    "firstName": "Levi",
    "lastName": "Ackerman",
    "email": "levi@scoutregiment.org",
    "password": "password123",
    "isSchoolStudent": false
}
```
Upon successful registration, the API returns a JSON object with a token that can be used for future API calls.
```
{
    "user": {
        "name": "Levi Ackerman",
        "email": "levi@scoutregiment.org",
        "password": "$2a$10$mHLLM/Wdu.e1k4GpbT0tD.tzeIaZlLzBwpVy5JBVs9/iRAVVshUTy",
        "isSchoolStudent": false,
        "_id": "63e8c3ee5"
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U4YzNlZTUyOTY4NWVmOWNkNzRiZTUiLCJlbWFpbCI6ImxldmlAc2NvdXRyZWdpbWVudC5vcmciLCJpYXQiOjE2NzYxOTg4OTQsImV4cCI6MTY3NjI4NTI5NH0.9tFwOjJTLKbFWgV8blqTkbNC53gWr0WgKfq9ljkJftE"
}
```

#### `POST BaseURL/user/login`
This endpoint is used for user login. It requires the following parameters in the request body:

- `email`: The email address of the user. (Required)
- `password`: The password of the user. (Required)

Example Request Body:
```
{
    "email": "levi@scoutregiment.org",
    "password": "password123"
}
```
Upon successful login, the API returns a JSON object with a token that can be used for future API calls.

Example Response:
```
{
    "user": {
        "_id": "63e8c3ee5",
        "name": "Levi Ackerman",
        "email": "levi@scoutregiment.org",
        "password": "$2a$10$mHLLM/Wdu.e1k4GpbT0tD.tzeIaZlLzBwpVy5JBVs9/iRAVVshUTy",
        "isSchoolStudent": false
    },
    "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2M2U4YzNlZTUyOTY4NWVmOWNkNzRiZTUiLCJlbWFpbCI6ImxldmlAc2NvdXRyZWdpbWVudC5vcmciLCJpYXQiOjE2NzYxOTkwMTYsImV4cCI6MTY3NjI4NTQxNn0.7m98q9YjkBhA3oG0l6uNH_H1qebNWRLvlE68mwClkgw"
}
```


---
