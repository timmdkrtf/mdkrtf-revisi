import React from "react";
import { MdKeyboardDoubleArrowUp } from "react-icons/md";

export default function ScrollTop() {
  function scrollToTop() {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  }
  return (
    <div className="position-fixed bg-dark rounded" style={{bottom:"20px", right:"20px", cursor:"pointer", zIndex:"9999"}}>
      <div onClick={scrollToTop} className="fs-2 text-white px-2 py-1">
        <MdKeyboardDoubleArrowUp />
      </div>
    </div>
  );
}
