import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex felx-col items-center justify-center bg-black/15">
      <div className="flex flex-col items-center justify-center m-5 p-5">
        <h3 className="text-orange-500 text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl m-4 mb-2">
          Get in Touch With Us
        </h3>
        <h2 className="text-white text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-5xl">
          example@gmail.com
        </h2>
        <div  className="mt-16 mb-10 flex flex-col md:flex-row text-white gap-20 justify-center items-center">
          <Link to="/">
            <img src={Logo} alt="Logo" />
          </Link>
          <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">Street Avenue 21, CA</h4>
          <h4 className="text-lg sm:text-xl md:text-2xl lg:text-3xl xl:text-4xl">+9 0283353</h4>
        </div>
        <h4 className="text-white border-t-2 pt-10 w-full text-center text-md sm:text-lg md:text-xl lg:text-2xl xl:text-3xl">
          © {new Date().getFullYear()}. Ideapeel. All rights reserved.
        </h4>
      </div>
    </footer>
  );
};

export default Footer;
