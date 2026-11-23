import Nav from "@/components/Nav";
import Hero from "@/components/Hero";
import Films from "@/components/Films";
import Gallery from "@/components/Gallery";
import About from "@/components/About";
import Contact from "@/components/Contact";

export default function Home() {
  return (
    <>
      <Nav />
      <main>
        <Hero />
        <Films />
        <Gallery />
        <About />
        <Contact />
      </main>
    </>
  );
}
