import Hero from "./components/Hero";

export default function Home() {
  return (
    <div>
      <h1 className="flex flex-col justify-center bg-neutral-900 h-screen">
        <Hero />
        <h1 className="text-primary">haider</h1>
      </h1>
    </div>
  );
}
