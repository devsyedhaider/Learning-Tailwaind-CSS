import Hero from "./components/Hero";
import Navbar from "./components/Navbar";

export default function Home() {
  return (
    <div className="min-h-screen">
      <Navbar />
      <main className="pt-16">
        <section className="flex flex-col justify-center bg-neutral-900 px-4 sm:px-6 lg:px-8 min-h-screen">
          <Hero />
        </section>
      </main>
    </div>
  );
}
