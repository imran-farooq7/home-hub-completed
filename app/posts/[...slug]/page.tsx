import { allPosts } from "@/.contentlayer/generated";
import formatDate from "@/lib/DateFormat";
import MDX from "@/mdx-component";
import { redirect } from "next/navigation";

export async function generateStaticParams() {
	return allPosts.map((post) => ({
		slug: post.slugParams.split("/"),
	}));
}
interface Props {
	params: {
		slug: string[];
	};
}
const PostDetailsPage = ({ params }: Props) => {
	const slug = params.slug.join("/");
	const post = allPosts.find((post) => post.slugParams === slug);
	if (!post) {
		return redirect("/");
	}
	return (
		<div className="xl:relative">
			<div className="mx-auto max-w-2xl">
				<article>
					<header className="flex flex-col">
						<h1 className="mt-6 text-4xl font-bold tracking-tight text-zinc-800 dark:text-zinc-100 sm:text-5xl">
							{post.title}
						</h1>
						<time
							dateTime={post.date}
							className="order-first flex items-center text-base text-zinc-400 dark:text-zinc-500"
						>
							<span className="h-4 w-0.5 rounded-full bg-zinc-200 dark:bg-zinc-500" />
							<span>{formatDate(post.date)}</span>
						</time>
					</header>
					<div className="mt-8 prose dark:prose-invert pb-24 max-w-lg md:max-w-2xl">
						<MDX code={post.body.code} />
					</div>
				</article>
			</div>
		</div>
	);
};
export default PostDetailsPage;
