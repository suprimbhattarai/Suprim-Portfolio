import React, { useEffect } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

// Sun arc positions [x%, y%] per section
const SUN_POSITIONS = [
  [8, 82], // 0 Dawn
  [24, 56], // 1 Morning
  [50, 9], // 2 Noon
  [76, 56], // 3 Afternoon
  [92, 82], // 4 Sunset
];

// Sky gradient layers
const SKY_GRADIENTS = [
  `linear-gradient(to bottom,
    #0d0221 0%,
    #4a044e 18%,
    #9d174d 38%,
    #f43f5e 55%,
    #f97316 72%,
    #fbbf24 85%,
    #fde68a 100%)`,

  `linear-gradient(to bottom,
    #1e3a8a 0%,
    #1d4ed8 18%,
    #38bdf8 42%,
    #bae6fd 68%,
    #fef3c7 84%,
    #fde68a 100%)`,

  `linear-gradient(to bottom,
    #1e3a8a 0%,
    #1d4ed8 16%,
    #3b82f6 42%,
    #60a5fa 68%,
    #bfdbfe 86%,
    #e0f2fe 100%)`,

  `linear-gradient(to bottom,
    #1e3a8a 0%,
    #2563eb 16%,
    #7c3aed 34%,
    #c2410c 56%,
    #ea580c 74%,
    #f59e0b 88%,
    #fde68a 100%)`,

  `linear-gradient(to bottom,
    #020617 0%,
    #0f172a 14%,
    #1e1b4b 28%,
    #4c1d95 46%,
    #be123c 64%,
    #ea580c 80%,
    #fbbf24 96%,
    #fde68a 100%)`,
];

// Sun styling per section
const SUN_CONFIGS = [
  {
    size: 78,
    bg: "radial-gradient(circle, #fff7ed 0%, #fed7aa 25%, #fb923c 60%, #ea580c 100%)",
    glow: "0 0 70px 35px rgba(251,146,60,0.9), 0 0 130px 65px rgba(234,88,12,0.55), 0 0 240px 120px rgba(234,88,12,0.2)",
    hasCrown: true,
    crownColor: "rgba(251,146,60,0.5)",
  },
  {
    size: 58,
    bg: "radial-gradient(circle, #fffde7 0%, #fef08a 30%, #fbbf24 68%, #f59e0b 100%)",
    glow: "0 0 50px 25px rgba(251,191,36,0.85), 0 0 100px 50px rgba(245,158,11,0.4)",
    hasCrown: false,
  },
  {
    size: 50,
    bg: "radial-gradient(circle, #ffffff 0%, #fffde7 28%, #fef9c3 56%, #fef08a 100%)",
    glow: "0 0 45px 22px rgba(255,255,255,0.95), 0 0 90px 45px rgba(254,240,138,0.7), 0 0 180px 90px rgba(253,224,71,0.35)",
    hasCrown: false,
  },
  {
    size: 64,
    bg: "radial-gradient(circle, #fef3c7 0%, #fbbf24 28%, #f97316 60%, #dc2626 100%)",
    glow: "0 0 60px 30px rgba(249,115,22,0.9), 0 0 120px 60px rgba(220,38,38,0.5), 0 0 210px 105px rgba(220,38,38,0.2)",
    hasCrown: true,
    crownColor: "rgba(249,115,22,0.45)",
  },
  {
    size: 80,
    bg: "radial-gradient(circle, #fef9c3 0%, #fbbf24 18%, #f97316 42%, #dc2626 68%, #991b1b 100%)",
    glow: "0 0 80px 40px rgba(220,38,38,0.95), 0 0 160px 80px rgba(153,27,27,0.6), 0 0 280px 140px rgba(153,27,27,0.25)",
    hasCrown: true,
    crownColor: "rgba(220,38,38,0.6)",
  },
];

const CLOUDS = [
  { id: 0, initX: 5, y: 12, w: 130, h: 38, dur: 22, delay: 0, opacity: 0.85 },
  { id: 1, initX: 45, y: 7, w: 100, h: 28, dur: 28, delay: 4, opacity: 0.7 },
  { id: 2, initX: 72, y: 18, w: 150, h: 44, dur: 35, delay: 10, opacity: 0.8 },
  { id: 3, initX: 20, y: 25, w: 80, h: 22, dur: 20, delay: 7, opacity: 0.6 },
  { id: 4, initX: 60, y: 30, w: 110, h: 32, dur: 30, delay: 15, opacity: 0.65 },
];

const STARS = Array.from({ length: 90 }, (_, i) => ({
  id: i,
  x: Math.random() * 100,
  y: Math.random() * 58,
  r: Math.random() * 1.8 + 0.4,
  delay: Math.random() * 4,
  dur: Math.random() * 2.5 + 1.5,
}));

const RAYS = [0, 30, 60, 90, 120, 150].map((angle) => ({
  angle,
  length: 220 + Math.random() * 80,
}));

const Cloud = ({ initX, y, w, h, dur, delay, opacity }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{
      left: `${initX}%`,
      top: `${y}%`,
      width: w,
      height: h,
      opacity,
    }}
    animate={{ x: ["0vw", "5vw", "-3vw", "0vw"] }}
    transition={{ duration: dur, delay, repeat: Infinity, ease: "easeInOut" }}
  >
    <div style={{ position: "relative", width: "100%", height: "100%" }}>
      <div
        style={{
          position: "absolute",
          bottom: 0,
          left: 0,
          right: 0,
          height: "60%",
          background: "rgba(255,255,255,0.88)",
          borderRadius: 999,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "32%",
          left: "20%",
          width: "45%",
          height: "75%",
          background: "rgba(255,255,255,0.82)",
          borderRadius: 999,
        }}
      />
      <div
        style={{
          position: "absolute",
          bottom: "28%",
          left: "45%",
          width: "35%",
          height: "65%",
          background: "rgba(255,255,255,0.78)",
          borderRadius: 999,
        }}
      />
    </div>
  </motion.div>
);

const StarField = ({ visible }) => (
  <motion.div
    className="absolute inset-0 pointer-events-none"
    animate={{ opacity: visible ? 1 : 0 }}
    transition={{ duration: 1.8 }}
  >
    {STARS.map((s) => (
      <motion.div
        key={s.id}
        className="absolute rounded-full bg-white"
        style={{
          left: `${s.x}%`,
          top: `${s.y}%`,
          width: s.r * 2,
          height: s.r * 2,
        }}
        animate={{ opacity: [0.2, 1, 0.2] }}
        transition={{
          duration: s.dur,
          delay: s.delay,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />
    ))}
  </motion.div>
);

const LightRays = ({ visible, x, y, color }) => (
  <motion.div
    className="absolute pointer-events-none"
    style={{
      left: x,
      top: y,
      transform: "translate(-50%, -50%)",
    }}
    animate={{ opacity: visible ? 1 : 0 }}
    transition={{ duration: 1 }}
  >
    <motion.div
      animate={{ rotate: [0, 3, -3, 0], opacity: [0.4, 0.65, 0.4] }}
      transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
    >
      {RAYS.map((ray) => (
        <div
          key={ray.angle}
          style={{
            position: "absolute",
            top: "50%",
            left: "50%",
            transformOrigin: "0 50%",
            transform: `rotate(${ray.angle}deg) translateY(-50%)`,
            width: ray.length,
            height: 2,
            background: `linear-gradient(to right, ${color}, transparent)`,
          }}
        />
      ))}
    </motion.div>
  </motion.div>
);

const HorizonBloom = ({ sectionIndex, sunLeft }) => {
  const isDawn = sectionIndex === 0;
  const isSunset = sectionIndex === 4;

  if (!isDawn && !isSunset) return null;

  const color = isDawn ? "rgba(251,146,60,0.5)" : "rgba(220,38,38,0.55)";

  return (
    <motion.div
      className="absolute pointer-events-none"
      style={{
        bottom: 0,
        left: sunLeft,
        width: "60vw",
        height: "45vh",
        transform: "translateX(-50%)",
        background: `radial-gradient(ellipse at 50% 100%, ${color} 0%, transparent 70%)`,
      }}
      animate={{ opacity: [0.6, 1, 0.6] }}
      transition={{ duration: 3.5, repeat: Infinity, ease: "easeInOut" }}
    />
  );
};

const SkyBackground = ({ sectionIndex }) => {
  const idx = Math.min(Math.max(sectionIndex, 0), 4);
  const sunCfg = SUN_CONFIGS[idx];

  const rawX = useMotionValue(SUN_POSITIONS[0][0]);
  const rawY = useMotionValue(SUN_POSITIONS[0][1]);
  const springX = useSpring(rawX, { stiffness: 40, damping: 18 });
  const springY = useSpring(rawY, { stiffness: 40, damping: 18 });

  const sunLeft = useTransform(springX, (v) => `${v}%`);
  const sunTop = useTransform(springY, (v) => `${v}%`);

  const rawSize = useMotionValue(SUN_CONFIGS[0].size);
  const springSize = useSpring(rawSize, { stiffness: 40, damping: 18 });

  const crownSize = useTransform(springSize, (s) => s * 2.6);
  const crownOffset = useTransform(springSize, (s) => -(s * 2.6) / 2);

  useEffect(() => {
    rawX.set(SUN_POSITIONS[idx][0]);
    rawY.set(SUN_POSITIONS[idx][1]);
    rawSize.set(SUN_CONFIGS[idx].size);
  }, [idx, rawX, rawY, rawSize]);

  const cloudOpacity = [0.28, 0.72, 1, 0.8, 0.18][idx];
  const hasRays = idx === 0 || idx === 4;
  const rayColor = idx === 0 ? "rgba(251,146,60,0.35)" : "rgba(220,38,38,0.4)";

  return (
    <div
      aria-hidden="true"
      className="fixed inset-0 pointer-events-none overflow-hidden"
      style={{ zIndex: 0 }}
    >
      {SKY_GRADIENTS.map((grad, i) => (
        <motion.div
          key={i}
          className="absolute inset-0"
          style={{ background: grad }}
          animate={{ opacity: i === idx ? 1 : 0 }}
          transition={{ duration: 1.8, ease: "easeInOut" }}
        />
      ))}

      <StarField visible={idx === 4} />

      <motion.div
        className="absolute inset-0"
        animate={{ opacity: cloudOpacity }}
        transition={{ duration: 1.6 }}
      >
        {CLOUDS.map((cloud) => (
          <Cloud key={cloud.id} {...cloud} />
        ))}
      </motion.div>

      {hasRays && (
        <LightRays visible={hasRays} x={sunLeft} y={sunTop} color={rayColor} />
      )}

      <HorizonBloom sectionIndex={idx} sunLeft={sunLeft} />

      {sunCfg.hasCrown && (
        <motion.div
          className="absolute rounded-full"
          style={{
            left: sunLeft,
            top: sunTop,
            transform: "translate(-50%, -50%)",
          }}
          animate={{ opacity: [0.5, 0.85, 0.5] }}
          transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
        >
          <motion.div
            style={{
              width: crownSize,
              height: crownSize,
              marginLeft: crownOffset,
              marginTop: crownOffset,
              background: `radial-gradient(circle, ${sunCfg.crownColor} 0%, transparent 70%)`,
              borderRadius: "50%",
              position: "absolute",
            }}
          />
        </motion.div>
      )}

      <motion.div
        className="absolute rounded-full"
        style={{
          left: sunLeft,
          top: sunTop,
          width: springSize,
          height: springSize,
          transform: "translate(-50%, -50%)",
          background: sunCfg.bg,
          boxShadow: sunCfg.glow,
        }}
      />

      <motion.div
        className="absolute inset-0"
        animate={{ opacity: idx === 2 ? 0.18 : 0 }}
        transition={{ duration: 1.5 }}
        style={{
          background:
            "radial-gradient(ellipse at 50% 0%, rgba(255,255,255,0.9) 0%, transparent 50%)",
        }}
      />
    </div>
  );
};

export default SkyBackground;
