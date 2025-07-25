import { useRef, useState, useEffect, useCallback } from 'react';
// No need to import { Hand } from 'lucide-react' anymore in this file

const VideoBackground = ({
  srcMp4,
  srcWebm,
  overlayColor = "rgba(0, 0, 0, 0.9)",
  poster,
  children,
}) => {
  // mousePosition will still track actual pixel coordinates for the tail
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [tailPositions, setTailPositions] = useState([]); // State for tail segments

  // Configuration for the tail
  const TAIL_LENGTH = 10; // Number of tail segments
  const TAIL_INTERVAL_MS = 30; // How frequently to record a new tail position

  const lastTailUpdateTime = useRef(0); // Ref to control the rate of tail segment creation.
  const containerRef = useRef(null); // Ref for the video background container

  const handleMouseMove = useCallback((event) => {
    // No need for containerRef.current.getBoundingClientRect() for event.clientX/Y if only using document coordinates
    // However, if you want the spotlight to remain relative to the video, keep that logic.
    // For the custom trail, event.clientX/Y are direct pixel coordinates.

    setMousePosition({ x: event.clientX, y: event.clientY }); // Update current mouse position

    const currentTime = Date.now();
    if (currentTime - lastTailUpdateTime.current > TAIL_INTERVAL_MS) {
      setTailPositions(prevPositions => {
        const newPositions = [...prevPositions, { x: event.clientX, y: event.clientY }];
        // Keep only the latest TAIL_LENGTH positions
        if (newPositions.length > TAIL_LENGTH) {
          return newPositions.slice(newPositions.length - TAIL_LENGTH);
        }
        return newPositions;
      });
      lastTailUpdateTime.current = currentTime;
    }
  }, [TAIL_LENGTH, TAIL_INTERVAL_MS]); // Dependencies for useCallback

  useEffect(() => {
    document.addEventListener('mousemove', handleMouseMove);

    // IMPORTANT: Do NOT set document.body.style.cursor = 'none'; here.
    // We want the default cursor to be visible when it's over interactable elements.
    // Instead, we will apply cursor: none; to elements that should NOT show the default cursor.

    return () => {
      document.removeEventListener('mousemove', handleMouseMove);
      // No need to revert document.body.style.cursor if we don't set it to 'none' here
    };
  }, [handleMouseMove]);


  // IMPORTANT: The spotlight needs percentage coordinates relative to the video container.
  // So, we need to recalculate them from the pixel-based mousePosition.
  const overlayGradientStyle = {
    backgroundImage: `radial-gradient(
      circle var(--spotlight-radius) at
      ${((mousePosition.x - (containerRef.current?.getBoundingClientRect().left || 0)) / (containerRef.current?.getBoundingClientRect().width || 1)) * 100}%
      ${((mousePosition.y - (containerRef.current?.getBoundingClientRect().top || 0)) / (containerRef.current?.getBoundingClientRect().height || 1)) * 100}%,
      transparent, ${overlayColor}
    )`,
  };

  return (
    <div
      ref={containerRef}
      className="fixed inset-0 w-screen h-screen overflow-hidden z-[0]" // Removed pointer-events-none here
      // We want the body/container to respond to cursor changes for the default cursor
    >
      {/* Video element */}
      <video
        className="absolute top-1/2 left-1/2 min-w-full min-h-full w-auto h-auto -translate-x-1/2 -translate-y-1/2 object-cover"
        autoPlay
        loop
        muted
        playsInline
        preload="auto"
        poster={poster}
      >
        <source src={srcMp4} type="video/mp4" />
        <source src={srcWebm} type="video/webm" />
        Your browser does not support the video tag.
      </video>

      {/* Overlay for spotlight effect */}
      <div
        className="absolute inset-0 w-full h-full z-[1] pointer-events-none transition-all duration-[50ms] ease-linear"
        style={overlayGradientStyle}
      ></div>

      {/* Custom Cursor Tail Elements (dots) */}
      {tailPositions.map((pos, index) => {
        const opacity = (index + 1) / TAIL_LENGTH * 0.4; // Fade out effect, max 40% opacity
        const size = 12 + (index / TAIL_LENGTH) * 6; // Base size 12px, max 18px (adjust as needed)

        return (
          <div
            key={index} // Safe to use index here for a fixed-length trail
            className="absolute z-[9999] rounded-full bg-white pointer-events-none -translate-x-1/2 -translate-y-1/2 transition-all duration-75 ease-out"
            style={{
              top: `${pos.y}px`,
              left: `${pos.x}px`,
              width: `${size}px`,
              height: `${size}px`,
              opacity: opacity,
            }}
          ></div>
        );
      })}

      {/* Content over video */}
      <div className="relative z-10 min-h-screen w-screen pointer-events-auto text-white px-[10%]">
        {children}
      </div>
    </div>
  );
};

export default VideoBackground;