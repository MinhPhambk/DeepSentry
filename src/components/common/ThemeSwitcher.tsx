"use client";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";
import { DarkModeSwitch } from "react-toggle-dark-mode";

export default function ThemeSwitcher() {
  const { setTheme, resolvedTheme } = useTheme();
  const [mounted, setMounted] = useState(false);

  useEffect(() => {
    setMounted(true);
  }, []);

  if (!mounted) return null;

  return (
    <div className="md:bg-[var(--primary-color)] md:dark:bg-[var(--primary-color-3)] hover:bg-[#3CA2FACC] hover:dark:bg-[var(--primary-color-2)] size-11 p-2 rounded-full flex items-center justify-center">
      <DarkModeSwitch
        sunColor="white"
        moonColor="var(--primary-color)"
        checked={resolvedTheme === "dark"}
        onChange={() => setTheme(resolvedTheme === "dark" ? "light" : "dark")}
        size={22}
      />
    </div>
  );
}
