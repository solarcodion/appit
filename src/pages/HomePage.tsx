import Layout from "../components/Layout";
import Appits from "../containers/Home/Appits";
import Benefits from "../containers/Home/Benifits";
import Feature from "../containers/Home/Feature";
import Header from "../containers/Home/Header";
import Introduce from "../containers/Home/Introduce";
import Price from "../containers/Home/Price";
import Social from "../containers/Home/Social";

const HomePage = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-[80px] md:gap-[200px] items-center">
        <Header />
        <Introduce />
        <Benefits />
        <Social />
        <Appits />
        <Feature />
        <Price />
      </div>
    </Layout>
  );
};

export default HomePage;
