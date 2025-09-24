import { Card } from "@/components/ui/card";
import { Download, Mail, Shield, Heart } from "lucide-react";

export const Footer = () => {
  return (
    <footer className="py-16 bg-gradient-to-t from-secondary/30 to-background border-t border-border/50">
      <div className="container mx-auto px-4">
        <div className="grid md:grid-cols-4 gap-8 mb-12">
          {/* Brand */}
          <div className="space-y-4">
            <div className="flex items-center gap-2">
              <div className="p-2 bg-gradient-primary rounded-lg">
                <Download className="w-6 h-6 text-white" />
              </div>
              <span className="text-xl font-bold text-foreground">Universal Downloader</span>
            </div>
            <p className="text-muted-foreground">
              The most reliable and secure way to download content from social media platforms.
            </p>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Quick Links</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Instagram Downloader</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">TikTok Downloader</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">YouTube Downloader</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Twitter Downloader</a></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Support</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">How to Use</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">FAQ</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Contact Us</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Report Issue</a></li>
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h3 className="text-lg font-semibold text-foreground mb-4">Legal</h3>
            <ul className="space-y-2 text-muted-foreground">
              <li><a href="#" className="hover:text-accent transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Terms of Service</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">DMCA</a></li>
              <li><a href="#" className="hover:text-accent transition-colors">Disclaimer</a></li>
            </ul>
          </div>
        </div>

        {/* Security Notice */}
        <Card className="p-6 bg-gradient-card backdrop-blur-sm border-border/50 mb-8">
          <div className="flex items-center gap-4 text-center md:text-left">
            <Shield className="w-8 h-8 text-accent flex-shrink-0" />
            <div>
              <h4 className="text-lg font-semibold text-foreground mb-2">Security & Privacy Guaranteed</h4>
              <p className="text-muted-foreground">
                We don't store your downloads, track your activity, or collect personal data. 
                All processing happens securely on our servers and files are automatically deleted after download.
              </p>
            </div>
          </div>
        </Card>

        {/* Bottom */}
        <div className="pt-8 border-t border-border/30 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-muted-foreground text-sm">
            © 2024 Universal Downloader. All rights reserved.
          </p>
          <div className="flex items-center gap-2 text-sm text-muted-foreground">
            <span>Made with</span>
            <Heart className="w-4 h-4 text-red-500 fill-current" />
            <span>for content creators</span>
          </div>
        </div>
      </div>
    </footer>
  );
};