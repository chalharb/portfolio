// import { notFound } from "next/navigation";
import Link from "next/link";
import { Metadata } from "next";
import { getAllPosts } from "@/lib/api/blog";
import { Post } from "@/types/post";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { FilterForm } from "@/components/blog/FilterFacets";
import { Github, Linkedin, Mail } from "lucide-react";

export const metadata: Metadata = {
  title: "Blog | Logan Harber",
};

export default async function Blog() {
  const allPosts = await getAllPosts();

  return (
    <section>
      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-6">
        Blog
      </h1>
      <div className="grid grid-cols-3 gap-4">
        <div className="col-span-2">
          {allPosts.map((post: Post) => (
            <Card key={post.slug} className="mb-4">
              <CardHeader className="pb-3">
                <CardTitle>
                  <h2 className="scroll-m-20 border-b pb-2 text-xl font-semibold tracking-tight first:mt-0">
                    <Link href={`/blog/${post.slug}`} prefetch>
                      {post.title}
                    </Link>
                  </h2>
                </CardTitle>
              </CardHeader>
              <CardContent>{post.excerpt}</CardContent>
              <CardFooter className="gap-2">
                {post.tags.map((tag) => (
                  <Link href={`/blog?tag=${tag}`} passHref key={tag}>
                    <Badge>{tag}</Badge>
                  </Link>
                ))}
              </CardFooter>
            </Card>
          ))}
        </div>
        <aside>
          <FilterForm />
          <Card className="mt-4">
            <CardHeader className="mb-0 pb-3">
              <CardTitle>
                <h3 className="scroll-m-20 text-2xl font-semibold tracking-tight">
                  Get in touch
                </h3>
              </CardTitle>
            </CardHeader>
            <CardContent className="mb-0">
              <ul className="font-sm flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
                <li>
                  <a
                    className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://github.com/vercel/next.js"
                  >
                    <Linkedin />
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="/rss"
                  >
                    <Github />
                  </a>
                </li>
                <li>
                  <a
                    className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
                    rel="noopener noreferrer"
                    target="_blank"
                    href="https://vercel.com/templates/next.js/portfolio-starter-kit"
                  >
                    <Mail />
                  </a>
                </li>
              </ul>
            </CardContent>
          </Card>
        </aside>
      </div>
    </section>
  );
}
