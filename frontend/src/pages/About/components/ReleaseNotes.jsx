// Data
import RELEASE_NOTES from "@/data/Release_Notes";

// Local Hooks
import { usePreference } from "@hooks/ContextHooks";

function ReleaseNotes() {
  const { LANGUAGE } = usePreference();
  return (
    <div className="p-4">
      <ul className="flex flex-col gap-4 list-disc max-sm:px-2 px-6">
        {RELEASE_NOTES.reverse().map((UPDATE) => {
          return (
            <li key={UPDATE.ID}>
              <div className="font-semibold flex flex-col gap-4">
                <div>
                  <span>
                    {UPDATE.UPDATE_TYPE} {UPDATE.VERSION} ({UPDATE.DATE}) -
                    &nbsp;
                  </span>
                  <span className="font-normal">{UPDATE.CONTENT}</span>
                </div>
                <div className="flex flex-col gap-3 px-2 max-sm:px-0">
                  {UPDATE.NEW_FEATURES.length > 0 && (
                    <div>
                      <span>
                        {LANGUAGE === "hi" ? "नई विशेषताएँ" : "New Features"}
                      </span>
                      <ul className="flex flex-col gap-1 py-2 list-disc px-8">
                        {UPDATE.NEW_FEATURES.map((FEATURE, i) => {
                          return (
                            <li className="font-normal" key={i}>
                              {FEATURE}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                  {UPDATE.IMPROVEMENTS.length > 0 && (
                    <div>
                      <span>
                        {LANGUAGE === "hi" ? "सुधार" : "Improvements"}
                      </span>
                      <ul className="flex flex-col gap-1 py-2 list-disc px-8">
                        {UPDATE.IMPROVEMENTS.map((IMPROVEMENT, i) => {
                          return (
                            <li className="font-normal" key={i}>
                              {IMPROVEMENT}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                  {UPDATE.BUG_FIXES.length > 0 && (
                    <div>
                      <span>
                        {LANGUAGE === "hi"
                          ? "त्रुटि सुधार / बग सुधार"
                          : "Bug Fixes"}
                      </span>
                      <ul className="flex flex-col gap-1 py-2 list-disc px-8">
                        {UPDATE.BUG_FIXES.map((FIX, i) => {
                          return (
                            <li className="font-normal" key={i}>
                              {FIX}
                            </li>
                          );
                        })}
                      </ul>
                    </div>
                  )}
                </div>
              </div>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default ReleaseNotes;
