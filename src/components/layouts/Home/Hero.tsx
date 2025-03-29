import { Link } from "react-router-dom";
import Arrow from "../../../assets/Arrow.svg"

const Hero = () => {
  return (
    <section className="text-white flex flex-col justify-center items-center mt-32 mb-32">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl w-1/2 text-center">Adaptive Logo Design for Your Brand</h1>
        <Link to="/works" className="cursor-pointer">
            <button className="border-2 border-orange-400 bg-orange-400 flex flex-row p-5 rounded-4xl justify-center items-center mt-20 hover:py-6 cursor-pointer active:py-6 transition-all text-xl md:text-2xl lg:text-3xl">Explore works <img src={Arrow} alt="Arrow" className="ml-5" /></button>
        </Link>
    </section>
  )
}

export default Hero