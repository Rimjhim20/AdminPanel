
   /* Replace <password> with your database password */
 
  // db.js
  const mongoose = require('mongoose');
  const config = require('config');
  const db = config.get('mongoURI');
//   const defualt = require('default');
// const db = defualt.mongoURI; 
  const connectDB = async () => {
    try {
      mongoose.set('strictQuery', true);
      await mongoose.connect(process.env.URI || db, {
        useNewUrlParser: true,
      });
  
      console.log('MongoDB is Connected...');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;