# Features
- Login/signup 
  - sign In / sign up form
  - redirect to browse page 
- Browse (after authentication)
  - Header 
  - Main Movie
   - Trailer in bg
   - Title & Description
   - Moviesuggestions
     - MovieLists * N
 - Netflix GPT
  - Search Bar
  - Movie Suggestions

# use formik library to create big forms 

# steps of how project created 
1.  Lets crete a new component Login.js
2.  Crete Body,Browse and Header component   
3.  Now my body will contain Login component in it
4.  U can go to the browse page if user is authenticated with details 
5.  Used react-router-dom to route the paths 
6.  Lets start to build login page so lets build the header first and add header into login page 
7.  Added bg image to login page
8.  Included netflix logo
9.  Now build login form using state variable isSignInForm for rendering sign in/up page and button toggleSignInForm
10. Created form and used conditional rendering for sign in and sign up and also added more input fields for new user sign up
11. Now we will do form validation and learn useRef from creating a button named handleButtonClick and making saperate file for validating data 
12. we have used regex for validation of data like email,password,name,ph.no and created reference using useref for data gathering
13. handled errors if data is not valid in message using state variable erroMessage 
14. given the reason of using useref - in short we dont wanna re-render component while typing and render while button is clicked 
15. Authentication process initializing here
16. we need backend for authentication so we will use firebase and create new project in firebase 
- added firebase.js from firebase SDK and added auth in it bcz it would used in each authenticating file
- enable authentication in firebase keep close your extension
17. now for deployment our application install firebase CLI - npm install -g firebase-tools
18. firebase login
19. firebase init
20. firebase deploy 
21. Deployed application on firebase
- Time for Authentication
- used firebase documentation for code of authentication use web code inside documentation
22. create sign up user account
23. create sign in page
- now firebase will handle the error if the user is not sign up
24. then done authentication using firebase code 
25. then creted redux store to display user login details to multiple page 
26. we will use onauthstatechange over here to change if user login or sign up to verify
27. if the user sign in/up/out the onauthstatechanged API will be called
28. we will use signout API from the firebase and use navigate to redirect to paths 
29. updated the users profile API
30. we have done sign in/out/up functinality with authentication using firebase 
31. added conditional usericon in header for sign out functionality

2nd lecture
32. if we write /browse in url we will redirect to the browse page which is foolish 
33. we will useEffect of body to header component bcz header is present all over my app
34. we also have to put it inside routerprovider so it would work there , so our header is inside the routes so navigate function will work over there 