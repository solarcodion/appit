type NormalText = {
  className?: string;
  children: React.ReactNode;
};

const MenuText: React.FC<NormalText> = ({ className, children }) => {
  return (
    <div className={`text-[17px] px-5 py-4 text-[#94969d] ${className}`}>
      {children}
    </div>
  );
};

export { MenuText };
