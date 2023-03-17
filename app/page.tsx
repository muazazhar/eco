import HeroBanner from "../components/HeroBanner";
import Categories from "../components/Categories";
import BestSelling from "../components/BestSelling";
import LatestMen from "../components/LatestMen";
import LatestWomen from "../components/LatestWomen";
import NewsLetter from "../components/NewsLetter";
import FaqBanner from "../components/FaqBanner";

const Home = () => {
  return (
    <>
      <HeroBanner />
      <Categories />
      <LatestMen />
      <BestSelling />
      <LatestWomen />
      <NewsLetter />
      <FaqBanner />
    </>
  );
};

export default Home;
