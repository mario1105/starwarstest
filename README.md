# Star Wars Top Trumps App 

Simple web application where the user can select between two different set of cards (People and Starships) based on the 
Star Wars Universe. Then multiple players can be chosen depending on the selected deck and finally after
submitting the form random cards would be assigned to each player and the card with the highest
score wins the battle.

Relevant 
- React JS
- GraphQL with Apollo
- React Router
- Styled Components
- Enzyme
- [Create React App](https://github.com/facebook/create-react-app)

## Notes
- There were so many issues with the testing due to I started the project with React 17 and Enzyme has so many issues
with this version. In fact, I had to drop integration tests since "mount" simply does not work. I could 
have switched to React Testing Library but I wanted to do this project in a single run because at the end
it is a test.

## Available Scripts

In the project directory, you can run:
### `yarn install`

Installs all the required libraries.

### `yarn start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.\
You will also see any lint errors in the console.

### `yarn test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `yarn build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `yarn eject`

**Note: this is a one-way operation. Once you `eject`, you can’t go back!**

If you aren’t satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you’re on your own.

You don’t have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn’t feel obligated to use this feature. However we understand that this tool wouldn’t be useful if you couldn’t customize it when you are ready for it.
