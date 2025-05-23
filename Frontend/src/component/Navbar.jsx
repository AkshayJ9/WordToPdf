// import "./index.css";
const Navbar = () => {
  return (
    <>
      <div className="max-w-screen-2xl mx-auto container px-6 py-3 md:px-40 shadow-lg h-16 fixed">
        <div className="flex justify-between">
          <h1 className="text-2xl cursor-pointer font-bold ">
            Word<span className="text-3xl text-green-700">To</span>Pdf
          </h1>
          <h1 className="text-2xl cursor-pointer font-bold mt-1 hover:scale-125 duration-500">
            Home
          </h1>
        </div>
      </div>
    </>
  );
};

export default Navbar;
