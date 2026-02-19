
import Navbar from "@/components/layout/Navbar";
import Hero from "@/features/landing/components/Hero";
import Stats from "@/features/landing/components/Stats";
import Gallery from "@/features/landing/components/Gallery";
import MapPreview from "@/features/landing/components/MapPreview";
import ProcessFlow from "@/features/landing/components/ProcessFlow";
import Footer from "@/components/layout/Footer";

export default function Home() {
    return (
        <div className="bg-background-dark min-h-screen text-slate-300 antialiased selection:bg-primary selection:text-white">
            <Navbar />
            <Hero />
            <div className="relative -mt-32 z-20 px-4 sm:px-6 lg:px-8 max-w-7xl mx-auto mb-24">
                <Stats />
            </div>
            {/* <Gallery /> */}
            <MapPreview />
            <ProcessFlow />
            <Footer />
        </div>
    );
}
