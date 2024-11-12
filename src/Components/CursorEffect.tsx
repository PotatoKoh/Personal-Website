import React, { useEffect, useRef, useState } from "react";
const colors = [
  "#04ccb1",
  "#09b8b4",
  "#0d96a5",
  "#107792",
  "#125d80",
  "#13476f",
  "#14365f",
  "#142850",
];

const CursorEffect: React.FC = () => {
  const coords = useRef({ x: 0, y: 0 });
  const circlesRef = useRef<HTMLDivElement[]>([]);
  const [isMoving, setIsMoving] = useState(false);

  useEffect(() => {
    let timer: ReturnType<typeof setTimeout>; // Use browser's setTimeout
    const timeoutDelay = 100; // Time to stop mouse movement before merging

    const handleMouseMove = (e: MouseEvent) => {
      coords.current = { x: e.pageX, y: e.pageY };
      setIsMoving(true);
      if (timer) clearTimeout(timer); // Clear previous timeout
      timer = setTimeout(() => setIsMoving(false), timeoutDelay); // Reset movement flag after timeout
    };

    window.addEventListener("mousemove", handleMouseMove);

    const animateCircles = () => {
      let { x, y } = coords.current;

      circlesRef.current.forEach((circle, index) => {
        if (circle) {
          const scaleValue =
            (circlesRef.current.length - index) / circlesRef.current.length;
          const mergeSpeed = isMoving ? 0.3 : 0.1; // Speed of merging circles

          //Move circles towards the current mouse position
          const currentX = parseFloat(circle.style.left || "0");
          const currentY = parseFloat(circle.style.top || "0");
          // Assuming circle has a fixed width and height, adjust based on its size
          const circleWidth = circle.offsetWidth;
          const circleHeight = circle.offsetHeight;
          const targetX = x - circleWidth / 2;
          const targetY = y - circleHeight / 2;

          // circle.style.left = `${currentX + (x - currentX) * mergeSpeed}px`;
          // circle.style.top = `${currentY + (y - currentY) * mergeSpeed}px`;
          // circle.style.transform = `scale(${scaleValue})`;

          circle.style.left = `${
            currentX + (targetX - currentX) * mergeSpeed
          }px`;
          circle.style.top = `${
            currentY + (targetY - currentY) * mergeSpeed
          }px`;
          circle.style.transform = `scale(${scaleValue})`;

          const nextCircle =
            circlesRef.current[index + 1] || circlesRef.current[0];
          x += (nextCircle?.offsetLeft - x) * 0.3;
          y += (nextCircle?.offsetTop - y) * 0.3;
        }
      });
      if (isMoving) {
        requestAnimationFrame(animateCircles); // Keep animating if moving
      }
    };

    animateCircles();
    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
      if (timer) clearTimeout(timer); // Cleanup on component unmount
    };
  }, [isMoving]);

  return (
    <div className="circle-container">
      {colors.map((color, index) => (
        <div
          key={index}
          ref={(el) => {
            if (el) circlesRef.current[index] = el;
          }}
          className="circle"
          style={{
            backgroundColor: color,
          }}
        />
      ))}
    </div>
  );
};

export default CursorEffect;
