import { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import styles from "../../styles/Carousel.module.css";

function Carousel() {
  const IMAGES = [
    "src/assets/public/IMAGE_1.jpeg",
    "src/assets/public/IMAGE_2.jpg",
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  // Auto-slide every 3 seconds
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 10000);
    return () => clearInterval(timer);
  }, [activeIndex]);

  const nextSlide = () => {
    setActiveIndex((prevIndex) => (prevIndex + 1) % IMAGES.length);
  };

  const variants = {
    enter: (dir) => ({
      x: dir > 0 ? 300 : -300,
      opacity: 0,
    }),
    center: {
      x: 0,
      opacity: 1,
    },
    exit: (dir) => ({
      x: dir > 0 ? -300 : 300,
      opacity: 0,
    }),
  };

  return (
    <div className={styles.Carousel}>
      <div className="relative">
        <div className={styles.Display}>
          <AnimatePresence custom={direction} mode="wait">
            <motion.img
              key={activeIndex}
              src={IMAGES[activeIndex]}
              alt={`Slide ${activeIndex + 1}`}
              className="w-full h-full object-cover"
              custom={direction}
              variants={variants}
              initial="enter"
              animate="center"
              exit="exit"
              loading="lazy"
              transition={{ duration: 0.5 }}
            />
          </AnimatePresence>
        </div>
        <div className="absolute bottom-3 left-1/2 -translate-x-1/2 flex space-x-2">
          {IMAGES.map((_, index) => (
            <span
              key={index}
              onClick={() => {
                setDirection(index > activeIndex ? 1 : -1);
                setActiveIndex(index);
              }}
              className={`${styles.Changers} transition ${
                index === activeIndex ? "bg-green-500" : "bg-gray-300"
              }`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
}

export default Carousel;
