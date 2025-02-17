import { NextResponse } from "next/server";
import { Post } from "@/types/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

const postsDirectory = join(process.cwd(), "_posts");

function getPostSlugs() {
  return fs.readdirSync(postsDirectory);
}

function getPost(slug: string) {
  const realSlug = slug.replace(/\.md$/, "");
  const fullPath = join(postsDirectory, `${realSlug}.md`);
  const fileContents = fs.readFileSync(fullPath, "utf8");
  const { data, content } = matter(fileContents);

  return {
    ...data,
    readTime: "5 min read",
    slug: realSlug,
    content,
  } as Post;
}

function getAllPosts(): Post[] {
  const slugs = getPostSlugs();
  const posts = slugs
    .map((slug) => getPost(slug))
    // sort posts by date in descending order
    .sort((post1, post2) => (post1.date > post2.date ? -1 : 1));
  return posts;
}

export interface RequestProps {
  params: { slug: string };
}

export async function GET(): Promise<Response> {
  try {
    const posts = getAllPosts();

    return NextResponse.json({ posts }, { status: 200 });
  } catch (error) {
    console.error(error);

    return NextResponse.json(
      { status: 500, error: "Unknown error occurred." },
      { status: 500 }
    );
  }
}
