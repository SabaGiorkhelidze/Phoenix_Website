import { BiX } from "react-icons/bi";
import { Link } from "react-router-dom";
// import { Link } from "react-router-dom";

type propsType = {
  onClick: () => boolean;
};
const Menu = ({ onClick }: propsType) => {
  return (
    <div>
      <div className=" opacity-100 h-full w-10/12 bg-[#141E46] text-white z-50 overflow-hidden top-0 right-0 fixed">
        <div className="">
          {/* go back */}
          <div className="flex flex-row items-center">
            <div className="left-0 py-10 px-10 w-2/12">
              <BiX className="text-black text-4xl" onClick={onClick} />
            </div>
          </div>
          {/* items */}
          <div className="top-0">
            <div className="flex justify-center items-center flex-col gap-10 ">
              {/* <h1 className="text-2xl">Catalog</h1> */}
              {/* span  */}
              <Link to={"/about"}>
                <h1 className="text-2xl">ჩვენს შესახებ</h1>
              </Link>
              <Link to={'/'}></Link>
              <h1 className="text-2xl">FAQ</h1>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Menu;
  