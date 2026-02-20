'use client';

import { useEffect, useRef, ReactNode } from 'react';

type Direction = 'up' | 'left' | 'right';

export default function ScrollReveal({
  children,
  direction = 'up',
  delay = 0,
  className = '',
}: {
  children: ReactNode;
  direction?: Direction;
  delay?: number;
  className?: string;
}) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setTimeout(() => el.classList.add('visible'), delay);
          observer.unobserve(el);
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -40px 0px' }
    );
    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  const cls =
    direction === 'left'
      ? 'reveal-left'
      : direction === 'right'
        ? 'reveal-right'
        : 'reveal';

  return (
    <div ref={ref} className={`${cls} ${className}`}>
      {children}
    </div>
  );
}
