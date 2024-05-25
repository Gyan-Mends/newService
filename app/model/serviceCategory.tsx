import mongoose from "~/mongoose.server";

export interface UserInterface {
  _id:string
  name: string;
  image: string;
  description:string;
  email:string
}

const ServiceCategorysSchema = new mongoose.Schema({
  name: { type: String, require: true },
  image: { type: String, require: true },
  description: { type: String, require: true },
  email: { type: String, require: true }
});

let  ServiceCategory: mongoose.Model<UserInterface>;

try {
  ServiceCategory = mongoose.model<UserInterface>("servicescategory");
} catch {
  ServiceCategory = mongoose.model<UserInterface>("servicescategory", ServiceCategorysSchema);
}   

export default ServiceCategory;