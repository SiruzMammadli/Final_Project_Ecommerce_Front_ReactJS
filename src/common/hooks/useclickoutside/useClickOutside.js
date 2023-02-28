import React from "react";

const useClickOutside = (handler) => {
    let menuRef = React.useRef();
    let clickRef = React.useRef([]);
  
    React.useEffect(() => {
      let maybeHandler = (e) => {
        if (
          !menuRef.current.contains(e.target) ||
          clickRef?.current.includes(e.target)
        ) {
          handler();
        }
      };
      document.addEventListener("mousedown", maybeHandler);
  
      return () => {
        document.removeEventListener("mousedown", maybeHandler);
      };
    });
  
    return { menuRef, clickRef };
  };

  export default useClickOutside;