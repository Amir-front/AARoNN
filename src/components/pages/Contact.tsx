import Img1 from "../../assets/contact/1.png";
const Contact = () => {
  return (
    <section className="flex flex-col text-white mb-16 mt-20 p-5 m-5">
      <div className=" pb-24 border-b-2 border-white 2xl:flex 2xl:flex-col 2xl:justify-center 2xl:items-center">
        <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl">
          Contact Me
        </h1>
        <p className="text-lg sm:text-lg md:text-xl lg:text-2xl xl:text-3xl mt-4 text-gray-400">
          For Any Project Knock Us
        </p>
      </div>
      <div className="mt-20 grid grid-cols-1 gap-10 md:grid-cols-2">
        <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl col-span-1">
          Get in Touch With Us
        </h1>
        <form className="col-span-1 grid grid-cols-4 text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl gap-20">
          <input
            type="text"
            placeholder="NAME"
            className="text-white border-b-2 border-white outline-none p-5 col-span-4"
          />
          <input
            type="text"
            placeholder="SUBJECT"
            className="text-white border-b-2 border-white outline-none p-5 col-span-4"
          />
          <input
            type="text"
            placeholder="MESSAGE"
            className="text-white border-b-2 border-white outline-none p-5 col-span-4"
          />
          <button className="justify-self-center self-stretch p-5 bg-orange-400 hover:py-6 transition-all cursor-pointer rounded-4xl col-span-1 ml-20">
            SEND
          </button>
        </form>
      </div>
      <img src={Img1} alt="img" className="hidden md:block m-5 mt-10" />
    </section>
  );
};

export default Contact;
