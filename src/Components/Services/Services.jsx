import ServiceDetails from "./ServiceDetails/ServiceDetails";

const Services = () => {
  return (
    <div className="mt-20 mb-24 lg:min-h-screen w-full">
      <h1
        className="text-center lg:text-6xl text-4xl font-primary-one font-bold mb-14 
  border-b-4 border-slate-600 border-opacity-30 py-1"
      >
        My Services
      </h1>

      <div className="">
        <ServiceDetails></ServiceDetails>
      </div>
    </div>
  );
};

export default Services;
