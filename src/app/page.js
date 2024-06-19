import Contact from "@/components/Contact";
import Hero from "@/components/Hero";
import HomePage from "@/components/HomePage";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
        {/* <HomePage></HomePage> */}
        <Hero></Hero>
        <Project></Project>
        <Skills></Skills>
        <Contact></Contact>
    </main>
  );
}
