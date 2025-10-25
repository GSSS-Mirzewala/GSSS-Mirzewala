// Graphics
import Empty_Notifications_Light from "@/assets/Graphics/Empty_Notifications_Light.svg";

function EmptyNotice({ MESSAGE }) {
  return (
    <div className="flex flex-col items-center justify-center bg-white rounded-sm p-4 min-h-[65vh] max-sm:min-h-[59vh]">
      <img src={Empty_Notifications_Light} alt="No Notifications" />
      <p className="text-center text-lg max-sm:text-base font-semibold text-gray-600">
        "{MESSAGE}"
      </p>
    </div>
  );
}

export default EmptyNotice;
