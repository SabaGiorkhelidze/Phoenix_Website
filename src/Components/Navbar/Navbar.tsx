import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { BiMenu } from "react-icons/bi";
import Menu from "./SideBar";
import { Link } from "react-router-dom";
import logo from "../../assets/logo-cropped-removebg-preview.png";

const Navbar: React.FC = () => {
  const [changeHeader, setChangeHeader] = useState<boolean>(false);
  const [showMenu, setShowMenu] = useState<boolean>(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY >= 50) {
        setChangeHeader(true);
      } else {
        setChangeHeader(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <motion.header
      initial={{ backgroundColor: "transparent" }}
      animate={{ backgroundColor: changeHeader ? "#141E46" : "transparent" }}
      className={`fixed z-50 top-0 left-0 w-full shadow-md transition-all duration-500  ${
        changeHeader ? "text-white " : "text-black"
      }`}
    >
      <nav className="flex items-center max-w-screen-xl mx-auto  md:px-6 py-5  poppins font-semibold">
  
        {/* left  */}
        <Link to={"/"}>
          <motion.div
            whileHover={{ scale: 1.1 }}
            className="mx-3 flex md:mx-32 my-1 cursor-pointer flex-row justify-center "
          >
            <img src={logo} alt="" className="w-12 h-12 " />
            {/* <h1 className="mx-4">ფენიქსი</h1> */}
          </motion.div>
        </Link>
        <div className="flex flex-grow"></div>
  
        {/* right  */}
        <div
          className="flex mx-4 md:hidden"
          onClick={() => setShowMenu(!showMenu)}
        >
          <BiMenu className="text-xl" />
        </div>
        <div className="md:flex hidden">
          {/* <motion.div whileHover={{ scale: 1.1 }} className="mx-4 my-1">
            Add Post
          </motion.div> */}
          <Link to={"/about"}>
            <motion.div whileHover={{ scale: 1.1 }} className="mx-6 my-1">
              ჩვენს შესახებ
            </motion.div>
          </Link>
          <Link to={"/faq"}>
            <motion.div whileHover={{ scale: 1.1 }} className="mx-6 my-1">
              FAQ
            </motion.div>
          </Link>
        </div>
      </nav>

      {/* Conditional rendering of side menu */}
      {showMenu && (
        <div className="md:hidden">
          <Menu isOpen={showMenu} onClick={() => setShowMenu(false)} />
        </div>
      )}
    </motion.header>
  );
};

export default Navbar;
