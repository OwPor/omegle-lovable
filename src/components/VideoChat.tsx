import React, { useEffect, useRef, useState } from 'react';
import { Button } from '@/components/ui/button';
import { WebRTCConnection } from '@/utils/webrtc';
import { Video, X } from 'lucide-react';

export const VideoChat = () => {
  const [isStarted, setIsStarted] = useState(false);
  const localVideoRef = useRef<HTMLVideoElement>(null);
  const remoteVideoRef = useRef<HTMLVideoElement>(null);
  const webrtcRef = useRef<WebRTCConnection | null>(null);

  const startVideo = async () => {
    try {
      webrtcRef.current = new WebRTCConnection();
      const stream = await webrtcRef.current.startLocalStream();
      
      if (localVideoRef.current) {
        localVideoRef.current.srcObject = stream;
      }
      
      setIsStarted(true);
    } catch (error) {
      console.error('Failed to start video:', error);
    }
  };

  const stopVideo = () => {
    webrtcRef.current?.cleanup();
    webrtcRef.current = null;
    
    if (localVideoRef.current) {
      localVideoRef.current.srcObject = null;
    }
    if (remoteVideoRef.current) {
      remoteVideoRef.current.srcObject = null;
    }
    
    setIsStarted(false);
  };

  useEffect(() => {
    return () => {
      stopVideo();
    };
  }, []);

  return (
    <div className="w-full max-w-4xl mx-auto p-4">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <div className="relative">
          <video
            ref={localVideoRef}
            autoPlay
            playsInline
            muted
            className="w-full aspect-video bg-gray-900 rounded-lg"
          />
          <div className="absolute bottom-4 left-1/2 -translate-x-1/2">
            {!isStarted ? (
              <Button
                onClick={startVideo}
                className="group bg-primary hover:bg-primary/90"
              >
                <Video className="mr-2 h-4 w-4" />
                Start Video
              </Button>
            ) : (
              <Button
                onClick={stopVideo}
                variant="destructive"
              >
                <X className="mr-2 h-4 w-4" />
                Stop Video
              </Button>
            )}
          </div>
        </div>
        <div className="relative">
          <video
            ref={remoteVideoRef}
            autoPlay
            playsInline
            className="w-full aspect-video bg-gray-900 rounded-lg"
          />
        </div>
      </div>
    </div>
  );
};