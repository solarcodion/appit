const PhoneBgGradient = () => {
  return (
    <>
      <div
        className="absolute bottom-[-2px] w-full md:h-[254px] xl:h-[254px]"
        style={{
          background:
            "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)",
        }}
      />
      <div
        className="absolute bottom-[-2px] w-full h-[130px]"
        style={{
          background:
            "linear-gradient(180deg,rgba(0,0,0,0) 0%,rgba(0,0,0,1) 100%)",
        }}
      />
    </>
  );
};

export { PhoneBgGradient };
