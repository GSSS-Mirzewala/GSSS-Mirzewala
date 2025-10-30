function Message({ Message, Graphic }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-sm p-4 min-h-[65vh] max-sm:min-h-[59vh]">
      <img src={Graphic} alt="No Notifications" />
      <p className="text-center text-lg max-sm:text-base font-semibold text-gray-600">
        "{Message}"
      </p>
    </div>
  );
}

export default Message;
