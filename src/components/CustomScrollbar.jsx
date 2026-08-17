import React, { useEffect, useState, useCallback } from 'react';

export default function CustomScrollbar() {
  const [scrollData, setScrollData] = useState({
    progress: 0,
    thumbHeight: 100,
    windowHeight: 0
  });
  const [isScrolling, setIsScrolling] = useState(false);

  const handleScroll = useCallback(() => {
    if (typeof window === 'undefined') return;
    
    const scrollY = window.scrollY;
    const windowHeight = window.innerHeight;
    const documentHeight = document.documentElement.scrollHeight;
    
    const maxScroll = Math.max(0, documentHeight - windowHeight);
    const progress = maxScroll > 0 ? scrollY / maxScroll : 0;
    
    // Calculate thumb size based on ratio of window to document
    const heightRatio = Math.max(0.05, Math.min(1, windowHeight / documentHeight));
    const thumbHeight = heightRatio * windowHeight;
    
    setScrollData({ progress, thumbHeight, windowHeight });
    setIsScrolling(true);
  }, []);

  useEffect(() => {
    window.addEventListener('scroll', handleScroll, { passive: true });
    window.addEventListener('resize', handleScroll, { passive: true });
    
    // Initial measurement after a short delay to ensure DOM is ready
    setTimeout(handleScroll, 100);

    return () => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleScroll);
    };
  }, [handleScroll]);

  // Handle fading timeout
  useEffect(() => {
    if (isScrolling) {
      const timeout = setTimeout(() => {
        setIsScrolling(false);
      }, 1000); // Fades away after 1 second of inactivity
      return () => clearTimeout(timeout);
    }
  }, [isScrolling, scrollData.progress]);

  // Don't render if there's no scrolling needed
  if (scrollData.windowHeight === 0 || scrollData.thumbHeight >= scrollData.windowHeight) return null;

  // Max translation space available for the thumb
  const maxTranslate = scrollData.windowHeight - scrollData.thumbHeight;
  const translateY = scrollData.progress * maxTranslate;

  return (
    <div 
      className={`fixed top-0 right-0 h-full w-[6px] z-[99999] transition-opacity duration-500 ease-out pointer-events-none ${isScrolling ? 'opacity-100' : 'opacity-0'}`}
    >
      <div 
        className="absolute w-full bg-teal rounded-full"
        style={{ 
          height: `${scrollData.thumbHeight}px`,
          transform: `translateY(${translateY}px)`
        }}
      />
    </div>
  );
}
