import abc from "../assets/images/abc.png";
import abc1 from "../assets/images/abc-1.png";
import abc2 from "../assets/images/abc-2.png";
import abc3 from "../assets/images/abc-3.png";
import abc4 from "../assets/images/abc-4.png";

const Academic = () => {
  return (
    <div className="w-11/12 md:w-10/12 lg:container  mx-auto my-10 md:my-20 ">
      <div className="grid grid-cols-1 md:grid-cols-4  md:gap-8  mt-10">
        <div className="col bg-yellow-500 p-5  rounded-lg mb-4 md:mb-0">
          <h2 className="text-4xl text-center font-bold mb-5">Academic Sections</h2>
          <p>
            Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam
            nonumy eirmod tempor invidunt ut labore et dolore magna aliquyam
            erat, sed diam voluptua. At vero eos et accusam et justo duo dolores
            et ea rebum. Stet clita kasd gubergren, no sea takimata sanctus est
          </p>
        </div>
        <div className="col-span-3">
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 md:gap-8">
            <div className="bg-purple-50 p-2 md:p-5 rounded-xl border-2 border-purple-500  border-dashed hover:bg-purple-200 ">
              <img src={abc} alt="" />
              <h1 className="text-2xl font-bold mt-5">Pre School</h1>
              <p>Grade PG - KG</p>
            </div>
            <div className="bg-purple-50 p-2 md:p-5 rounded-xl border-2 border-purple-500  border-dashed hover:bg-purple-200 ">
              <img src={abc1} alt="" />
              <h1 className="text-2xl font-bold mt-5">Junior Section</h1>
              <p>Class 1 - 5</p>
            </div>
            <div className="bg-purple-50 p-2 md:p-5 rounded-xl border-2 border-purple-500  border-dashed hover:bg-purple-200 ">
              <img src={abc2} alt="" />
              <h1 className="text-2xl font-bold mt-5">Middle Section</h1>
              <p>Class 6 - 8</p>
            </div>
            <div className="bg-purple-50 p-2 md:p-5 rounded-xl border-2 border-purple-500  border-dashed hover:bg-purple-200 ">
              <img src={abc3} alt="" />
              <h1 className="text-2xl font-bold mt-5">Senior Section</h1>
              <p>Class 9 - 10</p>
            </div>
            <div className="bg-purple-50 p-2 md:p-5 rounded-xl border-2 border-purple-500  border-dashed hover:bg-purple-200 ">
              <img src={abc4} alt="" />
              <h1 className="text-2xl font-bold mt-5">Collage Section</h1>
              <p>Class 11 - 12</p>
            </div>
            <div className="bg-purple-300 p-2 md:p-5 rounded-xl border-2 border-purple-500  border-dashed hover:bg-purple-500 text-center">
              <h1 className="text-2xl font-bold mt-5">Join Us Today</h1>
              <button className=" btn brn-outline bg-transparent border-white mt-10">
                Apply Now
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Academic;
