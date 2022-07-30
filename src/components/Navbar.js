import { signOut } from "firebase/auth";
import { useAuthState } from "react-firebase-hooks/auth";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import { auth } from "../apis/firebase";

export const Navbar = () => {
  const navigate = useNavigate();
  const [user] = useAuthState(auth);

  const onLogout = async () => {
    try {
      await signOut(auth);
      navigate("/login");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <nav
        className="sticky top-0 flex items-center justify-between flex-wrap p-6 z-50"
        style={{ backgroundColor: "#1F2326" }}
      >
        <div className="flex items-center text-white mr-6 px-6 justify-between">
          <div className="pr-4">
            <svg
              width="40"
              version="1.1"
              viewBox="0 0 600 305.41"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g fill="white">
                <path d="m404.82 290.61-.39225-11.291 39.032-.46128.35814-12.305-39.851-.49538-.39793-11.431 52.503-1.2291.43285-13.5h-70.833l-2.1115 65.51h74.251l-.52138-13.525zm-353.18-24.086-.83372 12.256 19.699.65862-.24932 12.442-41.232-1.209 1.7963-35.938 56.692-1.3121-.81934-13.525h-73.228l-6.5665 65.51h83.436l-2.1631-39.519zm516.81 5.0681-54.116-9.1478.2347-7.0907 51.77-1.931-1.3064-13.525h-66.547l-3.4036 33.955 55.016 9.566.24932 6.2399-57.242 2.2232-1.4038 13.525h80.115z" />
                <path d="m347.63 305.41-6.5664-65.51h-18.851l-27.082 31.228-27.085-31.228h-18.851l-6.5664 65.51h22.146l2.1201-42.499 28.237 28.973 28.231-28.973 2.1258 42.499z" />
                <path d="m254.55 0h-44.324l-4.0338 202.59h53.552z" />
                <path d="m391.89 158.52-48.907 1.5786-1.6215-119.15 51.151 1.5499zm42.862-158.43h-138.19l-5.3804 202.5h153.38z" />
                <path d="m600 44.336-4.9363-44.335h-136.15l1.1517 39.493 43.547 1.507 4.4635 161.59h53.66l-16.052-160.14z" />
                <path d="m73.64 41.444 42.711-1.4296 4.8675 40.364-49.297 23.286zm49.899 161.15h58.167l-37.909-90.925 30.251-16.528-20.668-95.139h-148.48l-4.8875 43.905 33.216-1.1088-16.018 159.8h51.984l1.4067-50.939 37.456-20.462z" />
                <path d="m151.82 275.89 4.5037-21.433 21.625-.97698 4.518 21.507zm37.044 29.526h22.424l-17.743-65.513h-52.615l-17.74 65.513h22.424l3.4723-16.528 36.402.47021z" />
              </g>
            </svg>
          </div>
          <div className="border-r-2 h-5"></div>
          <div className="pl-4">
            <svg
              width="28"
              viewBox="0 0 48 40"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <path
                d="M0 19.8347V0L31.9451 40H15.9726L0 19.8347Z"
                fill="white"
              />
              <path
                d="M42.6484 26.6116H27.0051L48 0V19.8347L42.6484 26.6116Z"
                fill="white"
              />
            </svg>
          </div>
        </div>
        <div className="block lg:hidden">
          <button className="flex items-center px-3 py-2 border rounded text-white border-teal-400 hover:text-red-600 hover:border-white">
            <svg
              className="fill-current h-3 w-3"
              viewBox="0 0 20 20"
              xmlns="http://www.w3.org/2000/svg"
            >
              <title>Menu</title>
              <path d="M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z" />
            </svg>
          </button>
        </div>
        <div className="w-full block flex-grow lg:flex lg:items-center lg:w-auto">
          <div className="text-sm lg:flex-grow uppercase">
            <Link
              to="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-600 mr-4"
            >
              HOME
            </Link>
            <Link
              to="/agents"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-600 mr-4"
            >
              AGENTS
            </Link>
            <Link
              to="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-600 mr-4"
            >
              WEAPONS
            </Link>
            <Link
              to="#responsive-header"
              className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-600 mr-4"
            >
              MAPS
            </Link>
          </div>
          {!user ? (
            <div className="px-4 lg:w-auto text-white">
              <Link
                to="/login"
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-600 mr-4"
              >
                Sign in Here!
              </Link>
            </div>
          ) : (
            <div className="px-4 lg:w-auto text-white">
              Hi {user.email} {}
              <Link
                to="#responsive-header"
                onClick={onLogout}
                className="block mt-4 lg:inline-block lg:mt-0 text-white hover:text-red-600 mr-4"
              >
                | Sign Out Here!
              </Link>
            </div>
          )}
        </div>
      </nav>
    </>
  );
};
