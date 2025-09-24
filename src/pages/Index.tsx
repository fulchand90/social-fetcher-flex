import { DownloadHero } from "@/components/DownloadHero";
import { PlatformSupport } from "@/components/PlatformSupport";
import { HowItWorks } from "@/components/HowItWorks";  
import { Features } from "@/components/Features";
import { Footer } from "@/components/Footer";

const Index = () => {
  return (
    <main className="min-h-screen bg-background">
      <DownloadHero />
      <PlatformSupport />
      <HowItWorks />
      <Features />
      <Footer />
    </main>
  );
};

export default Index;