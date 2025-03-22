import Link from "next/link";

import Footer from "@/components/footer";

export default function Home() {
  return (
    <main>
      <h1>👮Apurv Kulkarni👮</h1>
      <p>welcome to my portfolio website</p>
      <p><Link href="/about-us">About Us</Link></p>
      <p><Link href="/contact-us">Contact Us</Link></p>
      <Footer />
    </main>
  );
}
