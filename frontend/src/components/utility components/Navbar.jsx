import { Link } from 'react-router-dom';

const Navbar = () => {
  return (
    <div className="bg-black text-blue-500 p-4 flex-row ">
      <div className="flex-nowrap flex-row md:flex-row justify-center-safe items-center space-y-2 md:space-y-0 md:space-x-6">
        <Link to="/" className="text-center px-4 py-2 cursor-pointer space">Home</Link>
        <Link to="/register" className="text-center px-4 py-2 cursor-pointer">Register</Link>
        <Link to="/login" className="text-center px-4 py-2 cursor-pointer">Login</Link>
        <Link to="/about" className="text-center px-4 py-2 cursor-pointer">About</Link>
        <Link to="/cart" className="text-center px-4 py-2 cursor-pointer">Cart</Link>
      </div>
    </div>
  );
};

export default Navbar;
