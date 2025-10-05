import { Link } from "react-router-dom";
import Button from "./Button";

const Navbar = () => {
  return (
    <header className="bg-white shadow-sm sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex flex-wrap items-center justify-between h-16">
          {/* Logo and Brand */}
          <div className="flex items-center space-x-3 flex-shrink-0">
            <div className="w-10 h-10 bg-gradient-to-r from-blue-600 to-indigo-600 rounded-lg flex items-center justify-center text-white font-bold">
              SC
            </div>
            <div>
              <span className="text-lg font-semibold text-gray-800">
                ShopCraft
              </span>
            </div>
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-2 mt-2 sm:mt-0">
            <Link to={"/signin"}>
              <Button variant="primary">Sign In</Button>
            </Link>
            <Link to={"/signup"}>
              <Button variant="primary">Register</Button>
            </Link>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Navbar;
