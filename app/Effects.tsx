"use client";

import { useEffect } from "react";

export default function Effects() {
  useEffect(() => {
    const glow = document.querySelector<HTMLElement>(".cursor-glow");
    const onMove = (e: MouseEvent) => {
      if (!glow) return;
      glow.style.left = e.clientX + "px";
      glow.style.top = e.clientY + "px";
    };
    if (glow && window.matchMedia("(pointer:fine)").matches) {
      document.addEventListener("mousemove", onMove);
    } else if (glow) {
      glow.style.display = "none";
    }

    const revealTargets = document.querySelectorAll<HTMLElement>(
      ".section,.marquee,.service-card,.project-card,.flow>div,.toolkit>div,.credential-row,.achievement-box"
    );
    revealTargets.forEach((el) => el.classList.add("reveal"));

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("is-visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.1, rootMargin: "0px 0px -40px 0px" }
    );
    revealTargets.forEach((el) => observer.observe(el));

    // Small stagger for cards entering the viewport.
    document
      .querySelectorAll<HTMLElement>(".service-grid,.project-grid,.flow")
      .forEach((grid) => {
        Array.from(grid.children).forEach((card, i) => {
          (card as HTMLElement).style.transitionDelay = `${Math.min(i * 70, 350)}ms`;
        });
      });

    return () => {
      document.removeEventListener("mousemove", onMove);
      observer.disconnect();
    };
  }, []);

  return null;
}
