import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Download, Link2, Shield, Zap } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import heroImage from "@/assets/hero-bg.jpg";

export const DownloadHero = () => {
  const [url, setUrl] = useState("");
  const [isProcessing, setIsProcessing] = useState(false);
  const { toast } = useToast();

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!url.trim()) {
      toast({
        title: "URL Required",
        description: "Please enter a valid URL to download content.",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    
    // Simulate processing
    setTimeout(() => {
      setIsProcessing(false);
      toast({
        title: "Processing Complete",
        description: "Your download is ready! (Demo mode - backend integration needed for actual downloads)",
      });
    }, 2000);
  };

  return (
    <div className="relative min-h-screen overflow-hidden">
      {/* Hero Background */}
      <div 
        className="absolute inset-0 bg-gradient-hero"
        style={{
          backgroundImage: `linear-gradient(135deg, rgba(55, 48, 107, 0.8), rgba(25, 25, 112, 0.9)), url(${heroImage})`,
          backgroundSize: 'cover',
          backgroundPosition: 'center',
          backgroundAttachment: 'fixed'
        }}
      />
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-4 py-20">
        <div className="text-center mb-12 space-y-6">
          <div className="inline-flex items-center gap-2 px-4 py-2 bg-gradient-card backdrop-blur-sm rounded-full border border-border/50">
            <Shield className="w-4 h-4 text-accent" />
            <span className="text-sm text-muted-foreground">Safe & Secure Downloads</span>
          </div>
          
          <h1 className="text-5xl md:text-7xl font-bold text-foreground leading-tight">
            Universal
            <span className="bg-gradient-primary bg-clip-text text-transparent block">
              Downloader
            </span>
          </h1>
          
          <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Download videos, reels, images, and audio from Instagram, TikTok, Twitter, and more. 
            Fast, free, and works on all devices.
          </p>
        </div>

        {/* Download Form */}
        <Card className="max-w-4xl mx-auto p-8 bg-gradient-card backdrop-blur-xl border-border/50 shadow-card">
          <form onSubmit={handleDownload} className="space-y-6">
            <div className="flex flex-col md:flex-row gap-4">
              <div className="flex-1 relative">
                <Link2 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="url"
                  placeholder="Paste Instagram, TikTok, Twitter, or any social media URL here..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="pl-12 h-14 text-lg bg-background/50 border-border/50 focus:bg-background/80 transition-all duration-300"
                  disabled={isProcessing}
                />
              </div>
              <Button 
                type="submit" 
                size="lg"
                className="h-14 px-8 bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold"
                disabled={isProcessing}
              >
                {isProcessing ? (
                  <>
                    <div className="animate-spin rounded-full h-5 w-5 border-b-2 border-white mr-2" />
                    Processing...
                  </>
                ) : (
                  <>
                    <Download className="w-5 h-5 mr-2" />
                    Download
                  </>
                )}
              </Button>
            </div>
          </form>
        </Card>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-8 mt-20">
          <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-primary rounded-lg">
                <Download className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Multiple Formats</h3>
            </div>
            <p className="text-muted-foreground">
              Download videos in HD, extract audio, or save images in various formats.
            </p>
          </Card>

          <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-gradient-secondary rounded-lg">
                <Zap className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">Lightning Fast</h3>
            </div>
            <p className="text-muted-foreground">
              Advanced servers ensure quick processing and instant downloads.
            </p>
          </Card>

          <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300">
            <div className="flex items-center gap-4 mb-4">
              <div className="p-3 bg-primary rounded-lg">
                <Shield className="w-6 h-6 text-white" />
              </div>
              <h3 className="text-xl font-semibold text-foreground">100% Safe</h3>
            </div>
            <p className="text-muted-foreground">
              No malware, no ads, no registration required. Your privacy is protected.
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
};