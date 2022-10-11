# Recipes

## Description: 

New version of my pet project, called Recipes. 

This is a consolidated repo, which has two apps: front end and back end app.

The app allows you to work with your recipes instead of storing them in papers.

The old version could be found here: https://grvarecipes.herokuapp.com/

## Technologies used:

### Front end app

1. Node v18.6.0
2. npm v8.13.2
3. TypeScript v4.8.3
4. Redux Toolkit
5. Formik and Yup
6. Material UI (pagination, mobile menu and select field)

### Back end app

1. Ruby v2.7.0
2. Rails v7.0.3.1
3. Postgress as a DB


## How to run:

There are several ways of checking the app out:

### You can interact with the already deployed app

The app can be accessed here: https://recipes-v2.netlify.app/

- Login: test@example.com

- Password: 123456

### Local deployment

**IMPORTANT**: first you need to start the Rails app, then the React one

#### Prerequisites

1. Clone the repo ```https://github.com/rimakan/recipes.git```

2. Install Node v18

3. Install Ruby v2.7.0

4. Install Rails v7.0.3.1


#### Running the Rails app

1. Run ``` rails db:migrate ``` in the project's folder

2. Run ``` rails s -b 0.0.0.0 -p 3001 ``` in the project's folder


#### Running the React app

1. Run ``` cd recipes-web ```

2. Run ``` npm install ``` in the project's folder

3. Run ``` npm start ``` in the project's folder

4. Once the app deploys, go to http://localhost:3000


### Using Docker

1. Run ``` sudo docker-compose up --build ``` in the project's folder

2. Once the build finishes, go to http://localhost:3000

3. In order to stop containers, run ``` docker-compose down ```
