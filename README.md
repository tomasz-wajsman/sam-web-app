# Sports Activity Manager Web App

This React application allows the user to manage their sport activities.

### Functionalities
* show the saved activities
* show the selected activity details
* add a new activity
* modify an existing activity
* delete an activity

### How to use this application?
1. Clone the repository and the *Sports Activity Manager Backend* server
2. Type *npm install* to download the dependencies
3. Setup the server
4. Change the Sports Activity Manager API URL (must contain the **http** or **https** protocol)
5. Type *npm start* to start the application

### Required data for all activities
* name (for example *football training*)
* category (for example *football*)
* start date in **YYYY-MM-DD HH:mm** format (for example *2020-07-21 07:30*)
* end date in **YYYY-MM-DD HH:mm** format (for example *2020-07-21 08:30*)

The activities may contain the *distance* parameter as well. It describes the distance taken during the activity. It is useful for saving the details like how many kilometers were run or cycled.

### Used libraries
This application was created using *create-react-app*. It utilizes *axios*, *moment.js*, *prop-types*, *redux*, *react-redux*, *react-router* and *react-router-dom*.