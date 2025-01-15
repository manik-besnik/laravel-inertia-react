import { Navbar } from "@/Components/LandingPage/Navbar";
import Banner from "@/Components/LandingPage/Banner";
import Company from "@/Components/LandingPage/Company";
import Guide from "@/Components/LandingPage/Guide";
import Gateway from "@/Components/LandingPage/Gateway";
import Principles from "@/Components/LandingPage/Principles";
import Statistics from "@/Components/LandingPage/Statistics";
import FAQ from "@/Components/LandingPage/FAQ";
import Footer from "@/Components/LandingPage/Footer";
import Testimonial from "@/Components/LandingPage/Testimonial";

export default function Index() {
    return (
        <main className="bg-main-and-focus">

            <Navbar />
            <Banner />
            <Company />
            <Guide />
            <Gateway />
            <Principles />
            <Statistics />
            <Testimonial />
            <FAQ />
            <Footer color="#ffffff" />

        </main>
    );
}
