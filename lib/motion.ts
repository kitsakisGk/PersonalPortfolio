import type { Variants } from "framer-motion";

export const fadeUp = (stagger = 0.08): Variants => ({
  hidden: { opacity: 0, y: 28 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.52,
      ease: [0.22, 1, 0.36, 1] as [number, number, number, number],
      delay: i * stagger,
    },
  }),
});

export const sectionDivider: Variants = {
  hidden: { scaleY: 0 },
  visible: { scaleY: 1, transition: { duration: 0.6 } },
};
