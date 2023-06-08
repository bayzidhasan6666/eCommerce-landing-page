import React from 'react';

const Navbar = () => {
  return (
    <div className="navbar rounded-lg bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 sticky top-0 z-10">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu bg-gradient-to-r from-purple-400 via-pink-500 text-white to-red-500 menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-52"
          >
            <li>
              <a>Home</a>
            </li>

            <li>
              <a>About</a>
            </li>
            <li>
              <a>Blog</a>
            </li>
          </ul>
        </div>
        <a className="btn font-serif btn-ghost normal-case text-xl text-white">
          UY Shop
        </a>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu text-white font-semibold menu-horizontal px-1">
          <li>
            <a>Home</a>
          </li>

          <li>
            <a>About</a>
          </li>
          <li>
            <a>Blog</a>
          </li>
        </ul>
      </div>
      <div className="navbar-end">
        <div className="dropdown dropdown-end">
          <label tabIndex={0} className="btn btn-ghost btn-circle avatar">
            <div className="w-10 rounded-full">
              <img
                src="https://images.pexels.com/photos/674010/pexels-photo-674010.jpeg?cs=srgb&dl=pexels-anjana-c-674010.jpg&fm=jpg"
                alt="Profile"
              />
            </div>
          </label>
          <ul
            tabIndex={0}
            className="menu bg-gradient-to-r from-purple-400 via-pink-500 to-red-500 menu-sm dropdown-content mt-3 p-2 shadow bg-white rounded-box w-fit"
          >
            <li>
              <a className="justify-between">Profile</a>
            </li>
            <li>
              <a>Settings</a>
            </li>
            <li>
              <a>Logout</a>
            </li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
