import { Card } from "@/components/ui/card";
import { Link2, Settings, Download, CheckCircle } from "lucide-react";

const steps = [
  {
    icon: Link2,
    title: "Paste URL",
    description: "Copy and paste the URL of the content you want to download from any supported platform.",
    color: "text-blue-500"
  },
  {
    icon: Settings,
    title: "Choose Format", 
    description: "Select your preferred format - video, audio, or image. Choose quality and resolution options.",
    color: "text-purple-500"
  },
  {
    icon: Download,
    title: "Download",
    description: "Click download and get your file instantly. No registration or software installation required.",
    color: "text-green-500"
  },
  {
    icon: CheckCircle,
    title: "Enjoy",
    description: "Your content is ready! Share, edit, or save it to your device. Fast, secure, and reliable.",
    color: "text-accent"
  }
];

export const HowItWorks = () => {
  return (
    <section className="py-20 bg-gradient-to-b from-secondary/20 to-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-foreground mb-6">
            How It Works
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
            Download any content in just 4 simple steps. No technical knowledge required.
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <Card key={step.title} className="p-6 bg-gradient-card backdrop-blur-sm border-border/50 hover:shadow-card transition-all duration-300 text-center group relative">
                {/* Step Number */}
                <div className="absolute -top-4 -right-4 bg-gradient-primary text-white rounded-full w-8 h-8 flex items-center justify-center text-sm font-bold shadow-lg">
                  {index + 1}
                </div>
                
                <div className="mb-6">
                  <div className="inline-flex p-4 bg-gradient-to-br from-secondary to-secondary/50 rounded-2xl shadow-lg group-hover:shadow-xl transition-all duration-300">
                    <Icon className={`w-8 h-8 ${step.color}`} />
                  </div>
                </div>
                
                <h3 className="text-xl font-semibold text-foreground mb-3">
                  {step.title}
                </h3>
                
                <p className="text-muted-foreground leading-relaxed">
                  {step.description}
                </p>
              </Card>
            );
          })}
        </div>

        {/* Connection Lines for Desktop */}
        <div className="hidden lg:block relative -mt-32 pt-32">
          <div className="absolute top-16 left-1/4 right-1/4 h-0.5 bg-gradient-primary opacity-30"></div>
          <div className="absolute top-16 left-1/2 right-1/4 h-0.5 bg-gradient-primary opacity-30 transform translate-x-8"></div>
        </div>
      </div>
    </section>
  );
};