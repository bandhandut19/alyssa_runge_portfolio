const AboutMe = () => {
  return (
    <div className="mb-40 lg:mt-0 ">
      <h1
        className="text-center lg:text-6xl text-4xl font-primary-one font-bold mb-14 
  border-b-4 border-slate-600 border-opacity-30 py-1"
      >
        About Me
      </h1>
      <div className="grid lg:grid-cols-2 grid-cols-1 gap-10 items-center justify-center">
        <div>
          <img
            className="rounded-full"
            src="https://i.postimg.cc/xdrCwfzY/headshot-1-modified.png"
            // src="https://i.postimg.cc/MZ3LZvK7/headshot-1.png"
            alt=""
          />
        </div>
        <div>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Ipsa sit,
            odit iste sequi nobis 
          </p>
        </div>
      </div>
    </div>
  );
};

export default AboutMe;
