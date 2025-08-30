import { Button } from "@/components/ui/button";
import { Download, Mail, Github, Linkedin, ExternalLink } from "lucide-react";
import heroImage from "@/assets/hero-bg.jpg";

const HeroSection = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image with Overlay */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-gradient-to-br from-background/90 via-background/70 to-background/90" />
      </div>
      
      {/* Floating Elements removed */}
      
      {/* Main Content */}
      <div className="relative z-10 text-center px-6 max-w-4xl mx-auto">
        {/* Animated Name */}
        <div className="mb-4">
          <h1 className="text-6xl md:text-8xl font-bold bg-gradient-primary bg-clip-text text-transparent animate-pulse-glow">
            Massine
          </h1>
          <h1 className="text-6xl md:text-8xl font-bold text-foreground">
            Niharmine
          </h1>
        </div>
        
        {/* Typing Animation Title */}
        <div className="mb-6 h-16 flex items-center justify-center">
          <h2 className="text-2xl md:text-4xl font-semibold text-secondary text-glow">
            Digital Transformation & AI Engineer
          </h2>
        </div>
        
        {/* Description */}
        <p className="text-xl md:text-2xl text-muted-foreground mb-8 max-w-2xl mx-auto leading-relaxed">
          Fifth-year engineering student with expertise in machine learning, deep learning, cloud
          computing, and web development. <br />
          Enthusiastic about applying technology
          to build efficient and impactful solutions 
          and drive digital innovation in the AI era.
        </p>
        
        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 justify-center items-center mb-12">
          <a
            href="/resume.pdf"
            download
            className="min-w-[200px] inline-flex items-center justify-center rounded-md bg-gradient-to-r from-primary to-secondary px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:from-secondary hover:to-primary focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2"
          >
            <Download className="mr-2 h-5 w-5" />
            Download Resume
          </a>
          <a
            href="mailto:niharminemassine@gmail.com"
            className="min-w-[200px] inline-flex items-center justify-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 text-lg font-semibold text-white shadow-md transition hover:from-blue-500 hover:to-cyan-500 focus:outline-none focus:ring-2 focus:ring-cyan-500 focus:ring-offset-2"
          >
            <Mail className="mr-2 h-5 w-5" />
            Get In Touch
          </a>
        </div>
        
        {/* Social Links */}
        <div className="flex justify-center gap-6">
          <a
            href="https://github.com/massinNiss/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-gray-800 to-gray-600 text-white shadow-md transition hover:from-gray-600 hover:to-gray-800 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2"
            aria-label="Github"
          >
            <Github className="h-6 w-6" />
          </a>
          <a
            href="https://www.linkedin.com/in/massineniharmine/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-blue-700 to-blue-500 text-white shadow-md transition hover:from-blue-500 hover:to-blue-700 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            aria-label="LinkedIn"
          >
            <Linkedin className="h-6 w-6" />
          </a>
          <a
            href="#"
            target="_blank"
            rel="noopener noreferrer"
            className="w-12 h-12 inline-flex items-center justify-center rounded-md bg-gradient-to-r from-green-600 to-green-400 text-white shadow-md transition hover:from-green-400 hover:to-green-600 focus:outline-none focus:ring-2 focus:ring-green-500 focus:ring-offset-2"
            aria-label="Services"
          >
            <ExternalLink className="h-6 w-6" />
          </a>
        </div>
      </div>
      
      {/* Scroll Indicator removed */}
    </section>
  );
};

export default HeroSection;