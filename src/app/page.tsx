import Hero from "@/components/sections/Hero";
import About from "@/components/sections/About";
import Experience from "@/components/sections/Experience";
import Skills from "@/components/sections/Skills";
import Projects from "@/components/sections/Projects";
import Education from "@/components/sections/Education";
import Blog from "@/components/sections/Blog";
import { getAllPosts } from "@/lib/blog";

export default function Home() {
  const posts = getAllPosts().map(({ content, ...rest }) => rest);

  return (
    <main>
      <Hero />
      <About />
      <Experience />
      <Skills />
      <Projects />
      <Education />
      <Blog posts={posts} />
    </main>
  );
}
