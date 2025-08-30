import { useLocation } from "react-router-dom";
import { useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Home, AlertCircle } from "lucide-react";

const NotFound = () => {
  const location = useLocation();

  useEffect(() => {
    console.error(
      "404 Error: User attempted to access non-existent route:",
      location.pathname
    );
  }, [location.pathname]);

  return (
    <div className="min-h-screen flex items-center justify-center bg-background">
      <div className="text-center max-w-md mx-auto px-6">
        <div className="mb-8">
          <AlertCircle className="h-24 w-24 text-primary mx-auto mb-6 animate-bounce" />
          <h1 className="text-8xl font-bold mb-4 bg-gradient-primary bg-clip-text text-transparent">
            404
          </h1>
          <h2 className="text-2xl font-semibold text-foreground mb-4">
            Page Not Found
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            The page you're looking for doesn't exist or has been moved.
          </p>
        </div>
        
        <Button variant="hero" size="lg" asChild>
          <a href="/">
            <Home className="mr-2 h-5 w-5" />
            Return to Portfolio
          </a>
        </Button>
      </div>
    </div>
  );
};

export default NotFound;
