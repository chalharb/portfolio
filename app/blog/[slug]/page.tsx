import { Metadata } from "next";
import { getPost } from "@/lib/api/blog";
import { Badge } from "@/components/ui/badge";
import Link from "next/link";
import BackButton from "@/components/blog/BackButton";
import { Calendar, Timer } from "lucide-react";
import { Separator } from "@/components/ui/separator";

export const metadata: Metadata = {
  title: "Blog | Logan Harber",
};

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blogPost = await getPost(slug);

  return (
    <section>
      <div className="mb-6">
        <BackButton />
      </div>

      <h1 className="scroll-m-20 text-4xl font-extrabold tracking-tight lg:text-5xl pb-6">
        {blogPost.title}
      </h1>

      <div className="flex flex-row gap-2 mb-6 text-muted-foreground">
        <div className="flex items-center">
          <Calendar className="mr-2" size={21} /> Jan 1, 2025
          <Separator orientation="vertical" className="ml-2" />
        </div>
        <div className="flex items-center">
          <Timer className="mr-2" /> 5 min read
        </div>
      </div>

      <p>{blogPost.excerpt}</p>

      <div className="flex gap-2">
        {blogPost.tags.map((tag) => (
          <Link href={`/blog?tag=${tag}`} passHref key={tag}>
            <Badge>{tag}</Badge>
          </Link>
        ))}
      </div>
    </section>
  );
}
