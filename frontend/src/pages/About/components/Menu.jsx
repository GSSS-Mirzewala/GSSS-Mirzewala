// React Router (Components)
import { Link } from "react-router-dom";

// Local Hooks
import { usePreference } from "@/hooks/ContextHooks";

function Menu({ SELECTED }) {
  const { LANGUAGE } = usePreference();
  return (
    <div className="w-full bg-white rounded-sm p-6">
      <div className="flex flex-row items-center gap-8">
        <Link
          to="/about"
          className={`font-semibold text-base cursor-pointer ${
            SELECTED === "Introduction" ? "text-[var(--primary)]" : "text-black"
          }`}
        >
          {LANGUAGE === "hi" ? "परिचय" : "Introduction"}
        </Link>
        <Link
          to="/release_notes"
          className={`font-semibold text-base cursor-pointer ${
            SELECTED === "Release Notes"
              ? "text-[var(--primary)]"
              : "text-black"
          }`}
        >
          {LANGUAGE === "hi" ? "संस्करण विवरण" : "Release Notes"}
        </Link>
        <Link
          to="/credits"
          className={`font-semibold text-base cursor-pointer ${
            SELECTED === "Credits" ? "text-[var(--primary)]" : "text-black"
          }`}
        >
          {LANGUAGE === "hi" ? "श्रेय" : "Credits"}
        </Link>
      </div>
    </div>
  );
}

export default Menu;
