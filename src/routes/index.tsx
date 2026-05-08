import { createFileRoute } from "@tanstack/react-router";
import { Blobs } from "@/components/layout/Blobs";
import { Nav } from "@/components/layout/Nav";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { HowItWorks } from "@/components/sections/HowItWorks";
import { Apps } from "@/components/sections/Apps";
import { Features } from "@/components/sections/Features";
import { Download } from "@/components/sections/Download";

export const Route = createFileRoute("/")({
  component: Index,
  head: () => ({
    meta: [
      { title: "HighestWash — On-Demand Laundry. Name Your Price." },
      {
        name: "description",
        content:
          "HighestWash by Genesis Holdings Inc. Snap your laundry, get up to 4 live bids from local pros, accept the best price, and a rider picks up within the hour.",
      },
    ],
  }),
});

function Index() {
  return (
    <div className="min-h-screen">
      <Blobs />
      <Nav />
      <main>
        <Hero />
        <HowItWorks />
        <Apps />
        <Features />
        <Download />
      </main>
      <Footer />
    </div>
  );
}
