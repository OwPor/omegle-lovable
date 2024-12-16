import { useState } from "react";
import { VideoChat } from "@/components/VideoChat";
import { Button } from "@/components/ui/button";
import { MessageSquare, Video } from "lucide-react";
import { TextChat } from "@/components/TextChat";

const Chat = () => {
  const [mode, setMode] = useState<"text" | "video" | null>(null);

  if (!mode) {
    return (
      <div className="min-h-screen flex items-center justify-center bg-gradient-to-b from-white to-gray-50">
        <div className="space-y-8 text-center">
          <h1 className="text-4xl font-bold">Choose Your Chat Mode</h1>
          <div className="flex gap-4 justify-center">
            <Button
              onClick={() => setMode("text")}
              className="text-lg px-8 py-6 space-x-2"
              variant="outline"
            >
              <MessageSquare className="w-6 h-6" />
              <span>Text Chat</span>
            </Button>
            <Button
              onClick={() => setMode("video")}
              className="text-lg px-8 py-6 space-x-2"
              variant="outline"
            >
              <Video className="w-6 h-6" />
              <span>Video Chat</span>
            </Button>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-b from-white to-gray-50">
      {mode === "video" ? (
        <div className="container mx-auto py-8 space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Video Chat</h1>
            <Button variant="outline" onClick={() => setMode(null)}>
              Change Mode
            </Button>
          </div>
          <VideoChat />
          <TextChat />
        </div>
      ) : (
        <div className="container mx-auto py-8 space-y-8">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-bold">Text Chat</h1>
            <Button variant="outline" onClick={() => setMode(null)}>
              Change Mode
            </Button>
          </div>
          <TextChat />
        </div>
      )}
    </div>
  );
};

export default Chat;