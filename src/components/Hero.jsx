function Hero({ children }) {
  return (
    <div className="w-[96%] m-[2%] max-sm:w-[94%] max-sm:m-[3%] flex flex-col gap-4">
      {children}
    </div>
  );
}

export default Hero;
