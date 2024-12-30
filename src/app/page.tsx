import Container from "@/app/_components/container";
import { HeroPost } from "@/app/_components/hero-post";
import { Intro } from "@/app/_components/intro";
import { MoreStories } from "@/app/_components/more-stories";
import { getAllPosts } from "@/lib/api";
import { Code, Presentation } from "lucide-react";
import Link from "next/link";

export default function Index() {
  const allPosts = getAllPosts();

  const heroPost = allPosts[0];

  const morePosts = allPosts;

  return (
    <main>
      <Container>
        <Intro />

        <div className="mb-8 md:mb-10 p-6 shadow-lg border border-gray-200 rounded-lg bg-white">
          <h2 className="mb-8 text-3xl font-bold tracking-tighter leading-tight">
            Ressourcen zur Vorlesung
          </h2>
          <div className="flex justify-around">


            <Link href={""}>
              <div className="flex gap-4 leading-10 items-center hover:text-blue-800">
                <Presentation />
                <p className="">
                  Präsentation
                </p>
              </div>
            </Link>

            <Link href={"https://inf-git.th-rosenheim.de/studhagejo5992/docker-demo-data-engineering"}>
              <div className="flex gap-4 leading-10 items-center hover:text-blue-800">
                <Code />
                <p className="">
                  Gitlab Repository
                </p>
              </div>
            </Link>
          </div>
        </div>

        {/* <HeroPost
          title={heroPost.title}
          coverImage={heroPost.coverImage}
          date={heroPost.date}
          author={heroPost.author}
          slug={heroPost.slug}
          excerpt={heroPost.excerpt}
        /> */}
        {morePosts.length > 0 && <MoreStories posts={morePosts} />}
      </Container>
    </main>
  );
}
