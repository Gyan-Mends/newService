import PublicLayout from "~/components/PublicLayout"
import LoginIllustration from "~/images/illustration2.jpg"
import { Button, Input } from "@nextui-org/react"
import LockIcon from "~/components/icons/LockIcon"
import EmailIcon from "~/components/icons/EmailIcon"
import { Form } from "@remix-run/react"
import { Link } from "react-router-dom"
import UserIcon from "~/components/icons/UserIcon"
import { ActionFunction, redirect} from "@remix-run/node"
import UserRegistration from "~/model/UserRegistration"


const Signup = () => {
    return (
        <PublicLayout>
            <div className="bg-slate-900 lg:h-[91vh] lg:grid lg:grid-cols-2">
                {/* Login illustration */}
                <div className="">
                    <img className="lg:h-[91vh]" src={LoginIllustration} alt="" />
                </div>
                {/* Login inputs */}
                <div className="flex items-center justify-center">
                    <div>
                        <p className="text-white font-poppins text-4xl">Create an Account With Us</p>
                        <p className="text-white font-poppins text-sm mt-4 text-center">Please signup to be one of us. <span className="text-blue-500"><Link to="/Login" >Already have account</Link></span></p>
                        <div className="py-10">
                            <Form method="post">
                                <Input
                                    label="Name"
                                    isRequired
                                    isClearable
                                    labelPlacement="outside"
                                    placeholder=" "
                                    name="name"
                                    className="font-poppins"
                                    classNames={{
                                        label: "font-poppins font-medium text-white text-sm -mt-4",
                                        inputWrapper: "border-blue-500 h-16 bg-slate-900 max-w-lg text-white mt-4",
                                    }}
                                    type="text"
                                    variant="bordered"
                                    color="primary"
                                    required
                                    startContent={
                                        <UserIcon />
                                    }

                                />
                                <Input
                                    label="Email"
                                    isRequired
                                    isClearable
                                    labelPlacement="outside"
                                    placeholder=" "
                                    name="email"
                                    className="font-poppins"
                                    classNames={{
                                        label: "font-poppins font-medium text-white text-sm -mt-4",
                                        inputWrapper: "border-blue-500 h-16 bg-slate-900 max-w-lg text-white mt-8",
                                    }}
                                    type="email"
                                    variant="bordered"
                                    color="primary"
                                    required
                                    startContent={
                                        <EmailIcon />
                                    }

                                />
                                <Input
                                    label="Password"
                                    isRequired
                                    isClearable
                                    labelPlacement="outside"
                                    placeholder=" "
                                    name="password"
                                    className="font-poppins"
                                    classNames={{
                                        label: "font-poppins font-medium text-white text-sm -mt-4",
                                        inputWrapper: "border-blue-500 h-16 bg-slate-900 max-w-lg text-white mt-8",
                                    }}
                                    type="password"
                                    variant="bordered"
                                    color="primary"
                                    required
                                    startContent={
                                        <LockIcon />
                                    }
                                />

                                <div>
                                    <Button type="submit" color="primary" className=" text-white text-xl font-poppins w-full h-12 mt-8">Login</Button>
                                </div>
                            </Form>
                        </div>
                    </div>
                </div>
            </div>

        </PublicLayout>
    )
}

export default Signup




export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const name= formData.get("name") as string;
    const email= formData.get("email") as string;
    const password= formData.get("password") as string;

    try {
        const user =  new UserRegistration({
            name,
            email,
            password,
        })
        const response = await  user.save()
        if(response){
            return redirect("/Login")
        }else{
            return redirect("/Signup")
        }
    } catch (error) {
        console.log("Oppss something went wrong", error);
        
    }
};
