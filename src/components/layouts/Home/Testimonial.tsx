import Img from '../../../assets/Home/“.png'
const Testimonial = () => {
  return (
    <section className="flex flex-row p-5 md:m-5">
      <div className="w-3/4">
        <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl xl:text-9xl text-white">Testimonial</h1>
        <p className="text-gray-400 text-2xl sm:text-3xl md:text-4xl lg:text-5xl xl:text-6xl mt-6 md:w-3/4">
          “Aaronn was fantastic to work with from start to finish. We were
          looking for a simple, stand-out logo and he delivered. I tried
          designing the logo myself thinking I wouldn’t need to pay the money
          for a professional graphic designer but I was very wrong. Working with
          Aaronn was worth every penny and was surprisingly affordable! I
          remember him saying simplicity is key to a successful logo and boy he
          was right. I can’t thank Aaronn enough for his effort and
          professionalism. I would recommend him to anyone looking for a
          design!”
        </p>
        <h3 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl text-white mt-10">-Martin lee</h3>
      </div>
      <div className="w-1/5 hidden md:flex flex-col items-start">
        <img src={Img} alt="img" className='w-2xl'/>
      </div>
    </section>
  );
};

export default Testimonial;
