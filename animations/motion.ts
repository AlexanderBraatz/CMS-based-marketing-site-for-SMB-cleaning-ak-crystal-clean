const viewportOnce = {
  once: true,
  amount: 0.3,
  margin: '0px 0px -10% 0px',
} as const;

export const fadeInUp = {
  initial: { y: 20, opacity: 0, scale: 1 },
  whileInView: { y: 0, opacity: 1, scale: 1 },
  viewport: viewportOnce,
  transition: {
    duration: 0.65,
    ease: [0.33, 1, 0.68, 1] as const,
  },
};
