import { Inter } from "next/font/google";
import { Navbar, Hero, About, Habilities, Contact, Footer } from "@/components";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <main>
      <Navbar />
      <Hero
        message="Desarrollador web full stack, apasionado por la tecnología y la programación."
        secondary="Proyectos desde $400.00 MXN"
      />
      <About />
      <Habilities />
      <Contact />
      <Footer />
    </main>
  );
}
