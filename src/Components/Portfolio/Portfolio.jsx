import ClassProjects from "./ClassProjects/ClassProjects";
import CreativeWorks from "./CreativeWorks/CreativeWorks";
import ProofReading from "./ProofReading/ProofReading";
import MediaShowCasing_02 from "../MediaShowCasing/MediaShowCasing_02";
import MediaShowCasing_03 from "../MediaShowCasing/MediaShowCasing_03";
const Portfolio = () => {
  return (
    <div>
      <h1
        className="text-center lg:text-6xl text-4xl font-primary-one font-bold mb-14 
      border-b-4 border-slate-600 border-opacity-30 py-1"
      >
        Portfolio
      </h1>

      <div className="flex flex-col gap-32 font-primary-one">
        <ProofReading></ProofReading>
        <MediaShowCasing_02></MediaShowCasing_02>
        <ClassProjects></ClassProjects>
        <MediaShowCasing_03></MediaShowCasing_03>
        <CreativeWorks></CreativeWorks>
      </div>
    </div>
  );
};

export default Portfolio;
