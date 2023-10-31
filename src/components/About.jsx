import about1 from "../assets/images/about1.jpg";
import about2 from "../assets/images/about2.jpg";
import {IoMdSchool} from 'react-icons/io'
import {FaUserGraduate} from 'react-icons/fa'

const About = () => {
  return (
    <div id="about" className="w-11/12 md:w-10/12 lg:container mx-auto my-10 md:my-32 ">
      <div className=" flex  flex-col-reverse md:flex-row  justify-between items-center gap-8 md:gap-20">
        <div className="w-full flex flex-col-reverse md:flex-col">
          <img src={about1} className="rounded-3xl w-full shadow-xl mb-5" alt="" />
         <div>
            <div className=" flex items-center gap-5 ">
                <div  className="bg-purple-100 p-3 rounded-xl shadow-xl"> <IoMdSchool className="text-5xl text-purple-500"/></div>
                <h1 className="text-xl font-semibold">Certified Institute</h1>
            </div>
            <p className="mt-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eligendi quis pariatur debitis.</p>
            <div className=" flex items-center gap-5  mt-5">
                <div  className="bg-purple-100 p-3 rounded-xl shadow-xl"> <FaUserGraduate className="text-5xl text-purple-500"/></div>
                <h1 className="text-xl font-semibold">Qualified Teachers</h1>
            </div>
            <p className="my-3">Lorem, ipsum dolor sit amet consectetur adipisicing elit. Rerum eligendi quis pariatur debitis.</p>
         </div>
        </div>
        <div className="w-full">
          <div>
            <h1 className="text-2xl md:text-3xl font-semibold mb-6">
              Why Students Choose Us
            </h1>
           <p> Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
            Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet, consetetur
            sadipscing elitr, sed diam nonumy</p>
          
           <button className="btn btn-outline border-yellow-500 text-yellow-500 my-5">Apply Online</button>
     
          </div>
          <img src={about2} className="rounded-3xl w-full shadow-xl" alt="" />
        </div>
      </div>
    </div>
  );
};

export default About;
