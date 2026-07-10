import { useEffect } from "react";

const useCustomCursor = () => {
  useEffect(() => {
    const cursor = document.getElementById("cursor");
    const handleMouseMove = (e: MouseEvent) => {
      if (cursor instanceof HTMLElement) {
        cursor.style.left = `${e.clientX}px`;
        cursor.style.top = `${e.clientY}px`;
      }
    };

    window.addEventListener("mousemove", handleMouseMove);

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);
};

export default useCustomCursor;
