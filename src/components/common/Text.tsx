type NormalText = {
  children: React.ReactNode;
};

const MenuText: React.FC<NormalText> = ({ children }) => {
  return <div className="text-[17px] px-5 py-4 text-[#94969d]">{children}</div>;
};

export { MenuText };
