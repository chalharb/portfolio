import { NextRequest, NextResponse } from "next/server";
import { Post } from "@/types/post";
import fs from "fs";
import matter from "gray-matter";
import { join } from "path";

interface RequestProps {
  params: { slug: string };
}

const postsDirectory = join(process.cwd(), "_posts");

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

export async function GET(
  req: NextRequest,
  { params }: RequestProps
): Promise<Response> {
  const { slug } = await params;

  try {
    const post = getPost(slug);

    return NextResponse.json({ post }, { status: 200 });
  } catch (error) {
    console.error(error);
    if ((error as { code: string }).code === "ENOENT") {
      return NextResponse.json(
        { status: 404, error: "Blog post was not found.", page: slug },
        { status: 404 }
      );
    }

    return NextResponse.json(
      { status: 500, error: "Unknown error occurred.", slug },
      { status: 500 }
    );
  }
}
