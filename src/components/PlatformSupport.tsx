import { Card } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const platforms = [
  {
    name: "Instagram",
    icon: "📷",
    features: ["Reels", "Stories", "Posts", "IGTV", "Profile Pictures"],
    color: "bg-gradient-to-r from-purple-500 to-pink-500"
  },
  {
    name: "TikTok", 
    icon: "🎵",
    features: ["Videos", "Audio", "No Watermark", "HD Quality"],
    color: "bg-gradient-to-r from-black to-red-600"
  },
  {
    name: "Twitter/X",
    icon: "🐦", 
    features: ["Videos", "GIFs", "Images", "Threads"],
    color: "bg-gradient-to-r from-blue-400 to-blue-600"
  },
  {
    name: "YouTube",
    icon: "📺",
    features: ["Videos", "Audio", "Thumbnails", "Multiple Quality"],
    color: "bg-gradient-to-r from-red-500 to-red-600"
  },
  {
    name: "Facebook",
    icon: "👥",
    features: ["Videos", "Images", "Stories", "Reels"],
    color: "bg-gradient-to-r from-blue-600 to-blue-700"
  },
  {
    name: "LinkedIn",
    icon: "💼",
    features: ["Videos", "Images", "Documents", "Posts"],
    color: "bg-gradient-to-r from-blue-700 to-blue-800"
  }
];

export const PlatformSupport = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Supported Platforms
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download content from all major social media platforms with a single tool
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {platforms.map((platform) => (
            <Card key={platform.name} className="p-6 bg-gradient-card backdrop-blur-sm border-border/50 hover:shadow-card hover:scale-105 transition-all duration-300 group">
              <div className="flex items-center gap-4 mb-4">
                <div className={`p-4 rounded-xl ${platform.color} shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                  <span className="text-2xl">{platform.icon}</span>
                </div>
                <div>
                  <h3 className="text-xl font-semibold text-foreground">{platform.name}</h3>
                  <p className="text-sm text-muted-foreground">Multiple formats supported</p>
                </div>
              </div>
              
              <div className="flex flex-wrap gap-2">
                {platform.features.map((feature) => (
                  <Badge key={feature} variant="secondary" className="bg-secondary/50 text-secondary-foreground hover:bg-secondary/70">
                    {feature}
                  </Badge>
                ))}
              </div>
            </Card>
          ))}
        </div>

        <div className="text-center mt-12">
          <p className="text-muted-foreground">
            More platforms coming soon! Request support for your favorite platform.
          </p>
        </div>
      </div>
    </section>
  );
};