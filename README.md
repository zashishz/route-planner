This project contains front-end + backend code as well.

Add .env file to routeplanner-FE folder with following values:
```
REACT_APP_BASE_URL='http://localhost:8080/'
REACT_APP_GOOGLE_API_KEY='XXXXXXXXXXXXXXXXXXXXXXXXX'
```

The environment variables are embedded during the build time. Since Create React App produces a static HTML/CSS/JS bundle, it can’t possibly read them at runtime.
Please run `npm run build` to access .env keys

To configure for first time

- cd backend && npm install && npm start

 This will spin up backend

- navigate to routeplanner-FE folder and

```
npm install && npm start
```

This will spin up frontend.

### `npm test`

Launches the test runner in the interactive watch mode.<br>

### `npm run build`

Builds the app for production to the `build` folder.<br>
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br>