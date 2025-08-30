import { useState, useRef, useEffect } from "react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import { ScrollArea } from "@/components/ui/scroll-area";
import { MessageCircle, X, Send, Bot, User } from "lucide-react";
import chatbotAvatar from "@/assets/chatbot-avatar.png";

interface Message {
  id: string;
  text: string;
  isBot: boolean;
  timestamp: Date;
}

const ChatbotWidget = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: "1",
      text: "Hi! I'm Massine's AI assistant. I can help you learn more about his skills, experience, and projects. What would you like to know?",
      isBot: true,
      timestamp: new Date()
    }
  ]);
  const [inputValue, setInputValue] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const messagesEndRef = useRef<HTMLDivElement>(null);

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: "smooth" });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  const predefinedResponses: { [key: string]: string } = {
    "skills": "Massine specializes in Digital Transformation and AI. His key skills include Python, Machine Learning, Cybersecurity, Web Development, and Data Science. He's particularly experienced with TensorFlow, Scikit-learn, and various automation tools.",
    "experience": "Massine has worked as a Digital Transformation Intern at Oriental Group in Marrakech, focusing on website security and digital solutions. He's also been freelancing since 2022, developing custom solutions for businesses.",
    "education": "Massine is a fourth-year engineering student at the National School of Applied Sciences of Al Hoceima, specializing in Digital Transformation and Artificial Intelligence.",
    "projects": "Massine has worked on various projects including cybersecurity assessments, automation scripts, web applications, and AI-powered solutions. He's experienced in both security and development aspects.",
    "contact": "You can reach Massine through his portfolio contact form, LinkedIn, or GitHub. He's always open to discussing new opportunities and collaborations in AI and digital transformation.",
    "ai": "Massine has extensive experience in AI and Machine Learning, including CNN, NLP, Transformers, and various algorithms for regression, classification, and clustering. He works with TensorFlow/Keras and Scikit-learn.",
    "cybersecurity": "Massine has strong cybersecurity skills including penetration testing with tools like Metasploit, Burp Suite, and Nmap. He's experienced in network security, cryptography (AES, RSA), and secure coding practices."
  };

  const getBotResponse = (userMessage: string): string => {
    const lowerMessage = userMessage.toLowerCase();
    
    for (const [keyword, response] of Object.entries(predefinedResponses)) {
      if (lowerMessage.includes(keyword)) {
        return response;
      }
    }
    
    // Default responses for common questions
    if (lowerMessage.includes("hello") || lowerMessage.includes("hi")) {
      return "Hello! Nice to meet you. I'm here to help you learn more about Massine's background in Digital Transformation and AI. What interests you most?";
    }
    
    if (lowerMessage.includes("thank")) {
      return "You're welcome! Feel free to ask anything else about Massine's expertise, projects, or experience.";
    }
    
    return "That's an interesting question! While I can tell you about Massine's skills in AI, cybersecurity, digital transformation, and his experience, I'd recommend reaching out to him directly for more specific details. What else would you like to know?";
  };

  ///////////////////////////////////

  // const handleSendMessage = () => {
  //   if (!inputValue.trim()) return;

  //   const userMessage: Message = {
  //     id: Date.now().toString(),
  //     text: inputValue,
  //     isBot: false,
  //     timestamp: new Date()
  //   };

  //   setMessages(prev => [...prev, userMessage]);
  //   setInputValue("");
  //   setIsTyping(true);

  //   // Simulate bot typing delay
  //   setTimeout(() => {
  //     const botResponse: Message = {
  //       id: (Date.now() + 1).toString(),
  //       text: getBotResponse(inputValue),
  //       isBot: true,
  //       timestamp: new Date()
  //     };
      
  //     setMessages(prev => [...prev, botResponse]);
  //     setIsTyping(false);
  //   }, 1500);
  // };

  const handleSendMessage = async () => {
  if (!inputValue.trim()) return;

  const userMessage: Message = {
    id: Date.now().toString(),
    text: inputValue,
    isBot: false,
    timestamp: new Date()
  };

  setMessages(prev => [...prev, userMessage]);
  setInputValue("");
  setIsTyping(true);

  try {
    const res = await fetch("http://localhost:8000/chat", {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      body: JSON.stringify({ message: inputValue })
    });
    const data = await res.json();
    const botResponse: Message = {
      id: (Date.now() + 1).toString(),
      text: data.response,
      isBot: true,
      timestamp: new Date()
    };
    setMessages(prev => [...prev, botResponse]);
  } catch (err) {
    setMessages(prev => [
      ...prev,
      {
        id: (Date.now() + 2).toString(),
        text: "Sorry, there was an error connecting to the assistant.",
        isBot: true,
        timestamp: new Date()
      }
    ]);
  }
  setIsTyping(false);
};

  ///////////////////////////////////////
  const handleKeyPress = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter') {
      handleSendMessage();
    }
  };

  return (
    <>
      {/* Chat Widget Button */}
      <div className="fixed bottom-6 right-6 z-50">
        {!isOpen && (
          <Button
            onClick={() => setIsOpen(true)}
            variant="hero"
            size="lg"
            className="rounded-full w-16 h-16 shadow-2xl hover:scale-110 transition-all duration-300 animate-pulse-glow"
          >
            <MessageCircle className="h-8 w-8" />
          </Button>
        )}
      </div>

      {/* Chat Window */}
      {isOpen && (
        <div className="fixed bottom-20 right-6 z-50 w-96 h-[500px] max-w-[calc(100vw-2rem)]">
          <Card className="h-full card-glow border-primary/20 backdrop-blur-xl bg-card/95">
            <CardHeader className="pb-3 bg-gradient-primary text-white rounded-t-lg">
              <div className="flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center">
                    <img src={chatbotAvatar} alt="AI Assistant" className="w-8 h-8 rounded-full" />
                  </div>
                  <div>
                    <CardTitle className="text-lg">AI Assistant</CardTitle>
                    <p className="text-sm text-white/80">Ask me about Massine</p>
                  </div>
                </div>
                <Button
                  variant="ghost"
                  size="icon"
                  onClick={() => setIsOpen(false)}
                  className="text-white hover:bg-white/20 h-8 w-8"
                >
                  <X className="h-4 w-4" />
                </Button>
              </div>
            </CardHeader>

            <CardContent className="flex flex-col h-full p-0">
              {/* Messages */}
              <div className="flex-1 min-h-0 p-4 overflow-y-auto">
                <div className="space-y-4">
                  {messages.map((message) => (
                    <div
                      key={message.id}
                      className={`flex gap-3 ${message.isBot ? '' : 'justify-end'}`}
                    >
                      {message.isBot && (
                        <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                          <Bot className="h-4 w-4 text-primary" />
                        </div>
                      )}
                      <div
                        className={`max-w-[80%] p-3 rounded-2xl ${
                          message.isBot
                            ? 'bg-muted text-foreground'
                            : 'bg-primary text-primary-foreground'
                        }`}
                      >
                        <p className="text-sm leading-relaxed">{message.text}</p>
                      </div>
                      {!message.isBot && (
                        <div className="w-8 h-8 rounded-full bg-secondary/10 flex items-center justify-center flex-shrink-0">
                          <User className="h-4 w-4 text-secondary" />
                        </div>
                      )}
                    </div>
                  ))}
                  {isTyping && (
                    <div className="flex gap-3">
                      <div className="w-8 h-8 rounded-full bg-primary/10 flex items-center justify-center flex-shrink-0">
                        <Bot className="h-4 w-4 text-primary" />
                      </div>
                      <div className="bg-muted p-3 rounded-2xl">
                        <div className="flex gap-1">
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" />
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.1s' }} />
                          <div className="w-2 h-2 bg-muted-foreground rounded-full animate-bounce" style={{ animationDelay: '0.2s' }} />
                        </div>
                      </div>
                    </div>
                  )}
                </div>
                <div ref={messagesEndRef} />
              </div>

              {/* Input */}
              <div className="p-3 border-t border-primary/10 bg-gradient-to-br from-background/80 via-card/90 to-background/80 shadow-lg">
                <div className="flex gap-2 items-center">
                  <input
                    value={inputValue}
                    onChange={(e) => setInputValue(e.target.value)}
                    onKeyPress={handleKeyPress}
                    placeholder="Ask about skills, experience, projects..."
                    className="flex-1 h-11 rounded-lg border border-primary/20 bg-card/80 px-4 py-2 text-base text-foreground placeholder:text-muted-foreground shadow-sm focus:outline-none focus:ring-2 focus:ring-primary focus:ring-offset-2 transition"
                  />
                  <Button
                    onClick={handleSendMessage}
                    disabled={!inputValue.trim() || isTyping}
                    variant="hero"
                    size="icon"
                    className="flex-shrink-0 shadow-md"
                    aria-label="Send"
                  >
                    <Send className="h-5 w-5" />
                  </Button>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      )}
    </>
  );
};

export default ChatbotWidget;