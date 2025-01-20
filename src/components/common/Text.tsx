type NormalTextProps = {
  className?: string;
  children: React.ReactNode;
};

const MenuText: React.FC<NormalTextProps> = ({ className, children }) => {
  return (
    <p className={`text-[17px] px-5 py-4 text-[#94969d] ${className}`}>
      {children}
    </p>
  );
};

const NormalText: React.FC<NormalTextProps> = ({ className, children }) => {
  return <p className={`text-base text-[#797b85] ${className}`}>{children}</p>;
};

export { MenuText, NormalText };
