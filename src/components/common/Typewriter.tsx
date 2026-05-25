"use client";
import React, { useState, useEffect } from "react";

interface TypewriterProps {
  text?: string;
  words?: string[];
  speed?: number; // typing speed in ms
  delay?: number; // initial delay in ms
  className?: string;
  cursor?: boolean;
}

export default function Typewriter({ 
  text, 
  words,
  speed = 85, 
  delay = 500, 
  className = "", 
  cursor = true 
}: TypewriterProps) {
  
  const phrases = words || (text ? [text] : []);
  const [currentText, setCurrentText] = useState("");
  const [index, setIndex] = useState(0);
  const [phase, setPhase] = useState<"typing" | "paused" | "deleting">("typing");
  const [hasStarted, setHasStarted] = useState(false);

  // Initial delay before starting the loop
  useEffect(() => {
    if (!hasStarted) {
      const t = setTimeout(() => setHasStarted(true), delay);
      return () => clearTimeout(t);
    }
  }, [delay, hasStarted]);

  // Typing and deleting loop
  useEffect(() => {
    if (!hasStarted || phrases.length === 0) return;

    const phrase = phrases[index];

    if (phase === "typing") {
      if (currentText === phrase) {
        // Pause at the end before deleting
        const t = setTimeout(() => setPhase("deleting"), 2000);
        return () => clearTimeout(t);
      }
      // Type next character
      const t = setTimeout(
        () => setCurrentText(phrase.slice(0, currentText.length + 1)),
        speed
      );
      return () => clearTimeout(t);
    }

    if (phase === "deleting") {
      if (currentText === "") {
        // Move to next word when fully deleted
        setIndex((i) => (i + 1) % phrases.length);
        setPhase("typing");
        return;
      }
      // Delete character (faster than typing)
      const t = setTimeout(() => setCurrentText(currentText.slice(0, -1)), speed / 2);
      return () => clearTimeout(t);
    }
  }, [currentText, phase, index, phrases, speed, hasStarted]);

  if (phrases.length === 0) return null;

  return (
    <span className={className}>
      {currentText}
      {cursor && (
        <span 
          className="inline-block w-[3px] h-[0.9em] bg-brand-500 ml-1 align-middle translate-y-[-2px] animate-pulse" 
        />
      )}
    </span>
  );
}
