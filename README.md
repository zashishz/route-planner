## Voyage Planner

####
Plots route based on start and drop point.
Uses google maps with react.

This project contains front-end + backend code as well.

Add .env file to routeplanner root folder with following values:

```
REACT_APP_BASE_URL='http://localhost:8080/'
REACT_APP_GOOGLE_API_KEY='XXXXXXXXXXXXXXXXXXXXXXXXX'
```

make sure to setup .env file first and then start server.

To configure for first time

```
npm run install-all
```

This will install all dependencies for frontend and backend.

```
npm run start-all
```

This will spin up frontend and backend dev servers.

```
npm test
```
Launches the test runner in the interactive watch mode.<br>

```
npm run build
```
Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>
