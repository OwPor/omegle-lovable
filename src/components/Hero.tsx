import { Button } from "@/components/ui/button";
import { ArrowRight } from "lucide-react";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden bg-gradient-to-b from-white to-gray-50">
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#80808012_1px,transparent_1px),linear-gradient(to_bottom,#80808012_1px,transparent_1px)] bg-[size:24px_24px]"></div>
      <div className="container px-4 md:px-6 relative z-10">
        <div className="flex flex-col items-center space-y-4 text-center">
          <div className="space-y-2">
            <h1 className="animate-fade-down text-3xl font-bold tracking-tighter sm:text-4xl md:text-5xl lg:text-6xl/none">
              Connect Instantly with
              <span className="text-primary"> Anyone, Anywhere</span>
            </h1>
            <p className="mx-auto max-w-[700px] animate-fade-up text-gray-500 md:text-xl dark:text-gray-400">
              Experience seamless video and text chat in a safe, modern environment. Meet new people and make connections worldwide.
            </p>
          </div>
          <div className="space-x-4">
            <Button
              className="animate-fade-up [animation-delay:200ms] group bg-primary hover:bg-primary/90 text-white px-8 py-6 rounded-full transition-all duration-300 transform hover:scale-105"
              onClick={() => console.log("Start chat")}
            >
              Start Chatting
              <ArrowRight className="ml-2 h-4 w-4 group-hover:translate-x-1 transition-transform" />
            </Button>
          </div>
        </div>
      </div>
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent"></div>
    </section>
  );
};