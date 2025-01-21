import Layout from "../components/Layout";
import Header from "../containers/Home/Header";
import Introduce from "../containers/Home/Introduce";

const HomePage = () => {
  return (
    <Layout>
      <div className="flex flex-col gap-[80px] md:gap-[200px] items-center">
        <Header />
        <Introduce />
      </div>
    </Layout>
  );
};

export default HomePage;
