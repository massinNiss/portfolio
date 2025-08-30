import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Button } from "@/components/ui/button";
import { Github, ExternalLink } from "lucide-react";

const ProjectsSection = () => {
  const projects = [
    {
      title: "Private Cloud Deployment",
      description: "Developed and deployed an automated OpenStack cloud environment on Ubuntu using Shell scripting. This project streamlined the setup of core cloud services (Keystone, Nova, Neutron, Glance, and Cinder), showcasing skills in cloud infrastructure deployment and automation.",
      technologies: ["Shell", "OpenStack", "Ubuntu"],
      github: "https://github.com/massinNiss/OpenStack-Ubuntu-Setup",
      category: "Cloud Infrastructure"
    },
        {
      title: "Enterprise Chatbot Platform",
      description: "Scalable chatbot platform for enterprises featuring natural language processing and integration with existing business systems.",
      technologies: ["Blazor", "LlamaIndex", "FastApi", "uvicorn","MongoDB"],
      github: "https://github.com/massinNiss/enterprise-chatbot",
      category: "Conversational AI"
    },
    {
      title: "Flappy Bird AI",
      description: "An AI-powered Flappy Bird game that uses the NEAT algorithm to teach an agent to play. The project includes a full user authentication system with a leaderboard, storing player and high-score data in a database.",
      technologies: ["Python", "Pygame", "Qt", "NEAT-Python", "SQLite"],
      github: "https://github.com/massinNiss/NEAT-Flappy-Bird",
      category: "AI/ML"
    },
        {
      title: "TDIA-Service",
      description: "Web service for managing student and teacher data with a responsive front-end and a back-end built on the **Laravel** framework.",
      technologies: ["PHP", "Laravel", "HTML", "CSS", "Bootstrap 5", "JavaScript", "SQL", "MySQL", "XAMPP", "VS Code"],
      github: "https://github.com/massinNiss/TDIA-Service",
      category: "Web Development"
    },
    {
      title: "Linux File System",
      description: "A custom file system, developed from the ground up, to lay the groundwork for a lightweight and independent operating system.",
      technologies:  ["Shell", "Python", "#Linux From Scratch"],
      github: "https://github.com/massinNiss/Tdia-lfs",
      category: "Operating Systems"
    },
    {
      title: "Amal Timzoughine",
      description: "A responsive website built for a local charity to coordinate social work with tourists and local mountain communities. The site was designed to facilitate communication and resource management, helping the association to effectively organize projects that provide aid and support to those in need.",
      technologies: ["HTML/Css", "Php", "mysql", "#Hosting"],
      github: "https://amaltimzoughine.org/",
      category: "Web Development"
    }
  ];

  const handleProjectClick = (githubUrl: string) => {
    window.open(githubUrl, '_blank', 'noopener,noreferrer');
  };

  return (
    <section className="py-20 px-4 bg-background relative overflow-hidden">
      {/* Background Effects */}
      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 via-transparent to-accent/5" />
      <div className="absolute top-1/4 right-1/4 w-96 h-96 bg-primary/10 rounded-full blur-3xl animate-pulse-glow" />
      <div className="absolute bottom-1/4 left-1/4 w-80 h-80 bg-accent/10 rounded-full blur-3xl animate-pulse-glow" style={{ animationDelay: '1s' }} />
      
      <div className="container mx-auto relative z-10">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold bg-gradient-primary bg-clip-text text-transparent mb-6">
            Featured Projects
          </h2>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto leading-relaxed">
            Explore my portfolio of innovative projects in Digital Transformation and AI. 
            Each project demonstrates cutting-edge solutions for modern business challenges.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <Card 
              key={index} 
              className="group relative overflow-hidden bg-card/50 backdrop-blur-sm border-primary/20 hover:border-primary/40 transition-all duration-500 hover:shadow-glow-primary cursor-pointer"
              onClick={() => handleProjectClick(project.github)}
            >
              {/* Hover Effect Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              
              <CardHeader className="relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <Badge variant="secondary" className="bg-primary/20 text-primary border-primary/30">
                    {project.category}
                  </Badge>
                  <div className="flex gap-2 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <Button variant="ghost" size="sm" className="p-2">
                      <Github className="h-4 w-4" />
                    </Button>
                    <Button variant="ghost" size="sm" className="p-2">
                      <ExternalLink className="h-4 w-4" />
                    </Button>
                  </div>
                </div>
                <CardTitle className="text-xl font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                  {project.title}
                </CardTitle>
                <CardDescription className="text-muted-foreground leading-relaxed">
                  {project.description}
                </CardDescription>
              </CardHeader>

              <CardContent className="relative z-10">
                <div className="flex flex-wrap gap-2">
                  {project.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="outline" 
                      className="text-xs bg-muted/50 border-muted-foreground/20 hover:border-primary/40 transition-colors duration-300"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </CardContent>

              {/* Decorative Elements */}
              <div className="absolute top-0 right-0 w-20 h-20 bg-gradient-to-bl from-primary/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 w-16 h-16 bg-gradient-to-tr from-accent/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            </Card>
          ))}
        </div>

        <div className="text-center mt-16">
          <Button 
            variant="outline" 
            size="lg"
            className="group border-primary/30 hover:border-primary hover:bg-primary/10 transition-all duration-300"
            onClick={() => window.open('https://github.com/massinniss', '_blank', 'noopener,noreferrer')}
          >
            <Github className="mr-2 h-5 w-5 group-hover:animate-pulse" />
            View All Projects on GitHub
            <ExternalLink className="ml-2 h-4 w-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
          </Button>
        </div>
      </div>
    </section>
  );
};

export default ProjectsSection;