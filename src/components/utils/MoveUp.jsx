import React, { useState, useEffect } from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const MoveUp = () => {
  const [moveUp, setMoveUp] = useState(false);

  useEffect(() => {
    window.addEventListener("scroll", () => {
      window.scrollY > 250 ? setMoveUp(true) : setMoveUp(false);
    });
  }, []);

  const goToTop = () => {
    window.scrollTo({
      top: 0,
      behaviour: "smooth",
    });
  };

  return (
    <>
      {moveUp && (
        <div
          className="fixed bottom-3 right-3 p-2 hover:bg-slate-800 rounded-full border-2 border-white bg-[#f6655f] text-white cursor-pointer hover:rotate-2"
          onClick={goToTop}
        >
          <AiOutlineArrowUp className="hover:scale-125" />
        </div>
      )}
    </>
  );
};

export default MoveUp;
