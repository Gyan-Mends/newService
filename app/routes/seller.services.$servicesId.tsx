import SellersLayout from "~/components/SellersLayout"
import { Button, useDisclosure, Input, Textarea } from "@nextui-org/react"
import { Form, Link, useLoaderData } from "@remix-run/react";
import CreateModal from "~/modal/service";
import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import Service, { UserInterface } from "~/model/services";
import { getSession } from "~/session";
import ServiceCategory from "~/model/serviceCategory";
import EyeIcon from "~/components/icons/EyeIcon";
import EditIcon from "~/components/icons/EditIcon";
import DeleteIcon from "~/components/icons/DeleteIcon";
import { useState } from "react";

const ServiceDetails = () => {
    const createRecordDisclosure = useDisclosure();
    const { service } = useLoaderData<{ service: UserInterface[] }>()
    const { servicecategory } = useLoaderData<{ servicecategory: UserInterface }>()
    const [base64Image, setBase64Image] = useState('');

    const handleImageChange = (event) => {
      const file = event.target.files[0];
      if (file) {
        const reader = new FileReader();
        reader.onloadend = () => {
          setBase64Image(reader.result);
        };
        reader.readAsDataURL(file);
      }
    };
    return (
        <SellersLayout>

            <div className="w-full px-4 h-12 bg-blue-600 rounded-lg flex justify-between items-center">
                <div>
                    <p className="text-xl font-poppins text-white"> Services</p>
                </div>
                <div className="flex gap-4">
                    <Link to="/seller/services/">
                        <Button
                            color="default"
                            className="font-montserrat font-semibold"
                        >
                            Back
                        </Button>
                    </Link>
                    <Button
                        color="default"
                        className="font-montserrat font-semibold"
                        onPress={() => createRecordDisclosure.onOpen()}
                    >
                        Create Service
                    </Button>
                </div>
            </div>

            <div className="h-60 bg-slate-700 rounded-lg mt-10 flex gap-10 p-4">
                <div className="w-1/3 h-[29vh]">
                    <img className="w-full rounded-lg h-[29vh] bg-slate-800" src={servicecategory.image} alt="name" />
                </div>
                <div>
                    <p className="text-4xl font-poppins text-white">{servicecategory.name}</p>
                </div>
                <div>
                    <p className="text-lg font-poppins text-white">{servicecategory.description}</p>
                </div>
            </div>

            <div>
                <div className="grid grid-cols-4 gap-4 mt-10">
                {service.map((services: UserInterface, index: number) => (
            <div key={index} className="bg-slate-700 mt-8 transition duration-200 delay-200 ease-in-out hover:scale-105 rounded-lg shadow-lg p-4">
              <div className="flex flex-col justify-between">
                <div className='flex justify-center'>
                  <img className="w-60 rounded-lg h-40 bg-slate-800 -mt-8" src={services.image} alt={services.name} />
                </div>
                <div className="mt-4 flex justify-between">
                  <p className="font-poppins font-medium text-white text-lg">{services.name}</p>
                  <p className="font-poppins font-medium text-white text-lg">${services.price}</p>
                </div>

                <div className="flex items-center justify-center gap-4 mt-2">
                  <Link to={`/seller/services/${services._id}`}><EyeIcon className="text-slate-400" /></Link>
                  <Link to=""><EditIcon className="text-secondary-400" /></Link>
                  <Link to={`/${services._id}`}><DeleteIcon className="text-danger-400" /></Link>
                  <Link to=""><EyeIcon className="text-primary-400" /></Link>
                </div>
              </div>
            </div>
          ))}
                </div>
            </div>

            <CreateModal
                isOpen={createRecordDisclosure.isOpen}
                onOpenChange={createRecordDisclosure.onOpenChange}
                onCloseModal={createRecordDisclosure.onClose}
                title="Create Service"
                actionText="Save"
                size="xl"
            >
                <Form method="post">
                    <Input
                        label="Name"
                        isRequired
                        isClearable
                        labelPlacement="outside"
                        placeholder=" "
                        name="name"
                        classNames={{
                            label: "font-poppins font-medium text-white text-sm ",
                            inputWrapper: "h-12 max-w-lg text-white mt-1",
                        }}
                        type="text"
                        variant="bordered"
                        color="primary"
                        required
                    />

                    <div className="mt-2 flex gap-4">
                        <div>
                            <label className="block font-poppins font-medium text-white text-sm mt-1" htmlFor="image"> Image</label>
                            <input
                                className="font-poppins border font-medium text-white text-sm h-12 w-full text-white mt-1 rounded-lg border-2 focus:border-blue-500"
                                type="file"
                                required
                                name="image"
                                onChange={handleImageChange}
                            />
                            {base64Image && (
                                <div className="mt-4">
                                    <img src={base64Image} alt="Selected" className="w-26 rounded-lg h-40 bg-slate-800" />
                                </div>
                            )}
                        </div>
                        <div>
                            <Input
                                label="price"
                                isRequired
                                isClearable
                                labelPlacement="outside"
                                placeholder=" "
                                name="price"
                                classNames={{
                                    label: "font-poppins font-medium text-white text-sm ",
                                    inputWrapper: "h-12 max-w-lg text-white mt-1",
                                }}
                                type="text"
                                variant="bordered"
                                color="primary"
                                required
                            />
                        </div>
                    </div>

                    <Textarea
                        label="Description"
                        name="description"
                        labelPlacement="outside"
                        placeholder=" "
                        isRequired
                        variant="bordered"
                        color="primary"
                        classNames={{
                            label: "font-poppins font-medium text-white text-sm mt-2",
                            inputWrapper: "focus:border focus:border-blue-500 text-white"
                        }}
                    />
                    <Input
                        label="Email"
                        isRequired
                        readOnly
                        isClearable
                        defaultValue={servicecategory.email}
                        labelPlacement="outside"
                        placeholder=" "
                        name="email"
                        className="hidden"
                        classNames={{
                            label: "font-poppins font-medium text-white text-sm",
                            inputWrapper: "h-12 max-w-lg text-white mt-1",
                        }}
                        type="text"
                        variant="bordered"
                        color="primary"
                        required
                    />
                    <Input
                        label="servicecatid"
                        isRequired
                        readOnly
                        isClearable
                        labelPlacement="outside"
                        placeholder=" "
                        defaultValue={servicecategory._id}
                        name="servicecatid"
                        className="hidden"
                        classNames={{
                            label: "font-poppins font-medium text-white text-sm",
                            inputWrapper: "h-12 max-w-lg text-white mt-1",
                        }}
                        type="text"
                        variant="bordered"
                        color="primary"
                        required
                    />

                    <input type="hidden" name="base64Image" value={base64Image} />
                    <button className="float-right mt-10 text-white bg-primary-500 p-2 rounded-lg">
                        Create
                    </button>
                </Form>
            </CreateModal>
        </SellersLayout>
    )
}

export default ServiceDetails

export const action: ActionFunction = async ({ request }) => {
    const formData = await request.formData();
    const name = formData.get("name") as string;
    const price = formData.get("price") as string;
    const base64Image = formData.get("base64Image") as string; // Handle file upload properly
    const email = formData.get("email") as string;
    const description = formData.get("description") as string;
    const servicecatid = formData.get("servicecatid") as string;

    const newService = new Service({
        name,
        price,
        image: base64Image, // Save the file URL after uploading
        email,
        description,
        servicecatid,
    });

    const response = await newService.save();

    return response;
};

export const loader: LoaderFunction = async ({ params, request }) => {
    const session = await getSession(request.headers.get("Cookie"));
    const token = session.get("email");
    const { servicesId } = params;

    if (!token) {
        return redirect("/Login");
    }

    // Fetch the serviceCtegory data
    const servicecategory = await ServiceCategory.findOne({ email: token })

    const service = await Service.find({ email: token, servicecatid: servicesId });
    console.log(service);

    return { service, servicecategory };
};