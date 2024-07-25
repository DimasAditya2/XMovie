### Endpoints :

&nbsp;

### 1. POST /register

Request:

- body:

```json
{
        "username": "string",
        "email": "string",
        "role": "string",
        "phoneNumber": "string",
        "addres": "string"
    }
}
```

_Response (201 - Created)_

```json
{
  "message": "SUCCESS CREATE NEW USER",
  "newUser": {
    "username": "user1",
    "email": "user1@gmail.com",
    "role": "Staff",
    "phoneNumber": "085256672233",
    "addres": "Java"
  }
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "email is required"
}
OR
{
  "message": "Invalid email format"
}
OR
{
  "message": "email must be unique"
}
OR
{
  "message": "username is required"
}
OR
{
  "message": "Password is required"
}
```

&nbsp;

### 2. POST /login

Request:

- body:

```json
{
  "email": "string",
  "password": "string"
}
```

_Response (200 - OK)_

```json
{
  "access_token": "string"
}
```

_Response (400 - Bad Request)_

```json
{
  "message": "Email is required"
}
OR
{
  "message": "Password is required"
}
```

_Response (401 - Unauthorized)_

```json
{
  "message": "Invalid email/password"
}
```

&nbsp;

### 3. GET /

Description:

- Get all Movies from database

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200 - OK)_

```json
[
  {
    "title": "string",
    "description": "string",
    "rating": "integer",
  }
  ...,
]
```

_Response (500 - Internal Server error)_

```json
{
  "message": "Internal Server error"
}
```

&nbsp;

### 4. PUT /movies/detail/:id

Description:

- Detail Movie by id

Request:

- headers:

```json
{
  "access_token": "string"
}
```

_Response (200)_

```json
{
        "title": "string",
        "releaseDate": "string",
        "rating": "string",
        "description": "string",
    }
}
```

- params:

```json
{
  "id": "integer (required)"
}
```

_Response (500 - Internal Server error)_

```json
{
  "message": "Internal Server error"
}
```

&nbsp;

### 5. GET /movies

Request:

- headers:

````json
{
  "access_token": "string"
}

_Response (200 - OK)_

```json
[
  {
    "title": "string",
    "description": "string",
    "rating": "integer",
  }
  ...,
]
```

&nbsp;

### 6. GET /chat
Description:


Request:

- headers:

```json
{
  "access_token": "string"
}
```



_Response (200 - OK)_

```json
{
  "message": "string"
}
```
