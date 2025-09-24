import { Card } from "@/components/ui/card";
import { 
  Smartphone, 
  Shield, 
  Zap, 
  Download, 
  Music, 
  Image, 
  Video, 
  Globe,
  Clock,
  Users
} from "lucide-react";

const features = [
  {
    icon: Smartphone,
    title: "Mobile Optimized",
    description: "Perfect experience on all devices - iPhone, Android, tablet, desktop.",
    gradient: "from-blue-500 to-cyan-500"
  },
  {
    icon: Shield,
    title: "100% Secure",
    description: "No malware, no tracking, no data collection. Your privacy is our priority.",
    gradient: "from-green-500 to-emerald-500"
  },
  {
    icon: Zap,
    title: "Lightning Fast",
    description: "Advanced servers ensure instant processing and super-fast downloads.",
    gradient: "from-yellow-500 to-orange-500"
  },
  {
    icon: Video,
    title: "HD Quality",
    description: "Download videos in original quality, up to 4K resolution available.",
    gradient: "from-purple-500 to-pink-500"
  },
  {
    icon: Music,
    title: "Audio Extraction",
    description: "Convert videos to MP3, M4A, or other audio formats instantly.",
    gradient: "from-red-500 to-rose-500"
  },
  {
    icon: Image,
    title: "Image Downloads",
    description: "Save photos, profile pictures, and thumbnails in high resolution.",
    gradient: "from-indigo-500 to-purple-500"
  },
  {
    icon: Globe,
    title: "Universal Support",
    description: "Works with Instagram, TikTok, YouTube, Twitter, Facebook, and more.",
    gradient: "from-teal-500 to-green-500"
  },
  {
    icon: Clock,
    title: "No Time Limits",
    description: "Download as much content as you want, whenever you want. No restrictions.",
    gradient: "from-cyan-500 to-blue-500"
  },
  {
    icon: Users,
    title: "Batch Downloads",
    description: "Download multiple files at once. Save time with bulk processing.",
    gradient: "from-orange-500 to-red-500"
  }
];

export const Features = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-background to-secondary/10">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            Powerful Features
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Everything you need for downloading content from social media platforms
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
          {features.map((feature) => {
            const Icon = feature.icon;
            return (
              <Card key={feature.title} className="p-6 bg-gradient-card backdrop-blur-sm border-border/50 hover:shadow-card hover:scale-105 transition-all duration-300 group">
                <div className="flex items-start gap-4">
                  <div className={`p-3 bg-gradient-to-r ${feature.gradient} rounded-xl shadow-lg group-hover:shadow-xl transition-all duration-300`}>
                    <Icon className="w-6 h-6 text-white" />
                  </div>
                  <div className="flex-1">
                    <h3 className="text-xl font-semibold text-foreground mb-2">
                      {feature.title}
                    </h3>
                    <p className="text-muted-foreground leading-relaxed">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </Card>
            );
          })}
        </div>
      </div>
    </section>
  );
};