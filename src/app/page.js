import Hero from "@/components/Hero";
import HomePage from "@/components/HomePage";
import Skills from "@/components/Skills";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
        {/* <HomePage></HomePage> */}
        <Hero></Hero>
        <Skills></Skills>
    </main>
  );
}
