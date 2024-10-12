import React, { useEffect, useRef, useState } from 'react';

interface PiPWindowProps {
  taskText: string;
  isVisible: boolean;
  onClose: () => void;
}

const PiPWindow: React.FC<PiPWindowProps> = ({ taskText, isVisible, onClose }) => {
  const videoRef = useRef<HTMLVideoElement>(null);
  const [pipActive, setPipActive] = useState(false);

  const openPictureInPicture = async (taskText: string) => {
    if (!videoRef.current) return;
    
    try {
      const canvas = document.createElement('canvas');
      canvas.width = 400;
      canvas.height = 180;
      const ctx = canvas.getContext('2d');

      if (ctx) {
        const renderTask = () => {
          ctx.clearRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = '#ffffff';
          ctx.fillRect(0, 0, canvas.width, canvas.height);
          ctx.fillStyle = '#333333';
          ctx.font = '16px Inter';
          ctx.fillText('Urgent Task:', 20, 40);
          ctx.font = '20px Inter';
          ctx.fillText(taskText, 20, 80);
          ctx.font = '8px Inter';
          ctx.fillText('powered by Zendo', 20, 160);
        };

        renderTask();
        const stream = canvas.captureStream();
        videoRef.current!.srcObject = stream;

        await videoRef.current!.play();
        await videoRef.current!.requestPictureInPicture();

        setPipActive(true); // Set PiP as active
      }
    } catch (error) {
      console.error('Error entering PiP:', error);
    }
  };
  // Handle PiP close event
  useEffect(() => {
    const handlePipClose = () => {
      setPipActive(false);
      onClose();
    };

    document.addEventListener('leavepictureinpicture', handlePipClose);

    return () => {
      document.removeEventListener('leavepictureinpicture', handlePipClose);
    };
  }, [onClose]);

  // Watch for visibility change and toggle PiP
  useEffect(() => {
    if (isVisible && taskText) {
      openPictureInPicture(taskText);
    }
  }, [isVisible, taskText]);

  return <video ref={videoRef} style={{ display: 'none' }} muted playsInline />;
};

export default PiPWindow;
