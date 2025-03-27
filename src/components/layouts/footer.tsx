import Logo from "../../assets/Logo.svg";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="flex felx-col items-center justify-center bg-black">
      <div className="flex flex-col items-center justify-center m-5 p-5">
        <h3 className="text-orange-500 text-xl sm:text-2xl md:text-3xl m-4 mb-2">
          Get in Touch With Us
        </h3>
        <h2 className="text-white text-3xl sm:text-4xl md:text-5xl lg:text-6xl">
          exaple@gmail.com
        </h2>
        <Link to="/" className="mt-16 mb-10">
          <img src={Logo} alt="Logo" />
        </Link>
        <h4 className="text-white border-t-2 pt-10">© {new Date().getFullYear()}. Ideapeel. All rights reserved. </h4>
      </div>
    </footer>
  );
};

export default Footer;
