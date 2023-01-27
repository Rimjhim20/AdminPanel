
   /* Replace <password> with your database password */

   process.env['NODE_CONFIG_DIR'] = path.join(__dirname, 'config/')
  // db.js
  const mongoose = require('mongoose');
  const config = require('config');
  const db = config.get('mongoURI');
//   const defualt = require('default');
// const db = defualt.mongoURI; 
  const connectDB = async () => {
    try {
      mongoose.set('strictQuery', true);
      await mongoose.connect(db, {
        useNewUrlParser: true,
      });
  
      console.log('MongoDB is Connected...');
    } catch (err) {
      console.error(err.message);
      process.exit(1);
    }
  };
  
  module.exports = connectDB;