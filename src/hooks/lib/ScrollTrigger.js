import { useEffect, useRef } from "react"
import { gsap } from "gsap"
import { ScrollTrigger } from "gsap/ScrollTrigger"

gsap.registerPlugin(ScrollTrigger)

export default function AboutSection() {
  const aboutRef = useRef(null)

  useEffect(() => {
    gsap.fromTo(
      aboutRef.current,
      { opacity: 0, y: 50 },
      {
        opacity: 1,
        y: 0,
        duration: 1,
        scrollTrigger: {
          trigger: aboutRef.current,
          start: "top 80%",
          end: "top 30%",
          scrub: true, // 🟢 Use scrub for smooth sync
        },
      }
    )
  }, [])

  return (
    <section ref={aboutRef} className="min-h-screen bg-white">
      <h2>About Me</h2>
      <p>This content animates on scroll.</p>
    </section>
  )
}
