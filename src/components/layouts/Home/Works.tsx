import { Link } from "react-router-dom";
import Img1 from "../../../assets/Home/2.png";
import Img2 from "../../../assets/Home/3.png";
import Img3 from "../../../assets/Home/4.png";
import Img4 from "../../../assets/Home/5.png";
import Arrow from "../../../assets/Arrow.svg";

const Works = () => {
  return (
    <section className="flex flex-col justify-center items-center p-5 mt-24 md:mt-28">
      <h1 className="text-white text-6xl sm:text-7xl md:text-8xl lg:text-9xl text-center">
        My Projects Highlight
      </h1>
      <Link to="./works">
        <button className="rounded-4xl border-2 border-orange-400 text-white flex flex-row justify-center items-center p-5 cursor-pointer hover:bg-orange-400 active:bg-amber-400 transition-all hover:py-6 active:py-6 my-10 text-xl md:text-2xl lg:text-3xl">
          Explore More <img src={Arrow} alt="Arrow" className="ml-5" />
        </button>
      </Link>
      <div className="mt-10 grid grid-cols-1 md:grid-cols-2 gap-20 md:gap-32">
        <div className="flex flex-col text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white">
          <img src={Img1} alt="img" />
          <h1 className="mt-6">Brand Journey Improvements</h1>
        </div>
        <div className="flex flex-col text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white">
          <img src={Img2} alt="img" />
          <h1 className="mt-6">Brand Grouping</h1>
        </div>
        <div className="flex flex-col text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white">
          <img src={Img3} alt="img" />
          <h1 className="mt-6">NFT Glimps</h1>
        </div>
        <div className="flex flex-col text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white">
          <img src={Img4} alt="img" />
          <h1 className="mt-6">Brand Suggestions</h1>
        </div>
      </div>
    </section>
  );
};

export default Works;
