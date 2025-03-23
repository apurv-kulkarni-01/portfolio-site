import Link from "next/link";

import Footer from "@/components/Footer";

export default function Home() {
  return (
    <main>
      <h1>👮Apurv Kulkarni👮</h1>
      <p>welcome to my portfolio website</p>
      <p><Link href="/about-me">About Me</Link></p>
      <p><Link href="/contact-me">Contact Me</Link></p>
      <Footer />
    </main>
  );
}
