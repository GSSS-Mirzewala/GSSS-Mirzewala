import { useState } from "react";
import Hero from "../components/Hero";

import Post from "./components/Post";
import PostModal from "./components/PostModal";

function Teacher() {
  const [MODAL_STATE, UPDATE_MODAL_STATE] = useState("hidden");
  return (
    <Hero>
      <Post MODAL_STATE={MODAL_STATE} UPDATE_MODAL_STATE={UPDATE_MODAL_STATE} />
      {MODAL_STATE === "visible" && (
        <>
          <div className="fixed inset-0 bg-black/40 z-40"></div>
          <div className="fixed inset-0 flex items-center justify-center z-50">
            <PostModal UPDATE_MODAL_STATE={UPDATE_MODAL_STATE} />
          </div>
        </>
      )}
    </Hero>
  );
}

export default Teacher;
