import { formatDate } from "@/lib/utils";
import Link from "next/link";

export default function Home() {
  return (
    <section>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl">
        Hey there!
      </h1>
      <p className="leading-7 [&:not(:first-child)]:mt-6">
        {`lorem ipsum dolor sit amet, consectetur adipiscing elit. sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. `}
      </p>
      <div className="my-8">
        <h2 className="scroll-m-20 text-2xl font-semibold tracking-tight mb-2">
          Recent Posts
        </h2>
        <article className="flex flex-col space-y-1 mb-4 w-full md:flex-row space-x-0 md:space-x-2">
          <p className="text-neutral-600 dark:text-neutral-400 w-[100px] tabular-nums">
            {formatDate("2024-04-08", false)}
          </p>
          <Link
            className="text-neutral-900 dark:text-neutral-100 tracking-tight"
            href="/blog"
          >
            Spaces vs. Tabs: The Indentation Debate Continues
          </Link>
        </article>
      </div>
    </section>
  );
}
