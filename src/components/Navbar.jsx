import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="flex items-center justify-between pt-4 px-8 w-full absolute z-[100]">
      <Link to="/">
        <h1 className="text-violet-600 text-4xl font-bold cursor-pointer">
          FLIXTREAM
        </h1>
      </Link>
      <div>
        <Link to="/signin">
          <button className="text-white mr-4">Sign In</button>
        </Link>
        <Link to="/signup">
          <button className="text-white bg-violet-600 px-6 py-2 rounded cursor-pointer">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
