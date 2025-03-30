import Img1 from "../../assets/about/1.png";
import Img2 from "../../assets/about/2.png";
const About = () => {
  return (
    <section className="flex flex-col text-white mb-16 mt-20 p-5 m-5">
      <div className=" pb-24 border-b-2 border-white 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          About Me
        </h1>
        <p className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 text-gray-400">
          Little Brief About Myself
        </p>
      </div>
      <div className="mt-20">
        <div className="flex flex-col md:flex-row gap-2 md:gap-20">
          <h5 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl ">
            My mission is to make design easier.
          </h5>
          <p className="text-gray-400 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl mt-6 ">
            Create custom Designs with AARONN that converts more visitors than
            any website. With lots of unique design, you can easily select a
            logo without hassle. Create custom landing logos with AARONN that
            converts more visitors than any website. With lots of revisions, you
            can easily build a logo without porbolem.
          </p>
        </div>
        <div className="flex flex-col xl:flex-row justify-around gap-5 xl:gap-0 mt-10">
          <img src={Img1} alt="img" />
          <img src={Img2} alt="img" />
        </div>
      </div>
      <div className="mt-24">
        <h6 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          Follow me on:
        </h6>
        <div className="mt-10 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl grid md:grid-cols-2 gap-20 justify-center items-center">
          <a href="#">
            <h4 className="col-span-1">Dribble</h4>
          </a>
          <a href="#">
            <h4 className="col-span-1">Twitter</h4>
          </a>
          <a href="#">
            <h4 className="col-span-1">Facebook</h4>
          </a>
          <a href="#">
            <h4 className="col-span-1">Instagram</h4>
          </a>
        </div>
      </div>
    </section>
  );
};

export default About;
