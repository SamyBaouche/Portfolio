import { useEffect, useRef, useState } from 'react';

/**
 * Returns 1 when user scrolls down, -1 when user scrolls up.
 * Tiny deltas are ignored to avoid jitter on touchpads.
 */
export function useScrollDirection(threshold = 3) {
  const [direction, setDirection] = useState(1);
  const lastY = useRef(0);
  const rafId = useRef(null);

  useEffect(() => {
    lastY.current = window.scrollY || 0;

    const onScroll = () => {
      if (rafId.current !== null) return;

      rafId.current = window.requestAnimationFrame(() => {
        const currentY = window.scrollY || 0;
        const delta = currentY - lastY.current;

        if (Math.abs(delta) >= threshold) {
          setDirection(delta > 0 ? 1 : -1);
          lastY.current = currentY;
        }

        rafId.current = null;
      });
    };

    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      window.removeEventListener('scroll', onScroll);
      if (rafId.current !== null) {
        window.cancelAnimationFrame(rafId.current);
      }
    };
  }, [threshold]);

  return direction;
}
