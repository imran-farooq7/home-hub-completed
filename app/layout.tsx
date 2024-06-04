import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import SharedLayout from "@/components/SharedLayout";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Home Hub",
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="en">
			<body
				className={`${inter.className} bg-purple-900 flex h-full dark:bg-black`}
			>
				<SharedLayout>{children}</SharedLayout>
			</body>
		</html>
	);
}
