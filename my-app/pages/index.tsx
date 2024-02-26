import Image from "next/image";
import { Inter } from "next/font/google";
import { TypewriterEffectDemo } from "@/components/TypewriterEffectDemo";
import { TypewriterEffect } from "@/components/ui/typewriter-effect";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  const words = [
    {text:'This'},
    {text:'is'},
    {text:'an'},
    {
      text: "Aceternity",
      className: "text-blue-500 dark:text-blue-500",
    },
    {
      text: 'demo.',
    },
  ];
  return (
    <>
      <div className="py-10">
        <TypewriterEffect words={words} />
      </div>
      <TypewriterEffectDemo/>
    </>
  );
}
