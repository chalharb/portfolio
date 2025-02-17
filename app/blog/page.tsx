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

export const metadata: Metadata = {
  title: "Blog | Logan Harber",
};

export default async function Blog() {
  const allPosts = await getAllPosts();

  return (
    <>
      {allPosts.map((post: Post) => (
        <Card key={post.slug}>
          <CardHeader>
            <CardTitle>
              <Link href={`/blog/${post.slug}`}>{post.title}</Link>
            </CardTitle>
          </CardHeader>
          <CardContent>{post.excerpt}</CardContent>
          <CardFooter>
            {post.tags.map((tag) => (
              <span key={tag}>{tag}</span>
            ))}
          </CardFooter>
        </Card>
      ))}
    </>
  );
}
