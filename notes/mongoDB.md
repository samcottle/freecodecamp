# MongoDB and Mongoose

MongoDB is used to store data records for use by an application. It's a *non-relational* database, meaning it stores all associated data within one record (rather than across many preset tables, like a SQL database).

Mongo uses JSON as its storage structure, which makes it good for a backend database for JavaScript. Mongoose.js is a NPM module that allows you to write Mongo objects as you would in JavasScript.

## Adding MongoDB and Mongoose to your app

To use MongoDB and Mongoose in your app:

1. Add `mongodb` and `mongoose` to your app's `package.json`.
2. Add your Mongo database URI in your `.env` file, using `MONGO_URI="URI_GOES_HERE"`.
3. Require `mongoose` in you app, with `const mongoose = require('mongoose');`.
4. Add `mongoose.connect(process.env.MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });` to your app to connect it.

## Creating a model

To create a model, you first need a schema. These are like building blocks for your model.