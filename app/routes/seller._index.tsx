import SellersLayout from "~/components/SellersLayout"
import { LoaderFunction, redirect } from "@remix-run/node";
import { getSession } from "~/session";
import UserRegistration from "~/model/UserRegistration";
import { useLoaderData } from "@remix-run/react";
import ServiceIcon from "~/components/icons/SericeIcon";
import ArrowIcon from "~/components/icons/ArrowIcon";
import CartIcon from "~/components/icons/CartIcon";
import AppointmentIcon from "~/components/icons/AppointmenIcon";
import UsdIcon from "~/components/icons/usdIcon";
const Sellers = () => {
    const { user } = useLoaderData<{ user: { email: string } }>()
    return (
        <SellersLayout>
            <div className="w-full px-4 h-12 bg-blue-600 rounded-lg flex justify-between items-center">
                <div>
                    <p className="text-xl font-poppins text-white"> Dashboard</p>
                </div>
                <div>
                    <p className="text-lg font-poppins text-white"> Hi, {user.email}</p>
                    <div>
                        <img src="{image}" alt="" />
                    </div>
                </div>
            </div>

            <div className="lg:grid lg:grid-cols-4 gap-6 mt-10">
                {/* services count */}
                <div className="w-full h-[15vh] rounded-lg bg-slate-700 transition duration-200 delay-200 ease-in-out hover:scale-105 hover:bg-slate-600 shadow-md  px-4 py-4 flex flex-col justify-between">
                    <div className=" flex gap-4 items-center">
                        <p className="text-4xl"><ServiceIcon className="h-8 w-8 text-secondary-400"/></p>
                        <p className="text-lg font-poppins text-white"> Services</p>
                        <p className="text-lg font-poppins text-white">2990</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <ArrowIcon className="w-20 text-secondary-200"/>
                    </div>
                   
                </div>
                {/* orders count */}
                <div className="w-full h-[15vh] rounded-lg bg-slate-700 transition duration-200 delay-200 ease-in-out hover:scale-105 hover:bg-slate-600 shadow-md  px-4 py-4 flex flex-col justify-between">
                    <div className=" flex gap-4 items-center">
                        <p className="text-4xl"><CartIcon className="h-8 w-8 text-danger-300"/></p>
                        <p className="text-lg font-poppins text-white">Orders</p>
                        <p className="text-lg font-poppins text-white">2990</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <ArrowIcon className="w-20 text-danger-200"/>
                    </div>
                   
                </div>
                {/* appointments */}
                <div className="w-full h-[15vh] rounded-lg bg-slate-700 transition duration-200 delay-200 ease-in-out hover:scale-105 hover:bg-slate-600 shadow-md  px-4 py-4 flex flex-col justify-between">
                    <div className=" flex gap-4 items-center">
                        <p className="text-4xl"><AppointmentIcon className="h-8 w-8 text-primary-400"/></p>
                        <p className="text-lg font-poppins text-white">Appointments</p>
                        <p className="text-lg font-poppins text-white">2990</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <ArrowIcon className="w-20 text-primary-300"/>
                    </div>
                   
                </div>
                {/* earning */}
                <div className="w-full h-[15vh] rounded-lg bg-slate-700 transition duration-200 delay-200 ease-in-out hover:scale-105 hover:bg-slate-600 shadow-md  px-4 py-4 flex flex-col justify-between">
                    <div className=" flex gap-4 items-center">
                        <p className="text-4xl"><UsdIcon className="h-8 w-8 text-success-400"/></p>
                        <p className="text-lg font-poppins text-white">Earnings</p>
                        <p className="text-lg font-poppins text-white">2990</p>
                    </div>
                    <div className="flex items-center justify-center">
                        <ArrowIcon className="w-20 text-success-200"/>
                    </div>
                   
                </div>
            </div>
        </SellersLayout>
    )
}

export default Sellers


export const loader: LoaderFunction = async ({ request }) => {
    const session = await getSession(request.headers.get("Cookie"));
    const token = session.get("email");

    if (!token) {
        return redirect("/login")
    }

    const user = await UserRegistration.findOne({ email: token })

    return { user }


}