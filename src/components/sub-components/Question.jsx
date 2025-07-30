function Question(props) {
  return (
    <div className="w-[96%] max-[648px]:w-[92%] m-[2%] max-[648px]:m-[4%] rounded-[7px] bg-white p-4 flex items-start justify-start flex-col gap-1.5">
      <h2
        className="text-[22px] font-medium max-[18px]:text-lg"
        style={{ color: props.Color }}
      >
        {props.Title}
      </h2>
      <p className="text-[22px] font-medium max-[18px]:text-lg">
        {props.Description}
      </p>
    </div>
  );
}

export default Question;
