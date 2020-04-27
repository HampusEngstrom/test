### 10pt has been done in this sprint

2pt [UX] Responsive design
1pt [UX] Fancy animations
1pt [FUNCT] Sort by name and office
1pt [FUNCT] Filter by name and office
1pt [FUNCT] Filter by contact links
2pt [FUNCT] Infinity scroll
2pt [TEST] Unit tests

[Unit tests]: It is important to have testing included, it is an easy way of decreasing the number of issues.
[Infinity scroll]: Due to performance issues loading 200 images at once.
[Sort and filtering]: To increase the level of complexity in the application.
[Responsive design]: Smaller devices are often used and should be supported.
[Fancy animations]: Preloaders for the whole app and the profile images, because it gives a nice feeling to it.

# Design

I have gone for a separation between model and view, not a technically correct MVC but more like a MVVM.

![Overview]("./overview.jpg")

### View & View Controller

We have some components which is interactable in the filter area, input field, buttons, sort etc. a view for each functionality. They are all just collecting user input for the parent, class FilterAndSort.
Then we have the main view, the list of items/colleagues, it only shows the list that it is provided with. It is not interactable. Easily replaced by a new view, like for example in the task "Enable switch between a grid and a different view"

### ViewModel

**class FilterAndSort**
Has a state for the whole filter and sort setup. It has the rules and logic for how the model is manipulated.
The singleChoice (boolean) alternatives, aka the social media buttons. Each filter and sort component

### Model

---

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br />
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

### `yarn test`

Launches the test runner in the interactive watch mode.<br />

### `yarn build`

Builds the app for production to the `build` folder.<br />
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.<br />
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.
