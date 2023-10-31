import abc1 from '../assets/images/f-1.jpg'
import abc2 from '../assets/images/f-2.jpg'
import abc3 from '../assets/images/f-3.jpg'
import abc4 from '../assets/images/f-4.jpg'
import lab from '../assets/images/lab.png'
import library from '../assets/images/library.png'
import eLearn from '../assets/images/e-learning.png'
import club from '../assets/images/club.png'
import cafeteria from '../assets/images/cafeteria.png'
import eKids from '../assets/images/e-kids.png'
const Facilities = () => {
    return (
        <div id='facilities' className="w-11/12 md:w-10/12 lg:container  mx-auto my-16 md:my-32 ">
            <div className='flex justify-between items-center'>
                <h3 className='text-2xl md:text-4xl font-bold'>Our Facilities</h3>
                <button className='btn btn-outline border-yellow-500 text-yellow-500'>Learn More</button>
            </div>
      <div className="grid grid-cols-1 lg:grid-cols-4  md:gap-8  mt-6">
        <div className="col-span-2 grid grid-cols-2 gap-4 lg:gap-8  ">
          <div className='p-8 bg-blue-600 text-white  rounded-lg mb-4 md:mb-0'>
          <h2 className="text-2xl md:text-4xl font-bold mb-5">Our <span className='text-yellow-500'>Focus</span> Is To Provide Best <span className='text-yellow-500'>Education</span> For All Students</h2>
          
          </div>
          <div className='grid gap-2 lg:gap-0'>
            <div className='flex   gap-2 md:gap-5 items-center'>
                <img className=' w-8 md:w-12 bg-purple-100 p-2 rounded-lg' src={lab} alt="" />
                <h3 className=' text-xl md:text-2xl '>Laboratory</h3>
            </div>
            <div className='flex   gap-2 md:gap-5 items-center'>
                <img className=' w-8 md:w-12 bg-purple-100 p-2 rounded-lg' src={library} alt="" />
                <h3 className=' text-xl md:text-2xl '>Library</h3>
            </div>
            <div className='flex   gap-2 md:gap-5 items-center'>
                <img className=' w-8 md:w-12 bg-purple-100 p-2 rounded-lg' src={eLearn} alt="" />
                <h3 className=' text-xl md:text-2xl '>E-learning</h3>
            </div>
            <div className='flex   gap-2 md:gap-5 items-center'>
                <img className=' w-8 md:w-12 bg-purple-100 p-2 rounded-lg' src={club} alt="" />
                <h3 className=' text-xl md:text-2xl '>Clubs</h3>
            </div>
            <div className='flex   gap-2 md:gap-5 items-center'>
                <img className=' w-8 md:w-12 bg-purple-100 p-2 rounded-lg' src={eKids} alt="" />
                <h3 className=' text-xl md:text-2xl '>My e-Kids</h3>
            </div>
            <div className='flex   gap-2 md:gap-5 items-center'>
                <img className=' w-8 md:w-12 bg-purple-100 p-2 rounded-lg' src={cafeteria} alt="" />
                <h3 className=' text-xl md:text-2xl '>Cafeteria</h3>
            </div>
          </div>
        </div>
        <div className="col-span-2">
          <div className="grid grid-cols-2 gap-4 md:gap-8">
            
            <div >
              <img className='rounded-xl h-[200px] w-full object-cover object-center' src={abc1} alt="" />
             
            </div>
            <div>
              <img  className='rounded-xl h-[200px] w-full object-cover object-center' src={abc2} alt="" />
              
            </div>
            <div >
              <img  className='rounded-xl h-[200px] w-full object-cover object-center' src={abc3} alt="" />
             
            </div>
            <div >
              <img  className='rounded-xl h-[200px] w-full object-cover object-center' src={abc4} alt="" />
             
            </div>
           
          </div>
        </div>
      </div>
    </div>
    );
};

export default Facilities;