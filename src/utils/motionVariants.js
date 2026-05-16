// ─── Shared Framer Motion variants ────────────────────────────────────────────
// Used across all section components for consistent scroll-triggered animations.
// App.jsx wraps everything in <MotionConfig reducedMotion="user"> so these
// animations are automatically disabled for users who prefer reduced motion.

/** Fade + slide up — main building block */
export const fadeUp = {
  hidden: { opacity: 0, y: 32 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Slide in from the left — used for project cards */
export const slideLeft = {
  hidden: { opacity: 0, x: -64 },
  visible: {
    opacity: 1,
    x: 0,
    transition: { duration: 0.65, ease: [0.22, 1, 0.36, 1] },
  },
};

/** Pure fade — for subtler elements */
export const fadeIn = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: { duration: 0.5, ease: 'easeOut' },
  },
};

/** Stagger wrapper — orchestrates children one after another */
export const stagger = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.1,
      delayChildren: 0.05,
    },
  },
};

/** Faster stagger for dense grids (skill pills, chips) */
export const staggerFast = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.055,
      delayChildren: 0.0,
    },
  },
};

/** Common useInView options — fires once, starts 80px before element hits viewport */
export const inViewOptions = { once: true, margin: '-80px 0px' };
