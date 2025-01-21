import Layout from "../components/Layout";
import Appits from "../containers/Home/Appits";
import Benefits from "../containers/Home/Benifits";
import Download from "../containers/Home/Download";
import FAQs from "../containers/Home/FAQs";
import Feature from "../containers/Home/Feature";
import Header from "../containers/Home/Header";
import Introduce from "../containers/Home/Introduce";
import Price from "../containers/Home/Price";
import Social from "../containers/Home/Social";
import Testimonials from "../containers/Home/Testimonials";

const HomePage = () => {
  return (
    <Layout>
      <div className="pt-[175px] w-full max-w-[450px] md:max-w-[750px] xl:max-w-[1320px] px-[16px] md:px-[60px]">
        <div className="flex flex-col gap-[80px] md:gap-[200px] items-center">
          <Header />
          <Introduce />
          <Benefits />
          <Social />
          <Appits />
          <Feature />
          <Price />
        </div>
      </div>
      <div className="w-full max-w-[450px] md:max-w-full pt-[200px] flex flex-col gap-[200px] items-center px-[16px] md:px-0">
        <Testimonials />
        <FAQs />
        <Download />
      </div>
    </Layout>
  );
};

export default HomePage;
