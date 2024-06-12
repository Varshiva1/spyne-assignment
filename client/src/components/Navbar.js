import React from 'react';
import { Link, useNavigate } from 'react-router-dom';

function Navbar({ isAuthenticated }) {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem('token');
    navigate('/login');
  };

  return (
    <nav className="bg-gray-800 py-4">
      <div className="container mx-auto flex justify-between items-center">
        <Link to="/" className="text-white font-bold text-xl">
          My App
        </Link>
        <ul className="flex space-x-4">
          <li>
            <Link to="/users" className="text-white hover:text-gray-300">
              User List
            </Link>
          </li>
          <li>
            <Link to="/create-discussion" className="text-white hover:text-gray-300">
              Create Discussion
            </Link>
          </li>
          <li>
            <Link to="/discussions" className="text-white hover:text-gray-300">
              Discussion List
            </Link>
          </li>
          {isAuthenticated && (
            <li>
              <button onClick={handleLogout} className="text-white hover:text-gray-300">
                Logout
              </button>
            </li>
          )}
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
