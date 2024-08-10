import { useEffect } from "react";

const SetTitle = (title: string) => {
  useEffect(() => {
    const title_ = document.getElementById("title");
    if (title_ instanceof HTMLElement) {
      title_.textContent = title;
    }
    document.title = title;
  }, [title]);
};

export default SetTitle;
