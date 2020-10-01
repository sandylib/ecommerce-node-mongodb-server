import {Schema, model} from 'mongoose'


const userSchema = new Schema({
  email: {type: String, required: true},
  name: {type: String,  required: true},
  password: {type: String, required: true}
}, {
  timestamps: true
})

userSchema.methods.encryptPassword = function (password) {
  return bcrypt.hashSync(password, bcrypt.genSaltSync(5), null);
};

userSchema.methods.validPassword = function (password) {
  return bcrypt.compareSync(password, this.password);
};


export const User = model('User', userSchema)