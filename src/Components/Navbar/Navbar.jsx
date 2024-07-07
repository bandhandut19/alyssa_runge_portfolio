import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="mb-16">
      <span className="lg:block hidden p-5 ml-5 font-primary-one">writer</span>
      <div>
        <h1 className="text-center lg:text-6xl text-4xl font-medium italic font-name lg:mt-14 md:p-0 p-5">
          <Link to={"/"}>Alyssa Runge</Link>
        </h1>
        <div className="flex items-center justify-center gap-5">
          <h1 className="text-base text-center mt-10">
            <span className="border-b-2 border-black border-opacity-30 py-1 lg:text-lg font-primary-one font-semibold">
              <Link to={"/aboutme"}>About me</Link>
            </span>
          </h1>
          <h1 className="text-base text-center mt-10">
            <span className="border-b-2 border-black border-opacity-30 py-1 lg:text-lg font-primary-one font-semibold">
              <Link to={"/portfolio"}>Portfolio</Link>
            </span>
          </h1>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
