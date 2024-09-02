# React + Vite

This template provides a minimal setup to get React working in Vite with HMR and some ESLint rules.

Currently, two official plugins are available:

- [@vitejs/plugin-react](https://github.com/vitejs/vite-plugin-react/blob/main/packages/plugin-react/README.md) uses [Babel](https://babeljs.io/) for Fast Refresh
- [@vitejs/plugin-react-swc](https://github.com/vitejs/vite-plugin-react-swc) uses [SWC](https://swc.rs/) for Fast Refresh

## MERN-auth creation Steps :

1. Install React with JavaScript using vite
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
   - then process it

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

13. Create middleware and a function to handle errors :

    - create a middleware to handle errors in index.js file
    - create a utils folder in the api folder
    - create error.js file and create a custom error handler

14. Complete SignUp page UI :

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

16. Create Sign In API route :

    - get emai and password from the req.body (client)
    - find the user by email (validate the user)
    - find whether the password is valid
    - seperate the password from the object
    - create web token using jsonwebtoken (select the .\_id of the user)
    - put that token inside a cookie of the user and set expiry date

17. Complete the Sign In page functionality :

    - copy and paste the signup function
    - change the relevant changes such as api route, button name etc.

18. Redux toolkit :

    - install redux toolikt using: npm i @reduxjs/toolkit react-redux
    - create a folder named redux in the src of client and create a store.js file inside it
    - import redux
    - create a redux store
    - wrap main.jsx with Redux Provider and pass the store
    - create folder name user inside the redux folder and create a userSlice.js file in it
    - import CreateSlice from redux
    - Define a initial state
    - create a slice
      - give a label
      - start with earlier defined initial state
      - create reducer
      - export the reducer
    - import the reducer to signIn page
    - use useDispatch to distpach the action to reducer actions
    - read data using useSelector to read state from the store

19. Add Redux persist :

    - install redux persist in the client using: npm i redux-persist
    - create a rootReducer by combining all reducers
    - create a persitConfig object to store data in the local storage of the browser
    - create a persistReducer by passing both persistConfig and rootReducer
    - then use it as main reducer in the store
    - create and export the store as a perisitor Object
    - wrap the App component in main.jsx file with PersistGate with passing the persistor object

20. Create and Add OAuth Component :

    - create two a button component with handleGoogleClick for google signin
    - creating a provide using new GoogleAuthProvider in handleGoogleClick function
    - create a firebase project in firbase.google.com
    - install firebase
    - copy the code in firbase, create firebase.js file in src, and then past it export it
    - create an .env file in the client and save the FIREBASE api key init
    - use it in the firebase.js for api key as import.meta.env.[api key name]
    - Create a google authtentication in firebase

    - initialize a auth using getAuth and use app from firebase.js to request
    - get the result from the google using signInWithPopup in the handleGoogleClick function
    - createa a post method in the frontend to post the name, email, aand photo
    - Then dispatch data to Redux

    - Create a new route in the api/routes/auth.route.js
    - create a sign in/up function with the name "google" insdie the auth.controller.js
    - find the user using email
    - if the user is available, sign in the user
    - if not, generate a new temporary password, hash it
    - then create a new user using the data from request at google at sign in
    - save te user
    - then sign the user in

21. Update the Header component and make the profile page private :

    - update the header to show the profile image if there is a currentUser logged in using useSelector of redux
    - Create a PrivateRoute.jsx Component to make the profile private
    - init, if the currentUser is available, Outlet profile else navigate to signin
    - wrap the profile route in App.jsx with a Route and give the element attribute PrivateRoute component

22. Complete Profile Page UI :

    - create profile image
    - create a form
    - inside the form, create 3 inputes as username, email and password.
    - set their default values from data of currentUser
    - create a update button
    - outside the form, create delete account and sign out buttons

23. Upload Image Functionality :

    - create input of type File accepting only image and make it hidden
    - reference it using a useRef
    - use a callback function in the onclick to click on that ref(input) when clicked on the profile picture
    - create state to store the image
    - create a onchange, take the event and set the 0 index image of files (e.target.files[0])
      -create a useEffect to upload the image if an image is available
    - call handleFileUpload function inside the useEffect
    - create a asynchronous handleFileUpload function which take the image as the parameter

    - Create the first function to show upload progress :

      - create a storage using getStorage from firabase and pass the firbase app as the parameter
      - create a filname by combining time and file name
      - create a storageRef usig ref from firebase and pass that storage and filename as paramters
      - create a uploadTask using uploadBytesResumable from firebase and pass that storageRef and the image(state) as parameters :

      - track the progress of the file upload
        - setup a listner using uploadTask().on("state_changed",...)
        - uploadTask is the ongoing upload process
        - create a (snapshot) => function which contains information about upload`s current state
        - progress = transfered bytes / total bytes \* 100 -> to get the progress pecentage then round it and set it to a state

    - Create the second function to show if there is any error when uploading :

      - if there is an error, set an state to setError to true

    - Create the third function to call when upload is successful :

      - Once the upload is complete, this retrieves the download URL of the uploaded file
      - Update the form data (which likely includes other fields like name, email, etc.) to include the URL of the uploaded profile picture. This allows the uploaded image to be saved and used, for example, as a user's profile picture.

24. Create Update API route : - create a verifyUser.js file utils folder - import jasonWebToken and errorhandler - export verifyToken function and parse req,res,next as parameters - create a token useing req.cookies.access_token - check whether the token is avaialble, if not return an error saying that user have to login - if not, verify the token using jwt.verify and pass the token, JWT_SECRET, and a function. - parse error, user to that function and init, if error, return an error saying that token is invalid - If the token is valid, the user data (which was embedded in the token when it was created) is attached to the req object (req.user = user). This makes the user’s information available for the next middleware or route handler. - next() is called to move on to the next middleware or route handler.

    - install cookieParser and import it to the index.js
    - parse the token/cookies to backend using app.use(cookieParser())
    - Create and export updateUser function parsing req,res,next as parameters in the user.controller.js file :

      - check if the req.user.id == req.params.id, if not return an error You can update only your account!
      - insdie a try catch block, use the next(error) to showcase the error if occurs in the catch block
      - in the try block, check if user have a password, if so, hash it using bcryptjs.
      - then create a updatedUser by await find the user by ID and update method in Mongoose.
      - as parameters for the method, parse params.id, $set object containing username, email, password, profile picture of the user, and to return new document
      - $set: This is a MongoDB update operator that sets the value of specified fields. If the fields already exist, they will be updated with the new values; if they don't exist, they will be created.
      - then seperate the password from the document
      - return a response of 200 with the rest as json

    - the use router in user.route.js file to go to /update/:id then verify the token and call the updateUser function

25. Complete Update user functionality :

    - create and export reducers to for updateUserStart,success, and failure in the redux userSlice
    - in the profile page:
      - createa a onchange handler to submit form data by creating a copy of formdata when any input element is triggered. then set the form data to a state
      - Create a handle submit function to submit the form data
      - fetch the api to POST the updated form data by /api/user/update/${currentUser.\_id} API
      - show a loading state in update button
      - show a message if succesfully updated
      - show a message if error happens

26. Add Delete User functionality
    - create a new delete route in user.route.js
    - create a delete user function in the user.controller.js
    - create an asynchronous handleDelete function in the profile page (no headers or body)

27. 
