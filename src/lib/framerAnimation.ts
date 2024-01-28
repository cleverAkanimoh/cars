export const animateDiv = {
  initial: { y: "30%", opacity: 0.1 },
  whileInView: { y: "0%", opacity: 1 },
  transition: { duration: .50, ease: "easeOut", delay: .05 },
  viewport: { once: false },
};