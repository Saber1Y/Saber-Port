import React, { useEffect, useState } from 'react'

const useDarkTheme = () => {

  const preferDarkQuery = "(prefer-color-scheme: dark)";
  const [mode, setMode] = useState('')

  useEffect(() => {
    const mediaQUery = window.matchMedia(preferDarkQuery);
    const userPreference = window.localStorage.getItem("theme");

    const handleChange = () => {
      if (userPreference) {
        let check = userPreference === "dark" ? "dark" : "light";
        setMode(check);
        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      } else {
        let check = mediaQUery.matches ? "dark" : "light";
        setMode(check);

        if (check === "dark") {
          document.documentElement.classList.add("dark");
        } else {
          document.documentElement.classList.remove("dark");
        }
      }
    }


    mediaQUery.addEventListener("change", handleChange);

    return () => mediaQUery.removeEventListener("change", handleChange);
  }, [])

  useEffect(() => {
    if (mode === "dark") {
      window.localStorage.setItem("theme", "dark");
      document.documentElement.classList.add("dark")
    } else {
      window.localStorage.setItem("theme", "light");
      document.documentElement.classList.remove("dark")
    }

  }, [mode]);

  return [mode, setMode];
}

export default useDarkTheme

