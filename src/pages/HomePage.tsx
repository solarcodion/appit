import Layout from "../components/Layout";
import Benefits from "../containers/Home/Benifits";
import Header from "../containers/Home/Header";
import Introduce from "../containers/Home/Introduce";

const HomePage = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-[80px] md:gap-[200px] items-center">
        <Header />
        <Introduce />
        <Benefits />
      </div>
    </Layout>
  );
};

export default HomePage;
