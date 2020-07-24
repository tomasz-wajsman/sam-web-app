# Sports Activity Manager Web App

This React application allows the user to manage their sport activities.

### Functionalities
* showing the saved activities
* showing the selected activity details
* adding a new activity
* modyfying an existing activity
* deleting an activity

### How to use this application?
1. Clone the repository and the *Sports Activity Manager Backend* server
2. Setup the server
3. Change the Sports Activity Manager API URL
4. Type *npm start* to start the application

### Required data for all activities
* name (for example *football training*)
* category (for example *football*)
* start date in **YYYY-MM-DD HH:mm** format (for example *2020-07-21 07:30*)
* end date in **YYYY-MM-DD HH:mm** format (for example *2020-07-21 08:30*)

The activities may contain the *distance* parameter as well. It describes the distance taken during the activity. It is useful for saving the details like how many kilometers were run or cycled.

### Used libraries
This application was created using *create-react-app*. It utilizes *axios*, *moment.js*, *prop-types*, *redux*, *react-redux*, *react-router* and *react-router-dom*.