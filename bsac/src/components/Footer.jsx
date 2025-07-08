import logo from '../assets/logo.png';

const Footer = () => {
  return (
    <footer className="bg-red-600 text-white py-6 mt-10">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col sm:flex-row justify-between items-center">
        <div className="flex items-center space-x-2">
         
          <span className="font-bold text-lg"><img className='h-11 w-auto md:h-10 border-xl' src={logo} alt="" /></span>
        </div>
        <div className="flex space-x-4 mt-4 sm:mt-0">
          <a href="/" className="hover:underline">Home</a>
          <a href="/donors" className="hover:underline">Find Donors</a>
          <a href="/register" className="hover:underline">Donate Blood</a>
          <a href="/about" className="hover:underline">About</a>
        </div>
        <div className="text-sm mt-4 sm:mt-0 text-center sm:text-right">
          © {new Date().getFullYear()} BSAC. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
