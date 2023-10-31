// Import Swiper styles
import "swiper/css";
import "swiper/css/pagination";
import "swiper/css/navigation";

import { Swiper, SwiperSlide } from "swiper/react";

// import required modules
import { Pagination, Navigation } from "swiper/modules";
import { useEffect, useState } from "react";
const Highlights = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/eventData.json")
      .then((res) => res.json())
      .then((data) => setData(data));
  }, []);
  return (
    <div id="highlights" className="w-11/12 md:w-10/12 lg:container  mx-auto my-16 md:my-32 ">
      <div className=" mb-10 flex justify-between items-center">
        <h2 className="text-2xl md:text-4xl font-bold">Campus Life</h2>
        <button className="btn btn-outline border-yellow-500 text-yellow-500">
          See More
        </button>
      </div>
      <Swiper
        slidesPerView={1}
        spaceBetween={10}
       
        pagination={{
          clickable: true,
        }}
        navigation={true}
        loop={true}
        breakpoints={{
          640: {
            slidesPerView: 1,
            spaceBetween: 20,
          },
          768: {
            slidesPerView: 2,
            spaceBetween: 40,
          },
          1024: {
            slidesPerView: 3,
            spaceBetween: 50,
          },
        }}
        modules={[Pagination, Navigation]}
        className="mySwiper"
      >
        {data.map((d) => (
          <SwiperSlide key={d.id}>
            <div className="card bg-base-100 shadow-xl">
              <figure>
                <img src={d?.image} alt="event" />
              </figure>
              <div className="card-body">
                <p>{d?.aboutEvent}</p>
              </div>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Highlights;
