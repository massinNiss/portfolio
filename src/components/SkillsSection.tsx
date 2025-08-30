import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { 
  Code, 
  Shield, 
  Settings, 
  Brain,
  Database,
  Cpu,
  Network,
  Zap
} from "lucide-react";

const SkillsSection = () => {
  const skillCategories = [
    {
      icon: <Code className="h-8 w-8" />,
      title: "Programming & Development",
      skills: ["Python", "C", "Bash", "SQL", "PHP Laravel", "HTML/CSS", "React", "Bootstrap"],
      color: "bg-gradient-primary"
    },
    {
      icon: <Shield className="h-8 w-8" />,
      title: "Cybersecurity & Privacy",
      skills: ["Network Security", "Penetration Testing", "Metasploit", "Burp Suite", "Nmap", "Cryptography (AES, RSA)", "Web App Security", "Secure Coding"],
      color: "bg-gradient-secondary"
    },
    {
      icon: <Settings className="h-8 w-8" />,
      title: "Digital Transformation",
      skills: ["RPA & Workflows", "Odoo", "BPMN", "Automation Scripts", "Digital Change Management", "Software Implementation"],
      color: "bg-gradient-to-r from-accent to-secondary"
    },
    {
      icon: <Brain className="h-8 w-8" />,
      title: "AI & Machine Learning",
      skills: ["Scikit Learn", "TensorFlow (Keras)", "CNN", "NLP", "Transformers", "Regression", "Classification", "Clustering"],
      color: "bg-gradient-to-r from-primary to-accent"
    },
    {
      icon: <Database className="h-8 w-8" />,
      title: "Data Engineering",
      skills: ["ETL Pipelines", "Big Data Technologies", "Hadoop", "Spark", "Data Visualization", "Analytics"],
      color: "bg-gradient-to-r from-secondary to-primary"
    },
    {
      icon: <Cpu className="h-8 w-8" />,
      title: "Cloud & Infrastructure",
      skills: ["AWS", "Docker", "Kubernetes", "CI/CD", "DevOps", "Microservices"],
      color: "bg-gradient-to-r from-accent to-secondary"
    }
  ];

  return (
    <section className="py-20 px-6 max-w-7xl mx-auto">
      <div className="text-center mb-16">
        <h2 className="text-4xl md:text-5xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
          Technical Expertise
        </h2>
        <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
          A comprehensive skill set spanning digital transformation, artificial intelligence, 
          and cutting-edge technology solutions.
        </p>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {skillCategories.map((category, index) => (
          <Card 
            key={index} 
            className="card-glow group cursor-pointer"
            style={{ animationDelay: `${index * 0.1}s` }}
          >
            <CardHeader className="pb-4">
              <div className={`w-16 h-16 rounded-xl ${category.color} flex items-center justify-center mb-4 text-white group-hover:scale-110 transition-transform duration-300`}>
                {category.icon}
              </div>
              <CardTitle className="text-xl font-semibold text-foreground group-hover:text-primary transition-colors">
                {category.title}
              </CardTitle>
            </CardHeader>
            
            <CardContent>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill, skillIndex) => (
                  <Badge 
                    key={skillIndex} 
                    variant="secondary" 
                    className="bg-muted/50 text-muted-foreground hover:bg-primary hover:text-primary-foreground transition-colors duration-200 cursor-pointer"
                  >
                    {skill}
                  </Badge>
                ))}
              </div>
            </CardContent>
          </Card>
        ))}
      </div>

      {/* AI Focus Highlight */}
      <div className="mt-16 text-center">
        <div className="inline-flex items-center gap-3 bg-gradient-card border border-primary/20 rounded-2xl px-8 py-6 backdrop-blur-md">
          <Brain className="h-8 w-8 text-primary animate-pulse-glow" />
          <div className="text-left">
            <h3 className="text-xl font-semibold text-foreground">Specializing in Digital Transformation & AI</h3>
            <p className="text-muted-foreground">Engineering student at National School of Applied Sciences</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default SkillsSection;