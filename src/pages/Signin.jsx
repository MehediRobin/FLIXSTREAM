import { Link } from "react-router-dom";
import BgImage from "../assets/movie.jpg";

const Signin = () => {
  return (
    <div className="w-full h-screen">
      <div className="w-full h-full fixed bg-gradient-to-b from-black"></div>
      <img
        className=" hidden sm:block h-[100%] w-full object-cover"
        src={BgImage}
        alt=""
      />
      <div className="w-full h-screen top-[20%] z-50 px-4 py-2 fixed">
        <div className="max-w-[450px] h-[600px] mx-auto bg-black/75">
          <div className="max-w-[320px] mx-auto py-20">
            <h1 className="text-white text-3xl font-bold mb-3">Sign In</h1>
            <form className="flex flex-col">
              <input
                className="p-3 my-2 bg-gray-700 rounded"
                placeholder="Email"
                type="email"
              />
              <input
                className="p-3 my-2 bg-gray-700 rounded"
                placeholder="Password"
                type="password"
              />
              <button className="text-white bg-violet-600 py-3 mt-6 rounded">
                Sign In
              </button>
            </form>
            <div className="flex justify-between item-center my-8">
              <p className="text-gray-600 text-sm ">
                <input className="mr-1" type="checkbox" />{" "}
                <span>Remember Me</span>
              </p>
              <p className="text-gray-600 text-sm cursor-pointer hover:underline">
                Need Help?
              </p>
            </div>
            <p className="text-gray-600 font-bold text-sm flex items-center">
              New to Flixstream?{" "}
              <Link to="/signup">
                <span className="text-white ml-2">Sign Up</span>
              </Link>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Signin;
