//=============================================================================
// Mongo Atlas Connection
//=============================================================================
require('dotenv').config();
const mongoose = require('mongoose');

// Mongo URL and Connection
const mongoURI = process.env.DATABASE_URL;
const db = mongoose.connection;

// Connect to Mongo
mongoose.connect(mongoURI, {
	useNewUrlParser: true,
	useUnifiedTopology: true,
	useCreateIndex: true,
});

//Connection success/fail
db.on('error', (err) => console.log(err.message));
db.on('connected', () => console.log(`Mongo connected!`));
db.on('disconnected', () => console.log('Mongo disconnected...'));

// Start connection
db.on('open', () => {
	console.log('Mongo connection made!');
});

// Export
module.exports = mongoose;