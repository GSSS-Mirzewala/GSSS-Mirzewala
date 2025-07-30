function Quote() {
  const Quote =
    '"Behind every success story is a teacher who believed in the power of potential."';
  return (
    <div className="w-[96%] m-[2%] rounded-[7px] p-6 bg-white flex items-center justify-center flex-col gap-3.5 max-[648px]:w-[92%] max-[648px]:m-[4%]">
      <h1 className="text-3xl border-b-2 border-b-gray-800">
        Quote of The Day
      </h1>
      <p className="text-xl text-center max-[648px]:text-lg">{Quote}</p>
    </div>
  );
}

export default Quote;
