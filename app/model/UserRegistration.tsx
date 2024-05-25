import mongoose from "~/mongoose.server";

export interface UserInterface {
  _id:string
  name: string;
  email: string;
  password: string;
}

const UserRegistrationSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  email: {
    type: String,
    required: true,
  },
  password: {
    type: String,
    required: true,
  },
});

let UserRegistration: mongoose.Model<UserInterface>;

try {
    UserRegistration = mongoose.model<UserInterface>("UserRegistration");
} catch {
    UserRegistration = mongoose.model<UserInterface>("UserRegistration", UserRegistrationSchema);
}   

export default UserRegistration;