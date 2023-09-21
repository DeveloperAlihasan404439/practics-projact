import { NavLink } from "react-router-dom";
import logo from "../../../public/img/logo.png";
import { MdMenuBook } from 'react-icons/md';
const Header = () => {
  const navs = [
    { id: 1, navNave: "Home", pathName: "/" },
    { id: 1, navNave: "Products", pathName: "/products" },
    { id: 1, navNave: "Dateils", pathName: "/dateils" },
    { id: 1, navNave: "Sing In", pathName: "/singin" },
    { id: 1, navNave: "Login", pathName: "/login" },
  ];
  return (
    <div>
      <div className="drawer bg-[#062425]">
        <input id="my-drawer-3" type="checkbox" className="drawer-toggle" />
        <div className="drawer-content flex flex-col">
          {/* Navbar */}
          <div className=" w-11/12 mx-auto navbar flex justify-between">
            <div className="flex-none lg:hidden">
              <label htmlFor="my-drawer-3" className="btn btn-square btn-ghost">
                <MdMenuBook className="text-5xl text-white"/>
             </label>
            </div>
            <div className="end px-2 mx-2">
              <img
                src={logo}
                alt=""
                className="w-[100px] h-[40px] rounded-lg"
              />
            </div>
            <div className="flex-none hidden lg:block">
              <ul className="flex gap-4 text-2xl text-white font-medium">
                {navs.map((nav,id) => (
                  <NavLink key={id}>{nav.navNave}</NavLink>
                ))}
              </ul>
            </div>
          </div>
        </div>
        <div className="drawer-side">
          <label htmlFor="my-drawer-3" className="drawer-overlay"></label>
          <ul className="menu p-4 w-80 min-h-full bg-[#062425]">
            {/* Sidebar content here */}
            {navs.map((nav,id) => (
              <NavLink key={id} className='pb-2 text-2xl font-serif text-white'>{nav.navNave}</NavLink>
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Header;
