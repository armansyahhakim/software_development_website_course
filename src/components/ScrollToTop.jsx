import { useEffect } from "react";

function scrollToTop() {
  window.scrollTo({ top: 0, left: 0, behavior: "smooth" });
}

useEffect(() => {
  const unlisten = history.listen(() => {
    scrollToTop();
  });
  return () => {
    unlisten();
  };
}, []);
