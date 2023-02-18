import "./styles/sidebar-paper.scss";
import useToggle from "../../../../../../common/hooks/useToggle/useToggle";
import { useLayoutEffect, useRef } from "react";

export default function Paper({ label, children }) {
  const [isOpen, setOpen] = useToggle(true);
  const subPaperRef = useRef(false);

  useLayoutEffect(() => {
    subPaperRef.current.style.height = subPaperRef.current.scrollHeight + "px";
  },[]);


  return (
    <div className={isOpen ? "toggle_paper active" : "toggle_paper"}>
      <h5 className="title" onClick={() => setOpen.onToggle()}>
        {label}
        <span className="plus_minus">
          <i className={isOpen ? "bx bx-minus" : "bx bx-plus"}></i>
        </span>
      </h5>
      <div
        className="sub_paper"
        ref={subPaperRef}
        style={
          isOpen
            ? {
                height: subPaperRef.current.scrollHeight + "px",
              }
            : {
                height: "0px",
              }
        }
      >
        {children}
      </div>
    </div>
  );
}
