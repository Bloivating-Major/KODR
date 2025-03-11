
# Root
- Create a Folder.
- npm init -y
- install dependencies npm i express mongoose dotenv jsonwebtoken bcrypt
- Create a .gitignore file
- Change pkg.json
    - server.js
    - type modules
- Create a server.js file
    - Start Server
    - Connect to Database

# ENV
- Now we need to setup environment variables
    - create .env file in root
    - Redis Setup In Environment Variables
        - REDIS_HOST : includes the string before : in public endpoint
        - REDIS_PORT : includes the number after that colon
        - REDIS_PASSWORD : as it is

# SRC    
- Create src folder

## Config
- then create config folder in src
    - create config file in src
    - import dotenv and call it using config method
    - then add dotenv variable to config file and export it.
    - now add redis variables also in this config

## App.js
 - create app.js file.
        - import express
        - create app 
        - export app
- Now we will need logger for checking the logs messages.
    - npm i morgan
    - import morgan 
    - use morgan as middleware 
    - all of this happens in app.js
    - import [userRoutes] in app.js
    - use app.use extended true middleware in your app.js
    - also set cookies from cookie-parser

## DB
- Create a Database Now
    - create db folder in src then db file in it
    - import mongoose
    - connect to database

##  Models
- Create Models
    - modle folder in src 
    - user.model.js file 
    - create user schema
        - username
        - email
        - profileImage
        - password
    - create hash password - bcrypt
    - verify password - bcrypt
    - create token - jsonwebtoken
    - verify token - jsonwebtoken

## Routes
- Create Routes
    - src routes
        - [userRoutes]
            - import [userController]
            - import [userMiddleware]
            - [register] [userValidation] [createUserController] route post
            - [login] [userValidation] [loginUserController] route post
            - [profile] [authUser] [res.json.req.user]
            - export route


## Controller            
- Create Controllers
    - src controllers
        - import userModel from models.
        - import validationResults from express validator
        - [userController]
            - [createUserController]
                - create var errors and pass your req in it
                - check if errors are present or not
                - take data from res.body
                - here we will use express validator to validate our data.
                - npm i express-validator
                - use validationResults to validate results
            - [loginUserController]
                - create var errors and pass your req in it
                - check if any errors are there or not              
                - then generate token
                - then send response

## Services
- src services
    - [userService]
        - [createUser]
            - takes 3 parameters as username, email, password
            - create a check that if username email and password not exist then err
            - find by email and username so that we are not adding again a created user
            - hash password with userModel.hash(password)
            - create user
            - delete user
            - return user
        - [loginUser]
            - take 2 parameters email, password
            - find user on database with email
            - if not user then invalid
            - then compare password
            - if not password then invalid 
            - then delete password
    - [redisService]
        - to connect redis to mongodb install npm i ioredis
        - import ioredis
        - import config
        - create a obj from redis class and pass 
            - host
            - port
            - password
        - call the on method on obj and pass a callback to connect
        - export the obj.


## Middleware                
- Create a Middleware folder in src
    - here create a file [user.middleware.js]
        - import body from express - validator
        - **import redis from services redis.service.js**
            - create a function [registerUserValidation]
                - when you will receive username from body
                    - then check is it string
                    - is it min 3 and max 15 length
                    - is it lowercase
                    - then show erros accordingly
                - for email
                    - is it entered
                    - if not then err msg
                - for password
                    - is string
                    - with msg pass must be string
                    - length min 6
                    - if not msg must be 6 char long
            - create a function [loginUserValidation]
                - for email
                    - is it entered
                    - if not then err msg
                - for password
                    - is string
                    - with msg pass must be string
                    - length min 6
                    - if not msg must be 6 char long
            - create a function [authUser]
                - this middleware will be used frequently
                - try and catch block
                - in try
                    - get token 
                        - from headers or cookies
                    - decode your token
                        - if error then it will go in catch
                        - if not error then it will simply send you 
                            - user id 
                            - username
                            - email
                    - now find the user in redis based on id
                        - at first it won't have user
                    - then find data in userModel
                        - if you get user
                            - delete password
                            - and set user in redis        
                        - else 
                            - return unauthorized
                    - finally set req.user = user
                    - return next        


# Redis Account Creation 
- Create your free database
- then click on your database name and you will be redirected to another page
- then copy public endpoint from there
- use it in your environment variables as REDIT
- scroll down a bit in that section and copy the password of default user
- use it in environment variables



# POSTMAN
- Testing Our Application
    - In PostMan Create a New WorkSpace and in that 
        - Create a new Collection         

## Home Collection
- Home Collection
    - [BaseURL] (http://localhost:3000)  this is / route.

## User Collection                
- User Collection
    - [RegisterRoute]    
        - Body Section
            - Raw select json
                - send data for testing
    - [LoginRoute]  
        - Body Section
            - Raw select json
                - send data for testing        
    - [ProfileRoute]
        - Headers
            - Key as Authorization
            - Value as bearer_token
                