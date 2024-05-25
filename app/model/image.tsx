import mongoose from "~/mongoose.server";

export interface UserInterface{
    image:string,
    name:string,
}

const ImageSchema = new mongoose.Schema({
    image:{
        type:String,
        require:true,
    },
    name:{
        type:String,
        require:true,
    },
    
})

let Image: mongoose.Model<UserInterface>

try {
    Image= mongoose.model<UserInterface>("images")
} catch (error) {
    Image= mongoose.model<UserInterface>("images",ImageSchema)
}

export default Image;