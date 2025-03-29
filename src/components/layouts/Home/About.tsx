import { Link } from "react-router-dom";
import Pic from "../../../assets/Home/1.png";

const About = () => {
  return (
    <section className="flex flex-col md:flex-row justify-center items-center p-5 text-white">
      <div className="w-full md:w-1/2 m-20 mb-5">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl">Let’s get know about me closer</h1>
        <p className="text-gray-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-6">
          Aaronn is a New York-based visual designer focusing on branding and
          visual identity. Her portfolio showcases her wide range of work,
          spanning books, posters and web design.
        </p>
        <Link to="/about">
          <button className="border-2 border-orange-400 bg-orange-400 flex flex-row p-5 rounded-4xl justify-center items-center mt-10 hover:py-6 cursor-pointer active:py-6 transition-all text-xl md:text-2xl lg:text-3xl">Discover More About Me</button>
        </Link>
      </div>
      <img src={Pic} alt="Pic" className="mt-12" />
    </section>
  );
};

export default About;
