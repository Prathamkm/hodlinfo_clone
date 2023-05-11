# Hodlinfo Clone

In this project, the top 10 tickers are shown on the frontend which is fetched by API which is made in the backend with the help of nodejs.

## Installation

Use npm i command in both frontend and backend for installing required npm packages.

```bash
npm i
```

## Variables for .env file

variables name = PORT, MONGO_URI, FRONTEND_URL
PORT is for backend url port number MONGO_URI is for url of mongodb and assign the frontend url in FRONTEND_URL

Please make sure if you don't listen backend server at 4000 then change the api url in frontend in ./src/component/main.jsx file accordingly.

