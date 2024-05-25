import  { useState } from 'react';
import SellersLayout from "~/components/SellersLayout";
import CreateModal from "~/modal/service";
import { Input, Textarea, Button, useDisclosure } from "@nextui-org/react";
import { Form, Link, useLoaderData } from "@remix-run/react";
import ServiceCategory, { UserInterface } from "~/model/serviceCategory";
import { ActionFunction, LoaderFunction, redirect } from "@remix-run/node";
import { getSession } from "~/session";
import UserRegistration from "~/model/UserRegistration";
import EyeIcon from "~/components/icons/EyeIcon";
import EditIcon from "~/components/icons/EditIcon";
import DeleteIcon from "~/components/icons/DeleteIcon";

const AddService = () => {
  const createRecordDisclosure = useDisclosure();
  const { user } = useLoaderData<{ user: { email: string } }>()
  const { serviceCategory } = useLoaderData<{ serviceCategory: UserInterface[] }>()
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
          <p className="text-xl font-poppins text-white">Services</p>
        </div>
        <div>
          <Button
            color="default"
            className="font-montserrat font-semibold"
            onPress={() => createRecordDisclosure.onOpen()}
          >
            Create Service Category
          </Button>
        </div>
      </div>

      <main>
        <div className="grid grid-cols-4 gap-4 mt-10">
          {serviceCategory.map((services: UserInterface, index: number) => (
            <div key={index} className="bg-slate-700 mt-8 transition duration-200 delay-200 ease-in-out hover:scale-105 rounded-lg shadow-lg p-4">
              <div className="flex flex-col justify-between">
                <div className='flex justify-center'>
                  <img className="w-60 rounded-lg h-40 bg-slate-800 -mt-8" src={services.image} alt={services.name} />
                </div>
                <div className="mt-4">
                  <p className="font-poppins font-medium text-white text-lg">{services.name}</p>
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
      </main>

      <CreateModal
        isOpen={createRecordDisclosure.isOpen}
        onOpenChange={createRecordDisclosure.onOpenChange}
        onCloseModal={createRecordDisclosure.onClose}
        title="Create Service Category"
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
              label: "font-poppins font-medium text-white text-sm",
              inputWrapper: "h-12 max-w-lg text-white mt-1",
            }}
            type="text"
            variant="bordered"
            color="primary"
          />

          <label
            className="block font-poppins font-medium text-white text-sm mt-1"
            htmlFor="image"
          >
            Image
          </label>
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
              inputWrapper: "focus:border focus:border-blue-500 text-white",
            }}
          />

          <Input
            label="Email"
            isRequired
            isClearable
            readOnly
            labelPlacement="outside"
            placeholder=" "
            name="email"
            defaultValue={user.email}
            className="hidden "
            classNames={{
              label: "font-poppins font-medium text-white text-sm",
              inputWrapper: "h-12 max-w-lg text-white mt-1",
            }}
            type="text"
            variant="bordered"
            color="primary"
          />

          <input type="hidden" name="base64Image" value={base64Image} />

          <button className="float-right mt-10 text-white bg-primary-500 p-2 rounded-lg">
            Create
          </button>
        </Form>
      </CreateModal>
    </SellersLayout>
  );
};

export default AddService;

// loader function
export const loader: LoaderFunction = async ({ request }) => {
  // Checking if the user has logged in
  const session = await getSession(request.headers.get("Cookie"));
  const token = session.get("email");
  // Redirecting to the login page
  if (!token) {
    return redirect("/Login");
  }

  const user = await UserRegistration.findOne({ email: token });
  const serviceCategory = await ServiceCategory.find({ email: token });

  return { user, serviceCategory };
};

export const action: ActionFunction = async ({ request }) => {
  const formData = await request.formData();
  const name = formData.get("name");
  const description = formData.get("description");
  const base64Image = formData.get("base64Image");
  const email = formData.get("email");

  // Creating a new instance of the service category
  const newServiceCategory = new ServiceCategory({
    name,
    description,
    image: base64Image,
    email,
  });

  await newServiceCategory.save();

  return redirect("/seller/services"); // Redirect to the services page after saving
};
