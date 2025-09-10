import Avatar from "../../assets/public/Avatar.svg";

function Post({ MODAL_STATE, UPDATE_MODAL_STATE }) {
  function handleModalState() {
    if (MODAL_STATE === "hidden") {
      UPDATE_MODAL_STATE("visible");
    } else {
      UPDATE_MODAL_STATE("hidden");
    }
  }
  return (
    <div className="w-full bg-white p-4 rounded-sm flex flex-row items-center justify-between">
      <div className="flex flex-row items-center gap-2 w-full">
        <img src={Avatar} alt="Avatar" className="w-10 h-10" />
        <input
          className="text-md font-medium w-full px-2 border-none outline-none cursor-text"
          placeholder="What's new...?"
          readOnly={true}
          onClick={handleModalState}
        ></input>
      </div>
    </div>
  );
}

export default Post;
