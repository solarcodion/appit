import Nav from "../Nav";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-full justify-items-center">
      <Nav />
      <div className="pt-[175px] w-full max-w-[450px] md:max-w-[750px] xl:max-w-[1320px] px-[16px] md:px-[60px]">
        {children}
      </div>
    </div>
  );
};

export default Layout;
