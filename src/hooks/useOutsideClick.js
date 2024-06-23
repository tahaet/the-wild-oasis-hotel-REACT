import { useEffect, useRef } from "react";

export function useOutsideClick(handler, eventCapturing = true) {
  const ref = useRef();

  useEffect(() => {
    function handleClick(e) {
      if (ref.current && !ref.current.contains(e.target)) handler();
    }
    document.addEventListener("click", handleClick, eventCapturing);

    return () => document.removeEventListener("click", handleClick);
  }, [handler, eventCapturing]);
  return ref;
}
