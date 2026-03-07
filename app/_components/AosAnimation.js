"use client";

import { useEffect } from "react";
import AOS from "aos";
import "aos/dist/aos.css";

export default function AOSInit() {
  useEffect(() => {
    AOS.init({
      // Global settings:
      duration: 1000, // values from 0 to 3000, with step 50ms
      once: true,    // whether animation should happen only once - while scrolling down
      mirror: true,   // whether elements should animate out while scrolling past them
    });
  }, []);

  return null;
}