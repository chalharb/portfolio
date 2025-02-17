// import { notFound } from "next/navigation";
import { Metadata } from "next";
import { getPost } from "@/lib/api/blog";
// import { Post } from "@/types/post";
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

export default async function BlogPost({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const blogPost = await getPost(slug);

  return (
    <Card>
      <CardHeader>
        <CardTitle>{blogPost.title}</CardTitle>
      </CardHeader>
      <CardContent>{blogPost.excerpt}</CardContent>
      <CardFooter>
        {blogPost.tags.map((tag) => (
          <span key={tag}>{tag}</span>
        ))}
      </CardFooter>
    </Card>
  );
}
