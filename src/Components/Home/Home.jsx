import AboutMe from "../AboutMe/AboutMe";
import MediaShowCasing_01 from "../MediaShowCasing/MediaShowCasing_01";
// import MediaShowCasing_02 from "../MediaShowCasing/MediaShowCasing_02";
// import MediaShowCasing_03 from "../MediaShowCasing/MediaShowCasing_03";
import Portfolio from "../Portfolio/Portfolio";
import Services from "../Services/Services";
import ThemeBannerText from "../ThemeBannerText/ThemeBannerText";

const Home = () => {
  return (
    <div>
      <ThemeBannerText></ThemeBannerText>
      <AboutMe></AboutMe>
      <MediaShowCasing_01></MediaShowCasing_01>
      {/* <MediaShowCasing_02></MediaShowCasing_02> */}
      {/* <MediaShowCasing_03></MediaShowCasing_03> */}
      <Services></Services>
      <Portfolio></Portfolio>
    </div>
  );
};

export default Home;
