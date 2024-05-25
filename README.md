# WIKIAPI

WikiAPI is a RESTful API designed for creating and managing a wiki. This API provides an system for managing articles, as well as user management. It aims to offer a flexible platform for building collaborative wikis.

## Objectives

The aim is to offer a complete solution for building and controlling an wiki. This API enables users to generate, modify, and remove articles, view users and their roles, and monitor the revision history of articles. It was created for educational purposes to create a generic wiki system that can be used in various applications and to deal with the challenges of version control, user management, and article creation.

## Features

- CRUD operations for articles.
- User management and their roles.
- Tracking revision history of articles, including rollbacks.
- Search for articles by title, content, author, category etc.
- Monitoring performance and usage of the wiki (WIP:Still need design and implementation).

## Getting Started

You wiil find the instructions on how to set up the project on your local machine here. Then you can use the different endpoints to interact with the API.

## Installation

1. Clone the repository

```bash
git clone https://github.com/LukasG62/WikiAPI.git
```

2. Install dependencies

```bash
npm install
```

3. You can either create environment variables or modify the hardcoded values in the `config.js` file. The environment variables are:

```bash
export WIKIAPI_PORT = 3000 # Port on which the server will run
export WIKIAPI_JWT_SECRET = "WikiAPI" # Secret key for JWT
export WIKIAPI_MYSQL_HOST = "localhost" # MySQL host
export WIKIAPI_MYSQL_USER = "root" # MySQL user
export WIKIAPI_MYSQL_PASSWORD = "password" # MySQL password
export WIKIAPI_MYSQL_DATABASE = "WikiAPI" # MySQL database
```

4. Create a MySQL database and run the `wikidb.sql` file to create the necessary tables.

5. Start the server

```bash
npm start
```

## Usage

You will find the API documentation and the different endpoints in the postman collection.
TODO : Add the postman collection link here.

[![Run in Postman](https://run.pstmn.io/button.svg)](https://app.getpostman.com)

## Technologies Used

This project was built using the following technologies and libraries:

- Node.js
- Express.js
- MySQL
- JSON Web Tokens (JWT) for authentication
