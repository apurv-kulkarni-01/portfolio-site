import Link from "next/link";

import Footer from "@/components/Footer"

export default function AboutUsPage() {
    return(
        <main>
            <h1>About us</h1>
            <p>Yolo.. I am Apurv Kulkarni</p>
            <p><Link href="/">Home</Link></p>
            <Footer />
        </main>
    )
}