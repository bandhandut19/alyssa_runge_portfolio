import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

const CreativeWorks = () => {
  const [data, setData] = useState([]);
  useEffect(() => {
    fetch("/creativeWorks.json")
      .then((res) => res.json())
      .then((data) => setData(data))
      .catch((error) =>
        console.error("Error Fetching Creative works data", error)
      );
  }, []);
  return (
    <div className="flex flex-col items-center justify-center gap-10 lg:gap-20">
      <h1 className="text-center lg:text-5xl text-3xl font-primary-one font-semibold">
        <span className="border-b-4 border-slate-600 border-opacity-15 cursor-pointer">
          Creative Works
        </span>
      </h1>

      <div className="grid lg:grid-cols-2 lg:border-l-4 lg:border-r-4 lg:px-10 grid-cols-1 gap-20 items-center justify-center">
        {data?.map((single, index) => (
          <div
            className=" bg-slate-200 w-full border-2 border-slate-800 border-opacity-20 shadow-2xl"
            key={index}
          >
            <div className="card-body">
              <h2 className="card-title">{single?.title}</h2>
              <p>
                {single?.description ? single?.description : "Alyssa Runge"}
              </p>
              <p>
                {single?.url ? (
                  <p>
                    <span className="font-bold"> Visit Link: </span>
                    <Link to={single?.url} target="_blank">
                      Click Here
                    </Link>
                  </p>
                ) : (
                  ""
                )}
              </p>
            </div>
            <figure className="flex items-center justify-center">
              <img src={single.image} alt="Creative-works" />
            </figure>
          </div>
        ))}
      </div>
    </div>
  );
};

export default CreativeWorks;
