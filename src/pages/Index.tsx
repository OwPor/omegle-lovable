import { Hero } from "@/components/Hero";
import { Features } from "@/components/Features";
import { VideoChat } from "@/components/VideoChat";

const Index = () => {
  return (
    <main className="min-h-screen bg-white">
      <Hero />
      <VideoChat />
      <Features />
    </main>
  );
};

export default Index;