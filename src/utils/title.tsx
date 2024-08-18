import { useEffect } from "react";

const SetTitle = (title: string, id: string) => {
  useEffect(() => {
    const title_ = document.getElementById("title");
    const underlines = document.querySelectorAll(".underlined");
    const _id = document.getElementById(id);

    if (title_ instanceof HTMLElement) {
      title_.textContent = title;
    }

    if (underlines) {
      for (let i = 0; i < underlines.length; i++) {
        underlines[i].classList.remove("text-slate-900");
        underlines[i].classList.remove("dark:text-white");
        // underlines[i].classList.remove("dark:active-dark");
      }
    }

    if (_id instanceof HTMLElement) {
      _id.classList.add("text-slate-900");
      _id.classList.add("dark:text-white");

      // _id.classList.add("dark:active-dark");
    }

    document.title = title;
  }, [title]);
};

export default SetTitle;
