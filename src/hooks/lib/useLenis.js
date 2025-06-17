"use client"
import { useEffect } from "react"
import Lenis from "@studio-freight/lenis"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function useLenis() {
  useEffect(() => {
    if (typeof window === "undefined") return

    const lenis = new Lenis({
      lerp: 0.1,
      smoothWheel: true,
      syncTouch: true,
      infinite: false,
      gestureOrientation: 'vertical',
      smooth: true,
      direction: 'vertical',
      touchMultiplier: 1.5,
    })

    const handleScroll = (e) => {
      window.dispatchEvent(new CustomEvent("lenis-scroll", { detail: { scrollY: e.scroll } }))
    }

    lenis.on("scroll", handleScroll)

    const raf = (time) => {
      lenis.raf(time)
      ScrollTrigger.update() // 🟢 Keep GSAP in sync with Lenis
      requestAnimationFrame(raf)
    }

    requestAnimationFrame(raf)

    return () => {
      lenis.off("scroll", handleScroll)
      lenis.destroy()
    }
  }, [])
}
