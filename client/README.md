# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh


MERN-auth creation Steps :
-------------------------

1. Install React with JavaScript
2. Install Tailwind CSS

3. Add Routes and Create Pages :
    - Install react-router-dom
4. create a Header Component

5. Create a Server and Run the Server :
    - create a package.json in the root using : npm init -y
    - install express using : npm i express

6. create api folder for backend in the root :
    - create express app
    - listen it to a port number

7. install Node in the root using : npm nodemon
8. Create a MongoDB cluster

9. Connect to the MongoDB database :
    - use MongoDB cluster URI
    -  then process it

10. Create and Add user model :
  - use Schema in mongoose to create a model for the user

11. Create a test API route :
    - create routes folder inside the api folder
    - create user.route.js file
    - create test api export it
    - import it in index.js in api
    - create a controllers folder
    - create user.controller.js file and move the api function to it then export it
    - import the function in user.route.js file and use it as api route.

 12. Create Sign Up and API route :
    - create a seperate route file for auth
    - create a POST method and export the router
    - import it in the index.js in api folder
    - create the function/method in a seperate controller file named auth.controller.js
        - destructure the date from req.body
        - hash the password using bcryptjs
        - create a new user model
        - save it in the mongoDB

13. Create middleware and a function to handle errors
    - create a middleware to handle errors in index.js file
    - create a utils folder in the api folder
    - create error.js file and create a custom error handler

14. Complete SignUp page UI
    - Create a form 

15. Complete SignUp page functionility : 
    - Create a onChange handler to set data in a state in a form of object
    - Use it in each input inside the form
    - create a proxy to forward the port when the uri reaches api/
    - create a onSubmit handler
        - use method post
        - and for content-ype in headers, user application/json
        - stringify the formdata into object type
        - show error using state

16. Create Sign In API route
    - get emai and password from the req.body (client)
    - find the user by email (validate the user)
    - find whether the password is valid
    - seperate the password from the object
    - create web token using jsonwebtoken (select the ._id of the user)
    - put that token inside a cookie of the user and set expiry date

17. Complete the Sign In page functionality