import { useState, useEffect } from "react";

/**
 * Hook for handling closing when clicking outside of an element
 * @param {React.node} el
 * @param {boolean} initialState
 */
export const useDetectOutsideClick = (el:any, initialState:any) => {
  const [isActive, setIsActive] = useState(initialState);
  console.log(isActive);
  useEffect(() => {
    const onClick = (event: any) => {
      console.log(el.current, isActive);
      // If the active element exists and is clicked outside of
      if (el.current !== null && !el.current.contains(event.target)) {

        setIsActive(!isActive);
      }
    };

    // If the item is active (ie open) then listen for clicks outside
    if (isActive) {
      window.addEventListener("click", onClick);
    }

    return () => {
      window.removeEventListener("click", onClick);
    };
  }, [isActive, el]);

  return [isActive, setIsActive];
};