const Navbar = () => {
  return (
    <nav className="max-w-screen-xl flex justify-between m-auto h-20 items-center max-sm:max-w-screen ">
      <div className="logo">
        <img src="/NavbarAssets/logo.png" alt="" />
      </div>

      <ul className="flex gap-7 text-lg font-medium uppercase max-sm:hidden ">
        <li href="#">Menu</li>
        <li href="#">Location</li>
        <li href="#">About</li>
        <li href="#">Contact</li>
      </ul>

      <button className="py-2 px-4 bg-red-600 font-medium text-white h-8 flex items-center rounded-sm">
        Login
      </button>
    </nav>
  );
};

export default Navbar;
