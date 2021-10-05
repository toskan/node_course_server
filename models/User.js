const mongoose = require('mongoose');
const { Schema } = mongoose;
//destructuring equals Schema = mongoos.schema means mongoose has a property called Schema, take that propert and assign new variable Schema

//tells mongoose what type of schema we're adding
const userSchema = new Schema({
	googleId: String,
	credits: { type: Number, default: 0 },
});

//creates a new collection called 'users'
mongoose.model('users', userSchema);
