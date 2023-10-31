// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/effect-flip";
import "swiper/css/pagination";
import "swiper/css/navigation";

// import required modules
import { EffectFlip, Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";

const Feedback = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/review.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  console.log(data);
  return (
    <div className="w-11/12 md:w-10/12 lg:container  mx-auto my-16 md:my-32 ">
      <div className=" mb-10 flex justify-between items-center">
        <h2 className="text-2xl md:text-4xl font-bold">Parents Feedback</h2>
        <button className="btn btn-outline border-yellow-500 text-yellow-500">
          See More
        </button>
      </div>
      <Swiper
        effect={"flip"}
        grabCursor={true}
        pagination={true}
        navigation={true}
       
        
        modules={[EffectFlip, Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map(review => (
          <SwiperSlide  key={review.id}  >
            <div className="card md:card-side bg-purple-50 shadow-xl h-[500px] md:h-[300px] w-10/12 mb-16 ">
              <figure   className=" md:w-1/2">
                <img
                  src={review?.userImage}
                  alt="user"
                className=""
                />
              </figure>
              <div className="card-body text-start ">
               
                <p>{review?.review}</p>
                <h3 className="font-semibold">{review.userName}</h3>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Feedback;
