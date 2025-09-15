 ### How It Works

User registers → data is stored in MongoDB with hashed password.

User logs in → credentials verified → JWT generated.

User makes requests → JWT is verified by middleware.

Protected route returns user information extracted from the token.

## Registration: Create a new user account with a unique email.

Password Hashing: Passwords are securely hashed before being stored.

Login: Verify credentials and generate a JWT.

Token Authentication: Middleware validates JWTs for protected routes.

Get User Info: Retrieve user details directly from the token.

MVC Pattern: Clear separation of responsibilities:

Models → define database structure

Controllers → handle business logic

Routes → manage API endpoints

Middlewares → process requests before controllers

## forgot password
once you for your password dont worry if you click forgot password the link is send y0our email

you want reset you password then you click the link ,the reset page is appear

then you put passwprd and submit then you are logged and the password is store at db

## Postman Documentation

The API comes with a Postman collection that includes:

Example request bodies for registration and login

Example headers for authentication

Example responses (success and error cases)