import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Building, Calendar, MapPin, ExternalLink } from "lucide-react";

const ExperienceSection = () => {
  const experiences = [
        {
      company: "Major Moroccan parliamentary institution",
      location: "Rabat, Morocco",
      position: "Machine Learning Intern",
      period: "June 2025 - July 2025",
      description: "Automating +50 parliamentary law queries and enhancing legal research efficiency for Moroccan constitutional matters.",
      responsibilities: [
        "Developed an AI-powered legal assistant using FastAPI, Blazor Server, and RAG",
        "Designed and implemented process automation and workflow optimization initiatives.",
        "Led the implementation of a comprehensive digital transformation solution."
      ],
      technologies: ["Python", "FastApi", "RAG", "LlamaIndex", "Blazor Server", "MongoDB", "Uvicorn", "Git"],
      link: "https://fr.linkedin.com/company/parlement-chambre-des-repr%C3%A9sentants-maroc"
    },
    {
      company: "Oriental Group",
      location: "Marrakech, Morocco",
      position: "Digital Transformation Intern",
      period: "June 2024 - August 2024",
      description: "Working in maintaining the security and efficiency of their websites and implementing digital transformation solutions.",
      responsibilities: [
        "Website security maintenance and optimization",
        "Digital transformation solution implementation",
        "Security audits and vulnerability assessments",
        "Process automation and workflow optimization"
      ],
      technologies: ["Burp Suite", "Nessus", "Process Automation", "Html/css", "PHP"],
      link: "https://www.linkedin.com/company/oriental-group-marrakech/"
    },
    {
      company: "Freelancer",
      location: "Remote",
      position: "Digital Solutions Developer",
      period: "2022 - Present",
      description: "Freelancing on digital platforms like Fiverr and collaborating with local business owners to deliver innovative tech solutions.",
      responsibilities: [
        "Custom web application development",
        "AI-powered business solutions",
        "Digital transformation consulting",
        "Automation and workflow optimization",
        "Cybersecurity assessments"
      ],
      technologies: ["Python", "Web Development", "AI/ML", "Automation", "Security"],
      link: "#"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-6xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Professional Experience
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          Real-world experience in digital transformation, Machine Learning, Deep Learning
          and innovative technology solutions.
        </p>
      </div>

      <div className="space-y-8">
        {experiences.map((exp, index) => (
          <Card key={index} className="card-glow group">
            <CardHeader className="pb-4">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between gap-4">
                <div className="flex-1">
                  <div className="flex items-center gap-3 mb-2">
                    <Building className="h-5 w-5 text-primary" />
                    {exp.link !== "#" ? (
                      <a
                        href={exp.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="flex items-center gap-1 group"
                        style={{ textDecoration: "none" }}
                      >
                        <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                          {exp.company}
                        </CardTitle>
                        <ExternalLink className="h-4 w-4 text-muted-foreground hover:text-primary cursor-pointer transition-colors" />
                      </a>
                    ) : (
                      <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                        {exp.company}
                      </CardTitle>
                    )}
                  </div>
                  
                  <h3 className="text-lg font-medium text-secondary mb-2">
                    {exp.position}
                  </h3>
                  
                  <div className="flex flex-col sm:flex-row sm:items-center gap-2 text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <Calendar className="h-4 w-4" />
                      <span className="text-sm">{exp.period}</span>
                    </div>
                    <div className="hidden sm:block">•</div>
                    <div className="flex items-center gap-1">
                      <MapPin className="h-4 w-4" />
                      <span className="text-sm">{exp.location}</span>
                    </div>
                  </div>
                </div>
              </div>
            </CardHeader>
            
            <CardContent className="space-y-6">
              <p className="text-foreground leading-relaxed">
                {exp.description}
              </p>
              
              <div>
                <h4 className="font-medium text-foreground mb-3">Key Responsibilities:</h4>
                <ul className="grid grid-cols-1 md:grid-cols-2 gap-2">
                  {exp.responsibilities.map((responsibility, respIndex) => (
                    <li key={respIndex} className="flex items-start gap-2 text-muted-foreground">
                      <div className="w-1.5 h-1.5 bg-primary rounded-full mt-2 flex-shrink-0" />
                      <span className="text-sm">{responsibility}</span>
                    </li>
                  ))}
                </ul>
              </div>
              
              <div>
                <h4 className="font-medium text-foreground mb-3">Technologies Used:</h4>
                <div className="flex flex-wrap gap-2">
                  {exp.technologies.map((tech, techIndex) => (
                    <Badge 
                      key={techIndex} 
                      variant="secondary" 
                      className="bg-muted/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200"
                    >
                      {tech}
                    </Badge>
                  ))}
                </div>
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* Call to Action */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-3 bg-gradient-card border border-primary/20 rounded-2xl px-8 py-6 backdrop-blur-md">
          <div className="text-center">
            <h3 className="text-xl font-semibold text-foreground mb-2">Ready for New Challenges</h3>
            <p className="text-muted-foreground">
              Looking for opportunities in digital transformation, AI engineering, and innovative tech solutions.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ExperienceSection;