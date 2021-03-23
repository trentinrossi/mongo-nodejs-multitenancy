const mongoose = require('mongoose');
const { Schema } = mongoose;

const personSchema = new Schema(
  {    
    name: { type: String, required: true },    
    email: { type: String, required: true },
    phone: { type: String },    
  },
  { versionKey: false, timestamps: true }
);

module.exports = mongoose.model('Person', personSchema);
