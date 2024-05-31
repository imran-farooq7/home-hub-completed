import { allPosts } from "@/.contentlayer/generated";
export default function HomePage() {
	return (
		<>
			<header className="max-w-2xl">
				<h1 className="text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
					Writing on software design, company building, and the aerospace
					industry.
				</h1>
				<p className="mt-6 text-base text-zinc-600 dark:text-zinc-400">
					All of my long-form thoughts on programming, leadership, product
					design, and more, collected in chronological order.
				</p>
			</header>
		</>
	);
}
