import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import Hero from "@/components/Hero";
import Project from "@/components/Project";
import Skills from "@/components/Skills";
import SkillsSection from "@/components/SkillsSection";
export default function Home() {
  return (
    <main className="">
        {/* <HomePage></HomePage> */}
        <Hero></Hero>
        <SkillsSection></SkillsSection>
        <Project></Project>
        {/* <Skills></Skills> */}
        <Contact></Contact>
        <Footer></Footer>
    </main>
  );
}
