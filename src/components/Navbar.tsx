import React from "react";
import { Menu } from "lucide-react";
import { Link, To, useNavigate } from "react-router-dom";

export default function Navbar() {
  const [isOpen, setIsOpen] = React.useState(false);
  const navigate = useNavigate();

  // Close the mobile menu, navigate to the route, and scroll to the top
  const handleLinkClick = (route: To) => {
    setIsOpen(false);
    navigate(route);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <nav className="bg-white shadow-lg fixed w-full z-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex items-center">
            <Link to="/" className="flex-shrink-0 flex items-center">
              <span className="text-xl font-bold text-gray-800">
                Toubkal Climbers
              </span>
            </Link>
          </div>

          <div className="hidden md:flex items-center space-x-8">
            <Link to="/" className="text-gray-700 hover:text-gray-900">
              Home
            </Link>
            <Link to="/routes" className="text-gray-700 hover:text-gray-900">
              Routes
            </Link>
            <Link to="/gallery" className="text-gray-700 hover:text-gray-900">
              Gallery
            </Link>
            <Link to="/plans" className="text-gray-700 hover:text-gray-900">
              Plans
            </Link>
            <Link to="/contact" className="text-gray-700 hover:text-gray-900">
              Contact
            </Link>
          </div>

          <div className="md:hidden flex items-center">
            <button
              onClick={() => setIsOpen(!isOpen)}
              className="inline-flex items-center justify-center p-2 rounded-md text-gray-700 hover:text-gray-900 focus:outline-none"
            >
              <Menu className="h-6 w-6" />
            </button>
          </div>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            <button
              onClick={() => handleLinkClick("/")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Home
            </button>
            <button
              onClick={() => handleLinkClick("/routes")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Routes
            </button>
            <button
              onClick={() => handleLinkClick("/gallery")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Gallery
            </button>
            <button
              onClick={() => handleLinkClick("/plans")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Plans
            </button>
            <button
              onClick={() => handleLinkClick("/contact")}
              className="block w-full text-left px-3 py-2 text-gray-700 hover:text-gray-900"
            >
              Contact
            </button>
          </div>
        </div>
      )}
    </nav>
  );
}
