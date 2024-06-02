"use client";
import { MoonStar, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();

	return (
		<button
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			className="rounded-full shadow border dark:border-gray-700 p-2"
		>
			{theme === "light" ? <SunIcon /> : <MoonStar />}
		</button>
	);
};
export default ThemeToggle;
