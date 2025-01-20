type NormalButtonProps = {
  className?: string;
  children: React.ReactNode;
};

const NormalButton: React.FC<NormalButtonProps> = ({ className, children }) => {
  return (
    <button
      className={`px-5 py-4 bg-white text-black text-[17px] rounded-xl ${className}`}
    >
      {children}
    </button>
  );
};

export { NormalButton };
