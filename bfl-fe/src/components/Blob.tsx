import React, { useEffect, useRef } from "react";
import { gsap } from "gsap";
import "../styles/blob.css";

const Blob = () => {
  const blobRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const blob = blobRef.current!;
    const blobTl = gsap
      .timeline({ repeat: -1, ease: "none" })
      .to(blob, { rotation: 180, scaleX: 1.6 })
      .to(blob, { rotation: 360, scaleX: 1 })
      .totalDuration(17);
    blobTl.play();

    const onMouseMove = (e: MouseEvent) => {
      gsap.to(blob, {
        left: e.clientX,
        top: e.clientY,
        duration: 2,
        ease: "power2.out",
      });
    };

    window.addEventListener("mousemove", onMouseMove);
    return () => window.removeEventListener("mousemove", onMouseMove);
  }, []);

  return (
    <section id="blob-bg">
      <div
        id="blob"
        ref={blobRef}
        style={{
          background: "linear-gradient(to right, #785599, #9e8548)",
        }}
      />

      <div id="blur" />
    </section>
  );
};

export default Blob;
