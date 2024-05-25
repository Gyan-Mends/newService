import { Link } from "@remix-run/react"
import PublicLayout from "~/components/PublicLayout"
import clean1 from '~/images/illustration1.jpg'

const Home = () => {
  return (
    <PublicLayout>
      {/* becoming a service seller */}
      <div className=" bg-slate-900 mt-4 p-2">
        <div className="lg:h-[480px] md:h-60 bg-slate-700 shadow-md rounded-md">
          <div className="lg:grid lg:grid-cols-3 md:grid  p-10  md:grid-cols-3  ">
            {/* service seller image */}
            <div className="lg:col-span-2 md:col-span-2">
              <img className="rounded-md lg:w-[60vw] lg:h-[30vw]  md:h-[22vh] md:w-[55vw] " src={clean1} alt="" />
            </div>
            <div className="lg:-mt-20 md:-mt-20 mt-10 text-center flex items-center justify-center flex-col">
              <p className="lg:!text-3xl !text-lg font-poppins lg:animate-bounce md:text-lg text-white"
              >Become a service seller</p>
              <p className="text-sm mt-4 md:mt-1 text-white font-poppins lg:text-md md:text-sm"
              >Join our platform and start selling your services to the world</p>
              <div className='mt-6'>
                <Link to="/sellerRegistration">
                  <button className="bg-blue-600 text-white p-2 rounded-md font-poppins">Get Started</button>
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* <!-- services categories --> */}
      {/* <!-- services categories --> */}
      <div className="p-10 mt-24">
        <p
          className="font-poppins text-2xl text-white"
        >Services Categories</p>
        <div className="lg:grid  lg:grid-cols-3 md:grid md:grid-cols-2 gap-20 mt-4 ">
          {/* <!-- house chores-->
                {/* <!-- house chores--> */}
          <Link to="">
            <div className="h-40 lg:w-[380px] bg-slate-700 transition ease-in-out delay-150 duration-400 hover:scale-105 hover:bg-slate-600 shadow-md rounded-lg font-poppins">
              <div className="flex items-center justify-center h-40">
                <div>
                  <div className="h-16 w-16 rounded-full bg-[#f4f7fa] shadow-md flex justify-center items-center">
                    {/* <FontAwesomeIcon className="text-blue-600" icon={faHome} /> */}
                  </div>
                  <p className="text-md text-white -ml-4"
                  >House Chores</p>

                </div>
              </div>
            </div>
          </Link>


          {/* <!-- Teaching -->
            <!-- Teaching --> */}
          <Link to="">
            <div className="h-40 mt-4 lg:mt-0 md:mt-0 lg:w-[380px] bg-slate-700 hover:bg-slate-600 shadow-md rounded-lg transition ease-in-out delay-150 hover:scale-105 duration-400">
              <div className="flex items-center justify-center h-40 font-poppins">
                <div>
                  <div className="h-16 w-16 rounded-full bg-[#f4f7fa] shadow-md flex justify-center items-center">
                    {/* <FontAwesomeIcon className="text-blue-600" icon={faPersonChalkboard} /> */}
                  </div>
                  <p
                    className="text-md text-white"
                  >Teaching</p>
                </div>
              </div>
            </div>
          </Link>

          <Link to="">
            <div className="h-40 mt-4 lg:mt-0 md:mt-0 lg:w-[380px] bg-slate-700 shadow-md rounded-lg transition ease-in-out delay-150 duration-400 hover:scale-105 hover:bg-slate-600 ">
              <div className="flex items-center justify-center h-40">
                <div>
                  <div className="h-16 w-16 rounded-full bg-[#f4f7fa] shadow-md flex justify-center items-center">
                    {/* <FontAwesomeIcon className="text-blue-600" icon={faTrowelBricks} /> */}
                  </div>
                  <p className="text-md text-white font-poppins -ml-4"
                  >Construction</p>

                </div>
              </div>
            </div>
          </Link>
        </div>


        <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2  gap-20 mt-10">
          {/* <!-- Mechanics -->
            <!-- Mechanics --> */}
          <Link to="">
            <div className="h-40 mt-4 lg:mt-0 md:mt-0 lg:w-[270px] bg-slate-700 transition ease-in-out delay-150 duration-400 hover:scale-105 hover:bg-slate-600 shadow-md rounded-lg ">
              <div className="flex items-center justify-center h-40">
                <div>
                  <div className="h-16 w-16 rounded-full bg-[#f4f7fa] shadow-md flex justify-center items-center">
                    {/* <FontAwesomeIcon className="text-blue-600" icon={faScrewdriverWrench} /> */}
                  </div>
                  <p className="text-md text-white">
                    Mechanics
                  </p>
                </div>
              </div>
            </div>
          </Link>
          {/* 
            <!-- Massage -->
            <!-- Massage --> */}
          <Link to="">
            <div className="h-40 mt-4 lg:mt-0 md:mt-0 lg:w-[270px] bg-slate-700 transition ease-in-out delay-150 duration-400 hover:scale-105 hover:bg-slate-600 shadow-md rounded-lg ">
              <div className="flex items-center justify-center h-40">
                <div>
                  <div className="h-16 w-16 rounded-full bg-[#f4f7fa] shadow-md flex justify-center items-center">
                    {/* <FontAwesomeIcon className="text-blue-600" icon={faSpa} /> */}
                  </div>
                  <p className="text-md text-white font-poppins"
                  >Massage</p>


                </div>
              </div>
            </div>
          </Link>

          {/* <!-- Electricals -->
            <!-- Electricals --> */}
          <Link to="">
            <div className="h-40 mt-4 lg:mt-0 md:mt-0 lg:w-[270px] bg-slate-700 transition ease-in-out delay-150 duration-400 hover:scale-105 hover:bg-slate-600 shadow-md rounded-lg ">
              <div className="flex items-center justify-center h-40">
                <div>
                  <div className="h-16 w-16 rounded-full bg-[#f4f7fa] shadow-md flex justify-center items-center">
                    {/* <FontAwesomeIcon className="text-blue-600" icon={faPlug} /> */}
                  </div>
                  <p className="text-md text-white font-poppins "
                  >Electricals</p>
                </div>
              </div>
            </div>
          </Link>

          {/* <!-- More -->
            <!-- More --> */}
          <Link to="">
            <div className="h-40 mt-4 lg:mt-0 md:mt-0 lg:w-[270px] bg-slate-700 transition ease-in-out delay-150 duration-400 hover:scale-105 hover:bg-slate-600 shadow-md rounded-lg ">
              <div className="flex items-center justify-center h-40">
                <div>
                  <div className="h-16 w-16 rounded-full bg-[#f4f7fa] shadow-md flex justify-center items-center">
                    {/* <FontAwesomeIcon className="text-blue-600" icon={faObjectGroup} /> */}
                  </div>
                  <p
                    className="text-md text-white font-poppins ml-4"
                  >More</p>
                </div>
              </div>
            </div>
          </Link>
        </div>
      </div>

      {/* all you need are at your tips */}
      <div className="p-2">
        <div className="grid grid-cols-1 lg:grid-cols-2 p-8 mt-20 gap-10 bg-slate-700 shadow-lg rounded-md">
          <div className="pl-4">
            <p className="text-2xl text-white font-poppins"
            >All the services you need are at your finger tips</p>
            <p className="text-white mt-4 font-poppins leading-loose "
            >Delivering the highest quality services has been our time-tested approach to building strong relationships with our customers. It’s the cornerstone of our business philosophy. By consistently exceeding expectations, we foster trust and loyalty. Thank you for being part of our journey! 🌟
              Whether it’s personalized solutions, timely support, or unwavering reliability, we’re here to serve you. As we move forward, we look forward to creating more memorable experiences together.</p>
            {/* contact button */}
            <div className='text-cnter'>
              <Link to="/dashboard">
                <button className="bg-blue-600 text-white p-2 rounded-md font-poppins mt-4">Contact Us</button>

              </Link>
            </div>

            <div className="flex mt-8 gap-20 pb-10">
              <div className="">
                <p className="text-md text-slate-300 font-poppins"
                >Experience Technicians</p>
                <p className="text-[25px] text-white font-poppins"
                >2056</p>

              </div>
              <div className="">
                <p
                  className="text-md text-slate-300 font-poppins"
                >Projects Completed</p>
                <p className="text-[25px] text-white font-poppins"
               >1568</p>

              </div>
            </div>
          </div>
          <div className="">
            {/* mec */}
            <img src={clean1} className="lg:h-[400px] h-[320px] w-screen rounded-md" alt="" />
          </div>
        </div>
      </div>

      {/* top service come here */}
      {/* top service come here */}
      {/* top service come here */}
      {/* top service come here */}
      {/* top service come here */}
      {/* top service come here */}
      {/* top service come here */}
      {/* top service come here */}
      {/* top service come here */}
      {/* top service come here */}
      {/* top service come here */}


      {/* <!-- booking appointment-->
      <!-- booking appointment--> */}
      <div className="mt-20  flex items-center justify-center bg-[url(../images/massage.avif)]  rounded-md bg-cover bg-no-repeat bg-h-[500px] lg:h-[600px] w-[80vw] m-auto p-10">
        <div className=" ">
          <div className=" lg:w-[320px] bg-white shadow-md lg:ml-40 p-8 rounded-lg">
            <div className="flex">
              <div className="h-10 w-[1px] bg-blue-600">

              </div>
              <Link to="">
                <p className="text-md ml-4 font-poppins "
                >Book an appointment</p>
              </Link>
            </div>
            <hr className="border-[#007EE5] mt-2" />

            <div className="flex mt-4">
              <div className="h-10 w-[1px] bg-[#007EE5]">

              </div>
              <Link to="">
                <p
                  className="text-md ml-4 font-poppins"
                >View all services</p>
              </Link>
            </div>
          </div>
        </div>
      </div>


      {/* <!-- services -->
            <!-- services --> */}
      <div className="p-2 mt-20">
        <p
          className="text-2xl text-white font-poppins"
        >View all services</p>
        <div className="lg:grid lg:grid-cols-3 mt-10 gap-6">
          <div className="h-[150px] bg-slate-700 rounded-md shadow-md transition ease-in-out delay-150 duration-400 hover:scale-105 hover:bg-slate-600 lg:w-[420px] pl-8 pr-8">
            <div className="h-10 w-10 rounded-full bg-[#007EE5] -mt-[20px] flex items-center justify-center text-center">
              {/* <FontAwesomeIcon className="text-white " icon={faScrewdriverWrench} /> */}
            </div>
            <p className=" text-lg mt-4 text-white"> All services make </p>
            <p className="text-md text-gray-300 ">
              We give an assortment of fix and support administration for all services
            </p>
          </div>
          <div className="h-[150px] bg-slate-700 transition ease-in-out delay-150 duration-400 hover:scale-105 hover:bg-slate-600 rounded-md shadow-md mt-8 lg:mt-0 lg:w-[420px] pl-8 pr-8 ">
            <div className="h-10 w-10 rounded-full bg-[#007EE5] -mt-[20px] flex items-center justify-center text-center">
              {/* <FontAwesomeIcon className="text-white" icon={faServicestack} /> */}
            </div>
            <p className=" text-lg mt-4 text-white"> Variety of services</p>
            <p className="text-md text-gray-300">
              The main principle of our work is to offer a wide scope of value quality services
            </p>
          </div>
          <div className="h-[150px] bg-slate-700 transition ease-in-out delay-150 duration-400 hover:scale-105 hover:bg-slate-600 rounded-md shadow-md lg:w-[420px] pl-8 pr-8 mt-8 lg:mt-0 ">
            <div className="h-10 w-10 rounded-full bg-[#007EE5] -mt-[20px] flex items-center justify-center text-center">
              {/* <FontAwesomeIcon className="text-white" icon={faHandsHoldingCircle} /> */}
            </div>
            <p className=" text-lg mt-4 text-white"> Quality Support</p>
            <p className="text-md text-gray-300">
              We offer quality support for any service that allows them to alway stay fully functional
            </p>
          </div>
        </div>
      </div>


      {/* <!-- top rated -->
    <!-- top rated --> */}
      <div className="p-2">
        <div className="mt-20">
          <p className="text-2xl text-white font-poppins"
          >Top Rated Services</p>

          <div className="lg:grid lg:grid-cols-4 md:grid md:grid-cols-2 gap-20 mt-10">
            {/* <!-- house chores--> */}
            <div className="border transition ease-in-out delay-150 duration-400 hover:scale-105 rounded-md border-slate-700 shadow-md">
              <Link to="">
                <img className="h-[250px] rounded-md" src={clean1} alt="" />
              </Link>
              <p
                className="text-center mt-2 text-white font-poppins"
              >House Chores</p>
              <p className="mt-2 text-center">
                {/* <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" /> */}
              </p>
              <p className=" text-center font-poppins mt-2 text-white">
                GHC 100
              </p>
            </div>

            {/* <!-- house chores--> */}
            <div className="mt-8 lg:mt-0 md:mt-0 border transition ease-in-out delay-150 duration-400 hover:scale-105 rounded-md border-slate-700 shadow-md">
              <Link to="">
                {/* massege */}
                <img className="h-[250px] rounded-md" src={clean1} alt="" />
              </Link>
              <p className="text-center mt-2 text-white font-poppins"
             >Massage</p>
              <p className="mt-2 text-center">
                {/* <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" /> */}
              </p>
              <p className=" text-center font-poppins mt-2 text-white">
                GHC 100
              </p>
            </div>

            {/* <!-- house chores--> */}
            <div className="mt-8 lg:mt-0 md:mt-0 border transition ease-in-out delay-150 duration-400 hover:scale-105 rounded-md border-slate-700 shadow-md">
              {/* construction */}
              <Link to=""><img className="h-[250px] rounded-md" src={clean1} alt="" /></Link>
              <p className="text-center mt-2 text-white font-poppins"
              >Construction</p>
              <p className="mt-2 text-center">
                {/* <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                <FontAwesomeIcon icon={faStar} className="text-yellow-500" /> */}

              </p>
              <p className="text-center font-poppins  mt-2 text-white">
                GHC 100
              </p>
            </div>

            {/* <!-- house chores--> */}
            <div className="mt-8 lg:mt-0 md:mt-0 transition ease-in-out delay-150 duration-400 hover:scale-105 border rounded-md border-slate-700 shadow-md">
              {/* teaching */}
              <Link to=""><img className="h-[250px] rounded-md" src={clean1} alt="" /></Link>
              <p className="text-center mt-2 text-white font-poppins"
              >Teaching</p>
              <div className='lg:pl-10 lg:pr-10 md:pl-4 md:pr-4'>
                {/* becoming a service seller */}
                              <p className="mt-2 text-center">
                               {/* <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                                <FontAwesomeIcon icon={faStar} className="text-yellow-500" />
                                <FontAwesomeIcon icon={faStar} className="text-yellow-500" /> */}
                            </p>
                            <p className=" text-center font-poppins mt-2 text-white">
                                GHC 100
                            </p>
                        </div>

                    </div>
                </div>
            </div>
      </div>
        </PublicLayout> 
    )
}

export default Home