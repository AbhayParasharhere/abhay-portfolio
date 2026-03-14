"use client";

import { useEffect, useState } from 'react';

export default function CursorSpotlight() {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isClient, setIsClient] = useState(false);

  useEffect(() => {
    setIsClient(true);
    const updateCursor = (e: MouseEvent) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', updateCursor);
    return () => window.removeEventListener('mousemove', updateCursor);
  }, []);

  if (!isClient) return null;

  return (
    <div
      className="pointer-events-none fixed inset-0 z-30 transition duration-300 lg:top-0"
      style={{
        background: `radial-gradient(600px circle at ${position.x}px ${position.y}px, rgba(32, 201, 151, 0.15), transparent 80%)`
      }}
    />
  );
}
