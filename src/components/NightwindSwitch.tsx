import { useEffect, useState } from "react";
//@ts-ignore no typing info available for nightwind
import nightwind from "nightwind/helper";

export default function NightwindSwitch() {
  const [darkMode, setDarkMode] = useState(
    document.documentElement.classList.contains("dark")
  );

  useEffect(() => {
    nightwind.enable(darkMode);
  }, [darkMode]);

  const toggle = () => {
    const newMode = !darkMode;
    localStorage.theme = newMode ? "dark" : "light";
    setDarkMode(newMode);
  };

  return (
    <button
      onClick={toggle}
      className="border border-black p-2 rounded font-bold"
    >
      Toggle
    </button>
  );
}
