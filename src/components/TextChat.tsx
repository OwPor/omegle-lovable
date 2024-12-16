import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Send } from "lucide-react";

export const TextChat = () => {
  const [messages, setMessages] = useState<Array<{ text: string; isMine: boolean }>>([]);
  const [newMessage, setNewMessage] = useState("");

  const handleSend = () => {
    if (!newMessage.trim()) return;
    
    // Add user message
    setMessages(prev => [...prev, { text: newMessage, isMine: true }]);
    setNewMessage("");
    
    // Simulate response (replace with actual peer message handling)
    setTimeout(() => {
      setMessages(prev => [...prev, { 
        text: "This is a simulated response. Real peer-to-peer messaging will be implemented later.", 
        isMine: false 
      }]);
    }, 1000);
  };

  return (
    <div className="w-full max-w-4xl mx-auto border rounded-lg shadow-sm bg-white">
      <div className="h-[400px] p-4 overflow-y-auto space-y-4">
        {messages.map((message, index) => (
          <div
            key={index}
            className={`flex ${message.isMine ? "justify-end" : "justify-start"}`}
          >
            <div
              className={`max-w-[70%] rounded-lg px-4 py-2 ${
                message.isMine
                  ? "bg-primary text-white"
                  : "bg-gray-100 text-gray-900"
              }`}
            >
              {message.text}
            </div>
          </div>
        ))}
      </div>
      <div className="border-t p-4 flex gap-2">
        <Input
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          onKeyPress={(e) => e.key === "Enter" && handleSend()}
          placeholder="Type your message..."
          className="flex-1"
        />
        <Button onClick={handleSend}>
          <Send className="h-4 w-4" />
        </Button>
      </div>
    </div>
  );
};