import bangladesh from "../assets/images/bangladesh.png";
import bangladeshBoard from "../assets/images/bangladesh-board.png";
import britishCouncil from "../assets/images/BritishCouncil.png";
import cambridge from "../assets/images/canmridge.jpg";
import edexcel from "../assets/images/edexcel.jpg";
import bdBoard from "../assets/images/bd-board.jpg";
const Affiliations = () => {
  return (
    <div className="w-11/12 md:w-10/12 lg:container  mx-auto my-16 md:my-32 ">
      <h3 className="text-2xl md:text-4xl font-bold"> Affiliations</h3>
      <div className="grid grid-cols-2 md:grid-cols-6 gap-10  items-center bg-white shadow-xl p-10 border mt-5">
        <img src={bangladesh} className="h-14 mx-auto" alt="" />
        <img src={britishCouncil} className="mx-auto" alt="" />
        <img src={cambridge} className=" mx-auto" alt="" />
        <img src={bangladeshBoard} className="h-14 mx-auto" alt="" />
        <img src={edexcel} className="mx-auto" alt="" />
        <img src={bdBoard} className="h-14  mx-auto" alt="" />
      </div>
    </div>
  );
};

export default Affiliations;
