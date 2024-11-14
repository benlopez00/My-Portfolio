import { motion, useAnimationFrame } from "framer-motion";
import { useRef } from "react";

export default function TechCarousel({ images }) {
  const carouselRef = useRef(null);

  var scrollSpeed = 50;

  useAnimationFrame((time, delta) => {
    if (carouselRef.current) {
      carouselRef.current.scrollLeft += (scrollSpeed * delta) / 1000;

      if (carouselRef.current.scrollLeft >= carouselRef.current.scrollWidth / 2) {
        carouselRef.current.scrollLeft = 0;
      }
    }
  });

  return (
    <div className="overflow-hidden w-full h-20 rounded-lg border border-gray-200 p-2">
      <motion.div
        ref={carouselRef}
        className="flex space-x-4"
        style={{ display: "flex", whiteSpace: "nowrap" }}
        whileHover={{ scale: 1, transition: { duration: 0.5 } }}
        onMouseEnter={() => (scrollSpeed = 10)}
        onMouseLeave={() => (scrollSpeed = 50)}
      >
        {images.concat(images).map((src, index) => (
          <img
            key={index}
            src={src}
            alt="Technology logo"
            className="w-16 h-16 object-contain mx-2"
          />
        ))}
      </motion.div>
    </div>
  );
}
