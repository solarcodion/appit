import Nav from "../Nav";

type LayoutProps = {
  children: React.ReactNode;
};

const Layout: React.FC<LayoutProps> = ({ children }) => {
  return (
    <div className="w-full h-full justify-items-center">
      <Nav />
      {children}
    </div>
  );
};

export default Layout;
