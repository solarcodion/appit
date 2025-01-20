import Desktop from "./Desktop";
import Mobile from "./Mobile";

const Nav = () => {
  return (
    <div
      className="w-full fixed top-0 z-[9999]"
      style={{
        backdropFilter: "blur(6px)",
        backgroundColor: "rbga(0, 0, 0, 0.2)",
      }}
    >
      <Desktop />
      <Mobile />
    </div>
  );
};

export default Nav;
