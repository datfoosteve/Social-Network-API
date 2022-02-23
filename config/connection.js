const mongoose = require("mongoose");

// After you create your Heroku application, visit https://dashboard.heroku.com/apps/ select the application name and add your Atlas connection string as a Config Var
// Node will look for this environment variable and if it exists, it will use it. Otherwise, it will assume that you are running this application locally

//test remote

// process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/studentsDB";

// //test local
// const connectionString ='mongodb://127.0.0.1:27017/studentsDB';

mongoose.connect(
  process.env.MONGODB_URI || "mongodb://127.0.0.1:27017/socialNetworkApi",
  {
    useNewUrlParser: true,
    useUnifiedTopology: true,
  }
);

module.exports = mongoose.connection;
