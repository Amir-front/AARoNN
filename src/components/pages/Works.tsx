import Img1 from "../../assets/Works/1.png";
import Img2 from "../../assets/Works/2.png";
import Img3 from "../../assets/Works/3.png";
import Img4 from "../../assets/Works/4.png";
import Img5 from "../../assets/Works/5.png";
import Img6 from "../../assets/Works/6.png";
import Img7 from "../../assets/Works/7.png";
import Img8 from "../../assets/Works/8.png";

const Works = () => {
  return (
    <section className="p-5 text-white flex flex-col mb-16 mt-20">
      <div className="pb-24 border-b-2 border-white 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          My works
        </h1>
        <p className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 text-gray-400">
          Showcase About Works
        </p>
      </div>
      <div className="mt-16 gap-20 md:gap-32 text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl flex flex-col justify-center items-center">
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-4 gap-20 md:gap-32">
          <div>
            <img src={Img1} alt="img" />
            <h4 className="mt-6">Orvillebury</h4>
          </div>
          <div>
            <img src={Img2} alt="img" />
            <h4 className="mt-6">West Lavada</h4>
          </div>
          <div className="">
            <img src={Img3} alt="img" />
            <h4 className="mt-6">Rempelshire</h4>
          </div>
          <div className="">
            <img src={Img8} alt="img" />
            <h4 className="mt-6">Lake Trevor</h4>
          </div>
        </div>
        <div className="flex flex-col md:flex-col lg:flex-row gap-20 md:gap-32">
          <div>
            <img src={Img4} alt="img" />
            <h4 className="mt-6">Delfinaland</h4>
          </div>
          <div>
            <img src={Img5} alt="img" />
            <h4 className="mt-6">Buckridgeburgh</h4>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 2xl:grid-cols-2 gap-20 md:gap-32">
          <div>
            <img src={Img6} alt="img" />
            <h4 className="mt-6">Pfefferstad</h4>
          </div>
          <div>
            <img src={Img7} alt="img" />
            <h4 className="mt-6">South Adrienne</h4>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Works;
