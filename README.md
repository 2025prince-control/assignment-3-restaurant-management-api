# Restaurant Management API

A RESTful backend API built using **Node.js, Express.js, and MongoDB** for managing restaurants, menu items, and user authentication.

## Features

* User registration and login
* Password hashing using bcrypt
* JWT-based authentication
* Protected API routes
* Restaurant CRUD operations
* Menu item CRUD operations
* Get menu items by restaurant
* Get top-rated restaurants
* MongoDB database integration using Mongoose
* Authentication middleware
* Error handling middleware
* Request logging middleware

## Tech Stack

* **Runtime:** Node.js
* **Framework:** Express.js
* **Database:** MongoDB Atlas
* **ODM:** Mongoose
* **Authentication:** JSON Web Token (JWT)
* **Password Security:** bcrypt
* **API Testing:** Postman

## Project Structure

```text
backend/
│
├── config/
│   └── db.js
│
├── controllers/
│   ├── authController.js
│   ├── menuController.js
│   └── restaurantController.js
│
├── middleware/
│   ├── authMiddleware.js
│   ├── errorHandler.js
│   └── logger.js
│
├── models/
│   ├── MenuItem.js
│   ├── Restaurant.js
│   └── User.js
│
├── route/
│   ├── authRoutes.js
│   ├── menuRoutes.js
│   └── restaurantRoutes.js
│
├── .gitignore
├── package.json
├── package-lock.json
└── server.js
```

## Installation

### 1. Clone the repository

```bash
git clone <your-github-repository-url>
cd assignment-3-restaurant-management-api
```

### 2. Install dependencies

```bash
npm install
```

### 3. Configure MongoDB

The application uses **MongoDB Atlas** as the database.

Configure your MongoDB connection string in the database configuration.

> For production deployment, database credentials and JWT secrets should be stored using environment variables and should not be committed to GitHub.

### 4. Start the server

```bash
node server.js
```

The API will run on the configured port.

## Authentication

The API uses **JWT (JSON Web Token)** for authentication.

Users can register and login using the authentication endpoints. After successful login, a JWT token is returned.

For protected routes, send the token in the request header:

```text
Authorization: Bearer <your-token>
```

## API Endpoints

### Authentication

| Method | Endpoint         | Description            | Authentication |
| ------ | ---------------- | ---------------------- | -------------- |
| POST   | `/auth/register` | Register a new user    | No             |
| POST   | `/auth/login`    | Login an existing user | No             |

### Restaurants

| Method | Endpoint           | Description               | Authentication |
| ------ | ------------------ | ------------------------- | -------------- |
| GET    | `/restaurants`     | Get all restaurants       | Yes            |
| POST   | `/restaurants`     | Create a restaurant       | Yes            |
| GET    | `/restaurants/top` | Get top-rated restaurants | Yes            |
| GET    | `/restaurants/:id` | Get restaurant by ID      | Yes            |
| PUT    | `/restaurants/:id` | Update restaurant         | Yes            |
| DELETE | `/restaurants/:id` | Delete restaurant         | Yes            |

### Menu Items

| Method | Endpoint                | Description                         | Authentication |
| ------ | ----------------------- | ----------------------------------- | -------------- |
| GET    | `/restaurants/:id/menu` | Get menu items of a restaurant      | Yes            |
| POST   | `/restaurants/:id/menu` | Create a menu item for a restaurant | Yes            |
| GET    | `/menu/:id`             | Get menu item by ID                 | Yes            |
| PUT    | `/menu/:id`             | Update menu item                    | Yes            |
| DELETE | `/menu/:id`             | Delete menu item                    | Yes            |

## Restaurant Data Model

A restaurant contains the following fields:

```json
{
  "name": "Tasty Bites",
  "city": "Mumbai",
  "address": "123 Main Street",
  "cuisine": "Italian",
  "rating": 4.5
}
```

### Restaurant Fields

* `name` - Name of the restaurant
* `city` - City where the restaurant is located
* `address` - Restaurant address
* `cuisine` - Type of cuisine
* `rating` - Restaurant rating between 0 and 5

## Menu Item Data Model

A menu item contains the following fields:

```json
{
  "name": "Margherita Pizza",
  "price": 299,
  "isAvailable": true
}
```

Each menu item is associated with a restaurant using the restaurant's MongoDB ObjectId.

### Menu Item Fields

* `restaurantId` - Reference to the Restaurant document
* `name` - Name of the menu item
* `price` - Price of the item
* `isAvailable` - Availability status of the item

## User Data Model

A user contains:

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
```

Passwords are hashed using **bcrypt** before being stored in the database.

## Example Requests

### Register User

**POST `/auth/register`**

```json
{
  "username": "john_doe",
  "email": "john@example.com",
  "password": "password123"
}
```

### Login User

**POST `/auth/login`**

```json
{
  "email": "john@example.com",
  "password": "password123"
}
```

A successful login returns a JWT token that can be used to access protected routes.

### Create Restaurant

**POST `/restaurants`**

Header:

```text
Authorization: Bearer <your-token>
```

Body:

```json
{
  "name": "Tasty Bites",
  "city": "Mumbai",
  "address": "123 Main Street",
  "cuisine": "Italian",
  "rating": 4.5
}
```

## Middleware

The project includes the following middleware:

### Authentication Middleware

`authMiddleware.js`

* Verifies the JWT token
* Protects restricted API routes
* Allows authenticated users to access protected resources

### Logger Middleware

`logger.js`

* Logs incoming API requests
* Helps in monitoring and debugging the application

### Error Handler Middleware

`errorHandler.js`

* Handles application errors
* Sends appropriate error responses to the client

## Database

The application uses **MongoDB Atlas** with **Mongoose**.

The main collections/models are:

* `User`
* `Restaurant`
* `MenuItem`

The `MenuItem` model contains a reference to the `Restaurant` model using MongoDB's `ObjectId`.

This creates a relationship between restaurants and their menu items.

## Testing

The API can be tested using **Postman**.

Recommended testing sequence:

1. Register a user
2. Login and receive JWT token
3. Add the JWT token to the Authorization header
4. Create a restaurant
5. Get restaurants
6. Update a restaurant
7. Add menu items
8. Get restaurant menu
9. Update menu items
10. Delete menu items or restaurants

## Security

The application implements:

* Password hashing with bcrypt
* JWT authentication
* Protected API routes
* MongoDB database authentication

Sensitive information such as database credentials and JWT secrets should be stored in environment variables and should not be committed to the repository.

## License

ISC

DEPLOY LINK: https://assignment-3-restaurant-management-api-h0to.onrender.com
