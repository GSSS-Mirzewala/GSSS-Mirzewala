import ATM from "./tools/ATM";

function Tools() {
  return (
    <div className="w-full bg-white p-8 rounded-sm flex flex-row items-center justify-between max-sm:justify-center overflow-x-auto gap-8 scroll-smooth">
      <ATM />
    </div>
  );
}

export default Tools;
