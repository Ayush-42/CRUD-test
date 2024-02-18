import mongoose from 'mongoose';

const userSchema = new mongoose.Schema({
  names: {
    type: [String],
    required: true, 
  },
});

export const UserModel = mongoose.model('User', userSchema);

const userPass = new mongoose.Schema({
  user: {
    type: 'string',
    required: true, 
  },
  pass: {
    type: 'string',
    required: true, 
  },
});

export const UserCred = mongoose.model('userCred', userPass);