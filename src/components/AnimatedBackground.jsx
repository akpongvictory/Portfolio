import { motion } from "framer-motion";

export default function AnimatedBackground() {
  return (
    <div
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 0,
        pointerEvents: "none",
        overflow: "hidden",
      }}
    >
      {/* Slow-drifting green orb — top left */}
      <motion.div
        animate={{
          x: [0, 40, -20, 0],
          y: [0, -30, 20, 0],
          scale: [1, 1.15, 0.95, 1],
        }}
        transition={{
          duration: 18,
          repeat: Infinity,
          ease: "easeInOut",
        }}
        style={{
          position: "absolute",
          top: "-10%",
          left: "-5%",
          width: "520px",
          height: "520px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,197,94,0.13) 0%, transparent 70%)",
          filter: "blur(40px)",
        }}
      />

      {/* Slow-drifting green orb — bottom right */}
      <motion.div
        animate={{
          x: [0, -50, 30, 0],
          y: [0, 40, -25, 0],
          scale: [1, 0.9, 1.1, 1],
        }}
        transition={{
          duration: 22,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 4,
        }}
        style={{
          position: "absolute",
          bottom: "-10%",
          right: "-5%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(21,128,61,0.10) 0%, transparent 70%)",
          filter: "blur(50px)",
        }}
      />

      {/* Faint mid orb — center */}
      <motion.div
        animate={{
          x: [0, 30, -30, 0],
          y: [0, -20, 30, 0],
          opacity: [0.4, 0.7, 0.4],
        }}
        transition={{
          duration: 26,
          repeat: Infinity,
          ease: "easeInOut",
          delay: 8,
        }}
        style={{
          position: "absolute",
          top: "40%",
          left: "45%",
          width: "400px",
          height: "400px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, rgba(34,197,94,0.06) 0%, transparent 70%)",
          filter: "blur(60px)",
          transform: "translate(-50%, -50%)",
        }}
      />
    </div>
  );
}