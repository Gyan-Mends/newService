import PublicLayout from "~/components/PublicLayout";
import LoginIllustration from "~/images/illustration2.jpg";
import { Button, Checkbox, Input } from "@nextui-org/react";
import LockIcon from "~/components/icons/LockIcon";
import EmailIcon from "~/components/icons/EmailIcon";
import { Form } from "@remix-run/react";
import { Link } from "react-router-dom";
import { ActionFunction, redirect } from "@remix-run/node";
import UserRegistration from "~/model/UserRegistration";
import { getSession, commitSession } from "~/session";

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const email = formData.get("email") as string;
    const password = formData.get("password") as string;

    // check if user exist
    const user = await UserRegistration.findOne({ email, password });

    //checking if user is found
    if (user) {
        const session = await getSession(request.headers.get("Cookie"));
        session.set("email", email);

        return redirect("/seller", {
            headers: {
                "Set-Cookie": await commitSession(session),
            },
        });
    } else {

        return redirect("/login", {
            headers: {
                "Set-Cookie": " ",
            },
        }
        )

    }
}

const Login = () => {

    return (
        <PublicLayout>
            <div className="bg-slate-900 lg:h-[91vh] lg:grid lg:grid-cols-2 ">
                {/* Login illustration */}
                <div className="">
                    <img className="lg:h-[91vh]" src={LoginIllustration} alt="" />
                </div>
                {/* Login inputs */}
                <div className="flex items-center justify-center py-4 px-2">
                    <div>
                        <p className="text-white font-poppins text-xl lg:text-4xl text-center">Welcome to Home Services</p>
                        <p className="text-white font-poppins text-sm mt-4 text-center">Please login to access your dasboard. <span className="text-blue-500"><Link to="/Signup" >Do not have account</Link></span></p>
                        <div className="py-10">
                            <Form method="post">
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
                                        inputWrapper: "border-blue-500 h-16 bg-slate-900 max-w-lg text-white mt-4",
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

                                <div className="text-white flex justify-between mt-8">
                                    <Checkbox><span className="text-white text-sm font-poppins">Remember me</span></Checkbox>

                                    {/* forget password */}
                                    <Link to="/d" className="text-red-500 text-sm font-poppins">Forget password?</Link>
                                </div>

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
export default Login
