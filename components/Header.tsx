"use client";
import { CogIcon, HomeIcon, InfoIcon, PencilIcon } from "lucide-react";
import Link from "next/link";
import { usePathname } from "next/navigation";
import ThemeToggle from "./ThemeToggle";

const Header = () => {
	const links = [
		{
			icon: PencilIcon,
			href: "/",
			text: "Writing",
		},
		{
			icon: CogIcon,
			href: "/projects",
			text: "Projects",
		},
		{
			icon: InfoIcon,
			href: "/about",
			text: "About",
		},
	];
	const pathName = usePathname();
	return (
		<nav className="w-full top-8 relative">
			<div className="flex justify-between items-center md:max-w-2xl max-w-lg sm:px-4 px-2 mx-auto  ">
				<Link
					href={"/"}
					className="rounded-full shadow border dark:border-gray-700 p-2"
				>
					<HomeIcon />
				</Link>
				<ul className="rounded-full flex items-center shadow px-3 font-medium dark:text-white text-black dark:border-gray-700 space-x-4">
					{links.map((link) => (
						<Link
							key={link.href}
							href={link.href}
							className={`${
								link.href === pathName ? "text-purple-600" : ""
							} relative flex items-center space-x-1 px-3 py-2 transition hover:text-purple-500 dark:hover:text-purple-400`}
						>
							<link.icon className="w-4 h-4" />
							<span>{link.text}</span>
						</Link>
					))}
				</ul>
				<ThemeToggle />
			</div>
		</nav>
	);
};
export default Header;
