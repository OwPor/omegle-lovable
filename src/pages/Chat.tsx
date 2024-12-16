import { useState } from "react";
import { VideoChat } from "@/components/VideoChat";
import { Button } from "@/components/ui/button";
import { MessageSquare, Video, ArrowRight, XOctagon } from "lucide-react";
import { TextChat } from "@/components/TextChat";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
} from "@/components/ui/alert-dialog";
import { useNavigate } from "react-router-dom";
import { toast } from "sonner";

const Chat = () => {
  const [mode, setMode] = useState<"text" | "video" | null>(null);
  const [showEndDialog, setShowEndDialog] = useState(false);
  const [showSkipDialog, setShowSkipDialog] = useState(false);
  const navigate = useNavigate();

  const handleEnd = () => {
    toast.success("Chat ended. Returning to home page...");
    navigate("/");
  };

  const handleSkip = () => {
    toast.info("Finding a new person to chat with...");
    // In a real implementation, this would trigger finding a new peer
    // For now, we'll just simulate it with a toast
    setTimeout(() => {
      toast.success("Connected with a new person!");
    }, 1500);
  };

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
      <div className="container mx-auto py-8 space-y-8">
        <div className="flex justify-between items-center">
          <h1 className="text-3xl font-bold">
            {mode === "video" ? "Video Chat" : "Text Chat"}
          </h1>
          <div className="flex gap-4">
            <Button
              variant="outline"
              onClick={() => setShowSkipDialog(true)}
              className="space-x-2"
            >
              <ArrowRight className="w-4 h-4" />
              <span>Skip</span>
            </Button>
            <Button
              variant="destructive"
              onClick={() => setShowEndDialog(true)}
              className="space-x-2"
            >
              <XOctagon className="w-4 h-4" />
              <span>End Chat</span>
            </Button>
          </div>
        </div>

        {mode === "video" ? (
          <>
            <VideoChat />
            <TextChat />
          </>
        ) : (
          <TextChat />
        )}

        <AlertDialog open={showEndDialog} onOpenChange={setShowEndDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>End Chat</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to end this chat? You'll be redirected to the
                home page.
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleEnd}>End Chat</AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>

        <AlertDialog open={showSkipDialog} onOpenChange={setShowSkipDialog}>
          <AlertDialogContent>
            <AlertDialogHeader>
              <AlertDialogTitle>Skip Current Chat</AlertDialogTitle>
              <AlertDialogDescription>
                Are you sure you want to skip this person and find someone new?
              </AlertDialogDescription>
            </AlertDialogHeader>
            <AlertDialogFooter>
              <AlertDialogCancel>Cancel</AlertDialogCancel>
              <AlertDialogAction onClick={handleSkip}>
                Find New Person
              </AlertDialogAction>
            </AlertDialogFooter>
          </AlertDialogContent>
        </AlertDialog>
      </div>
    </div>
  );
};

export default Chat;