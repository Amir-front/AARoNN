import { Link } from "react-router-dom";
import Logo from "../../assets/Logo.svg";
import Menu from "../../assets/Menu.png";
import { useState } from "react";
const Navbar = () => {
  const [open, setOpen] = useState<boolean>(false);
  const handleOpen = () => {
    if (open == false) {
      setOpen(true);
    } else {
      setOpen(false);
    }
  };
  return (
    <>
      <nav className="p-5 flex flex-row justify-around mt-5 items-center mb-0">
        <Link to="/">
          <img src={Logo} alt="Logo" className="w-auto" />
        </Link>
        <div className="hidden md:block transition-all">
          <Link to="/" className="text-2xl text-white mx-5 hover:text-gray-500 transition-colors">
            Home
          </Link>
          <Link
            to="/works"
            className="text-2xl text-white mx-5 hover:text-gray-500 transition-colors"
          >
            Works
          </Link>
          <Link
            to="/about"
            className="text-2xl text-white mx-5 hover:text-gray-500 transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-2xl text-white mx-5  p-5 border-2 border-gray-500 text-center rounded-4xl hover:text-black/85 hover:bg-gray-500 w-36 transition-colors active:bg-gray-500 active:text-black/85"
          >
            Contact
          </Link>
        </div>
        <img src={Menu} alt="menu" className="md:hidden" onClick={handleOpen} />
      </nav>
      {open ? (
        <div className="flex flex-col p-5 justify-center items-center mt-0">
          <Link to="/" className="text-2xl text-white hover:text-gray-500 p-5 transition-colors">
            Home
          </Link>
          <Link
            to="/works"
            className="text-2xl text-white  hover:text-gray-500 p-5 transition-colors"
          >
            Works
          </Link>
          <Link
            to="/about"
            className="text-2xl text-white  hover:text-gray-500 p-5 transition-colors"
          >
            About
          </Link>
          <Link
            to="/contact"
            className="text-2xl text-white p-5 border-2 text-center border-gray-500 rounded-4xl hover:text-black/85 hover:bg-gray-500 w-36 transition-colors active:bg-gray-500 active:text-black/85"
          >
            Contact
          </Link>
        </div>
      ) : (
        <></>
      )}
    </>
  );
};

export default Navbar;
