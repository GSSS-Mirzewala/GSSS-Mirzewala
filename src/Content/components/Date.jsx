function Date({ date, color }) {
  return (
    <div
      className={`flex items-center justify-center bg-[${color}] min-w-12 min-h-12 rounded-sm shadow-md shadow-neutral-950`}
    >
      <span className="text-white text-xl font-semibold">{date}</span>
    </div>
  );
}

export default Date;
