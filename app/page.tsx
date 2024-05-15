import Content from "@/components/Content";
import { Footer } from "@/components/Footer";
import Hero from "@/components/Hero";
import Image from "next/image";

export default function Home() {
  return (
    <main className="">
      <Hero />

      <Content />

      <section className="h-36 w-full">
        &nbsp;
      </section>

      <section className="bg-[#101010] flex flex-col justify-center items-center">
        <Footer />
        <div className="text-xs py-2 w-full border-t-[1px] border-gray-800 text-center text-gray-500">
          Copyright&copy;2024
        </div>
      </section>

    </main>
  );
}
