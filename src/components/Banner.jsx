import { TypeAnimation } from "react-type-animation";
import banner from "../assets/images/banner.jpg";
const Banner = () => {
  return (
    <div
      className="hero min-h-screen"
      style={{
        backgroundImage: `url(${banner})`,
      }}
    >
      <div className="hero-overlay bg-opacity-70"></div>
      <div className="hero-content text-center text-white">
        <div
          data-aos="fade-up"
          data-aos-duration="3000"
          className="md:w-3/4 space-y-8 mt-20"
        >
          <p className="text-lg font-bold text-yellow-500 ">
            Morning Glory School & Collage
          </p>
          <h1 className="mb-5 text-2xl md:text-5xl font-bold ">
            Providing Best Education For
          </h1>
          <TypeAnimation
            sequence={[
              " Brighter Future...",
              2000,
              " Better Employment...",
              4000,
            ]}
            speed={50}
            repeat={Infinity}
            className="font-bold text-transparent mt-5  text-2xl md:text-5xl  bg-clip-text bg-gradient-to-r from-[#af0fee] to-[#ee92e9]"
          />

          <p className="mb-5 text-xs md:text-[12px]">
            Provident cupiditate voluptatem et in. Quaerat fugiat ut assumenda
            excepturi exercitationem quasi. In deleniti eaque aut repudiandae et
            a id nisi.
          </p>
          <button className="btn btn-outline  border-yellow-500 text-yellow-500">
            Get Admission
          </button>
        </div>
      </div>
    </div>
  );
};

export default Banner;
