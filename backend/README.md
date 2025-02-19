# User Registration Endpoint

## POST /users/register

### Description
This endpoint is used to register a new user. It requires the user's first name, last name, email, and password.

### Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A string representing the user's email address (required)
- `password`: A string with a minimum length of 5 characters (required)

Example:
```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**: A JSON object containing the authentication token and user details.

Example:
```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**: A JSON object containing an array of validation errors.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 5 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

# User Login Endpoint

## POST /users/login

### Description
This endpoint is used to log in an existing user. It requires the user's email and password.

### Request Body
The request body should be a JSON object containing the following fields:
- `email`: A string representing the user's email address (required)
- `password`: A string with a minimum length of 5 characters (required)

Example:
```json
{
  "email": "john.doe@example.com",
  "password": "password123"
}
```

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**: A JSON object containing the authentication token and user details.

Example:
```json
{
  "token": "your_jwt_token",
  "user": {
    "_id": "user_id",
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com"
  }
}
```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**: A JSON object containing an array of validation errors.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 5 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Authentication Errors
- **Status Code**: 401 Unauthorized
- **Response Body**: A JSON object containing an error message.

Example:
```json
{
  "message": "Invalid email or password"
}
```

# User Profile Endpoint

## GET /users/profile

### Description
Fetch the profile information of the authenticated user.

### Request Parameters
- `Authorization` (header): Bearer token for authentication.

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**: A JSON object containing the user's profile information.

Example:
```json
{
  "id": "user123",
  "name": "John Doe",
  "email": "john.doe@example.com",
  "phone": "+1234567890",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

#### Unauthorized
- **Status Code**: 401 Unauthorized
- **Response Body**: A JSON object containing an error message.

Example:
```json
{
  "message": "Unauthorized"
}
```

# User Logout Endpoint

## POST /users/logout

### Description
Logs out the authenticated user.
Logout the current user and blacklist the token provided in cookie or headers

### Request Parameters
- `Authorization` (header): Bearer token for authentication.

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**: A JSON object containing a success message.

Example:
```json
{
  "message": "Successfully logged out"
}
```

#### Unauthorized
- **Status Code**: 401 Unauthorized
- **Response Body**: A JSON object containing an error message.

Example:
```json
{
  "message": "Unauthorized"
}
```

# Captain Registration Endpoint

## POST /captains/register

### Description
This endpoint is used to register a new captain. It requires the captain's first name, last name, email, password, and license number.

### Request Body
The request body should be a JSON object containing the following fields:
- `fullname`: An object containing:
  - `firstname`: A string with a minimum length of 3 characters (required)
  - `lastname`: A string with a minimum length of 3 characters (optional)
- `email`: A string representing the captain's email address (required)
- `password`: A string with a minimum length of 5 characters (required)
- `licenseNumber`: A string representing the captain's license number (required)
- `vehical`: An object containing:
  - `color`: A string with a minimum length of 3 characters (required)
  - `capacity`: A string with a minimum length of 1 character (required)
  - `plate`: A string with a minimum length of 3 characters (required)
  - `vehicalType`: A string that must be one of ['car', 'motorcycle', 'auto'] (required)

Example:
```json
{
  "fullname": {
    "firstname": "Jane", // minimum length 3 characters
    "lastname": "Doe" // optional, minimum length 3 characters
  },
  "email": "jane.doe@example.com", // required, must be a valid email
  "password": "password123", // required, minimum length 5 characters
  "licenseNumber": "ABC123456", // required
  "vehical": {
    "color": "Red", // required, minimum length 3 characters
    "capacity": "4", // required, minimum length 1 character
    "plate": "XYZ123", // required, minimum length 3 characters
    "vehicalType": "car" // required, must be one of ['car', 'motorcycle', 'auto']
  }
}
```

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**: A JSON object containing the authentication token and captain details.

Example:
```json
{
  "token": "your_jwt_token",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "licenseNumber": "ABC123456",
    "vehical": {
      "color": "Red",
      "capacity": "4",
      "plate": "XYZ123",
      "vehicalType": "car"
    }
  }
}
```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**: A JSON object containing an array of validation errors.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "First name must be at least 3 characters long",
      "param": "fullname.firstname",
      "location": "body"
    },
    {
      "msg": "Password must be at least 5 characters long",
      "param": "password",
      "location": "body"
    },
    {
      "msg": "License number is required",
      "param": "licenseNumber",
      "location": "body"
    },
    {
      "msg": "Color must be at least 3 characters long",
      "param": "vehical.color",
      "location": "body"
    },
    {
      "msg": "Capacity must be at least 1 character long",
      "param": "vehical.capacity",
      "location": "body"
    },
    {
      "msg": "Plate must be at least 3 characters long",
      "param": "vehical.plate",
      "location": "body"
    },
    {
      "msg": "Invalid vehical type",
      "param": "vehical.vehicalType",
      "location": "body"
    }
  ]
}
```

# Captain Login Endpoint

## POST /captains/login

### Description
This endpoint is used to log in an existing captain. It requires the captain's email and password.

### Request Body
The request body should be a JSON object containing the following fields:
- `email`: A string representing the captain's email address (required)
- `password`: A string with a minimum length of 5 characters (required)

Example:
```json
{
  "email": "jane.doe@example.com", // required, must be a valid email
  "password": "password123" // required, minimum length 5 characters
}
```

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**: A JSON object containing the authentication token and captain details.

Example:
```json
{
  "token": "your_jwt_token",
  "captain": {
    "_id": "captain_id",
    "fullname": {
      "firstname": "Jane",
      "lastname": "Doe"
    },
    "email": "jane.doe@example.com",
    "licenseNumber": "ABC123456",
    "vehical": {
      "color": "Red",
      "capacity": "4",
      "plate": "XYZ123",
      "vehicalType": "car"
    }
  }
}
```

#### Validation Errors
- **Status Code**: 400 Bad Request
- **Response Body**: A JSON object containing an array of validation errors.

Example:
```json
{
  "errors": [
    {
      "msg": "Invalid Email",
      "param": "email",
      "location": "body"
    },
    {
      "msg": "Password must be at least 5 characters long",
      "param": "password",
      "location": "body"
    }
  ]
}
```

#### Authentication Errors
- **Status Code**: 401 Unauthorized
- **Response Body**: A JSON object containing an error message.

Example:
```json
{
  "message": "Invalid email or password"
}
```

# Captain Profile Endpoint

## GET /captains/profile

### Description
Fetch the profile information of the authenticated captain.

### Request Parameters
- `Authorization` (header): Bearer token for authentication.

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**: A JSON object containing the captain's profile information.

Example:
```json
{
  "id": "captain123",
  "name": "Jane Doe",
  "email": "jane.doe@example.com",
  "licenseNumber": "ABC123456",
  "phone": "+1234567890",
  "createdAt": "2023-01-01T00:00:00.000Z",
  "updatedAt": "2023-01-01T00:00:00.000Z"
}
```

#### Unauthorized
- **Status Code**: 401 Unauthorized
- **Response Body**: A JSON object containing an error message.

Example:
```json
{
  "message": "Unauthorized"
}
```

# Captain Logout Endpoint

## POST /captains/logout

### Description
Logs out the authenticated captain.
Logout the current captain and blacklist the token provided in cookie or headers

### Request Parameters
- `Authorization` (header): Bearer token for authentication.

### Responses

#### Success
- **Status Code**: 200 OK
- **Response Body**: A JSON object containing a success message.

Example:
```json
{
  "message": "Successfully logged out"
}
```

#### Unauthorized
- **Status Code**: 401 Unauthorized
- **Response Body**: A JSON object containing an error message.

Example:
```json
{
  "message": "Unauthorized"
}
```
