import { useEffect } from "react";

const setTheme = () => {
  const now = new Date();
  const hour = now.getHours();
  if (hour >= 19 || hour < 7) {
    document.documentElement.setAttribute("data-theme", "dark");
  } else {
    document.documentElement.setAttribute("data-theme", "light");
  }
};

export default function AutoTheme() {
  useEffect(() => {
    setTheme();
    // Met à jour le thème chaque heure
    const interval = setInterval(setTheme, 60 * 60 * 1000);
    return () => clearInterval(interval);
  }, []);
  return null;
}
