import { Link } from "react-router-dom";
import Arrow from "../../../assets/Arrow.svg"

const Hero = () => {
  return (
    <section className="text-white flex flex-col justify-center items-center mt-32 mb-32">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl w-1/2 text-center">Adaptive Logo Design for Your Brand</h1>
        <Link to="/works/#" className="cursor-pointer">
            <button className="border-2 border-orange-400 bg-orange-400 flex flex-row p-5 rounded-4xl justify-center items-center mt-20 hover:py-6 cursor-pointer active:py-6 transition-all text-lg md:text-xl lg:text-2xl">Explore works <img src={Arrow} alt="Arrow" className="ml-5" /></button>
        </Link>
    </section>
  )
}

export default Hero