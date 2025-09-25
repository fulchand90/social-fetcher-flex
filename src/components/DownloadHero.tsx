import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Card } from "@/components/ui/card";
import { Select, SelectContent, SelectItem, SelectTrigger, SelectValue } from "@/components/ui/select";
import { Download, Link2, Shield, Zap, FileVideo, Music, Image } from "lucide-react";
import { useToast } from "@/hooks/use-toast";
import { supabase } from "@/integrations/supabase/client";
import heroImage from "@/assets/hero-bg.jpg";

export const DownloadHero = () => {
  const [url, setUrl] = useState("");
  const [format, setFormat] = useState("video");
  const [isProcessing, setIsProcessing] = useState(false);
  const [downloadResult, setDownloadResult] = useState<any>(null);
  const { toast } = useToast();

  const handleDownload = async (e: React.FormEvent) => {
    e.preventDefault();
    
    // Validate URL
    const trimmedUrl = url.trim();
    if (!trimmedUrl) {
      toast({
        title: "URL Required",
        description: "Please enter a valid URL to download content.",
        variant: "destructive",
      });
      return;
    }

    // Basic URL validation
    try {
      new URL(trimmedUrl);
    } catch {
      toast({
        title: "Invalid URL",
        description: "Please enter a valid URL (including http:// or https://)",
        variant: "destructive",
      });
      return;
    }

    setIsProcessing(true);
    setDownloadResult(null);
    
    try {
      const { data, error } = await supabase.functions.invoke('download-content', {
        body: { url: trimmedUrl, format }
      });

      if (error) throw error;

      if (data?.success) {
        setDownloadResult(data);
        toast({
          title: "Download Ready!",
          description: `Your ${format} is ready for download.`,
        });
      } else {
        toast({
          title: "Download Failed",
          description: data?.error || "Unable to process this URL. Please check the link and try again.",
          variant: "destructive",
        });
      }
    } catch (error) {
      console.error('Download error:', error);
      toast({
        title: "Download Failed",
        description: "An error occurred. Please check your internet connection and try again.",
        variant: "destructive",
      });
    } finally {
      setIsProcessing(false);
    }
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
            <div className="flex flex-col lg:flex-row gap-4">
              <div className="flex-1 relative">
                <Link2 className="absolute left-4 top-1/2 transform -translate-y-1/2 text-muted-foreground w-5 h-5" />
                <Input
                  type="url"
                  placeholder="Paste Instagram, TikTok, Twitter, YouTube, or Facebook URL here..."
                  value={url}
                  onChange={(e) => setUrl(e.target.value)}
                  className="pl-12 h-14 text-lg bg-background/50 border-border/50 focus:bg-background/80 transition-all duration-300"
                  disabled={isProcessing}
                />
              </div>
              <Select value={format} onValueChange={setFormat} disabled={isProcessing}>
                <SelectTrigger className="lg:w-48 h-14 bg-background/50 border-border/50">
                  <SelectValue />
                </SelectTrigger>
                <SelectContent>
                  <SelectItem value="video">
                    <div className="flex items-center gap-2">
                      <FileVideo className="w-4 h-4" />
                      Video (MP4)
                    </div>
                  </SelectItem>
                  <SelectItem value="audio">
                    <div className="flex items-center gap-2">
                      <Music className="w-4 h-4" />
                      Audio (MP3)
                    </div>
                  </SelectItem>
                  <SelectItem value="image">
                    <div className="flex items-center gap-2">
                      <Image className="w-4 h-4" />
                      Image (JPG)
                    </div>
                  </SelectItem>
                </SelectContent>
              </Select>
              <Button 
                type="submit" 
                size="lg"
                className="h-14 px-8 bg-gradient-primary hover:shadow-glow transition-all duration-300 font-semibold"
                disabled={isProcessing || !url.trim()}
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

          {/* Download Result */}
          {downloadResult && (
            <div className="mt-8 p-6 bg-background/30 rounded-lg border border-border/30">
              <div className="flex items-start gap-4">
                {downloadResult.metadata?.thumbnail && (
                  <img 
                    src={downloadResult.metadata.thumbnail} 
                    alt="Thumbnail"
                    className="w-24 h-24 rounded-lg object-cover"
                  />
                )}
                <div className="flex-1 space-y-2">
                  <h3 className="text-lg font-semibold text-foreground">
                    {downloadResult.metadata?.title || "Download Ready"}
                  </h3>
                  <div className="flex gap-4 text-sm text-muted-foreground">
                    {downloadResult.metadata?.duration && (
                      <span>Duration: {downloadResult.metadata.duration}</span>
                    )}
                    {downloadResult.metadata?.size && (
                      <span>Size: {downloadResult.metadata.size}</span>
                    )}
                  </div>
                  <Button 
                    asChild 
                    className="bg-gradient-secondary hover:shadow-glow transition-all duration-300"
                  >
                    <a 
                      href={downloadResult.downloadUrl} 
                      download={downloadResult.filename}
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <Download className="w-4 h-4 mr-2" />
                      Download Now
                    </a>
                  </Button>
                </div>
              </div>
            </div>
          )}
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