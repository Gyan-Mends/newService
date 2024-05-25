import mongoose from "~/mongoose.server";

export interface UserInterface{
    name:string,
    price:number,
    image:string,
    email:string,
    servicecatid:string,
    description:string
}

const ServiceSchema = new mongoose.Schema({
    name:{
        type:String,
        require:true,
    },

    price:{
        type:Number,
        require:true,
    },

    image:{
        type:String,
        require:true,
    },

    email:{
        type:String,
        require:true,
    },

    servicecatid:{
        type:String,
        require:true,
    },

    description:{
        type:String,
        require:true,
    },
})

let Service: mongoose.Model<UserInterface>

try {
    Service= mongoose.model<UserInterface>("services")
} catch (error) {
    Service= mongoose.model<UserInterface>("services",ServiceSchema)
}

export default Service;