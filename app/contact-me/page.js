import Link from "next/link";

import Footer from "@/components/Footer"

export default function ContactUsPage(){
    return(
        <main>
            <h1>Contact me</h1>
            <p>Email: apurvkulkarni29@gmail.com</p>
            <p><Link href="/">Home</Link></p>
            <Footer />
        </main>
    );
} 