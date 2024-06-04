"use client";
import { MoonStar, MoonStarIcon, SunIcon } from "lucide-react";
import { useTheme } from "next-themes";
import { useEffect, useState } from "react";

const ThemeToggle = () => {
	const { theme, setTheme } = useTheme();
	const [mounted, setMounted] = useState(false);
	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) {
		return null;
	}

	return (
		<button
			onClick={() => setTheme(theme === "light" ? "dark" : "light")}
			className="rounded-full shadow border dark:border-gray-700 p-2"
		>
			{theme === "light" ? <SunIcon /> : <MoonStarIcon />}
		</button>
	);
};
export default ThemeToggle;
