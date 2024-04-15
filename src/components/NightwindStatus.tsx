import { useEffect, useState } from "react";

export default function NightwindStatus() {
  const [isDarkMode, setIsDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    const update = () => {
      setIsDarkMode(document.documentElement.classList.contains("dark"));
    };
    update();
    const observer = new MutationObserver((mutations) => {
      mutations.forEach((mutation) => {
        if (
          mutation.type === "attributes" &&
          mutation.attributeName === "class"
        ) {
          update();
        }
      });
    });
    observer.observe(document.documentElement, {
      attributes: true,
    });
    return () => observer.disconnect();
  }, []);

  return <span className="font-bold">{isDarkMode ? "Dark" : "Light"}</span>;
}
