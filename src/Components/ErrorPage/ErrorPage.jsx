import { Link } from "react-router-dom";

const ErrorPage = () => {
  return (
    <div className="hero bg-base-200 min-h-screen font-primary-one">
      <div className="hero-content text-center">
        <div className="max-w-md">
          <h1 className="lg:text-6xl text-4xl font-bold text-red-500">
            Page not Found
          </h1>
          <p className="py-6 text-2xl">
            404 Requested page not found. Kindly return to home page
          </p>
          <button className="btn px-8 py-1 bg-black text-white rounded-sm hover:bg-red-500 hover:text-black">
            <Link to={"/"}>Go to Home</Link>
          </button>
        </div>
      </div>
    </div>
  );
};

export default ErrorPage;
