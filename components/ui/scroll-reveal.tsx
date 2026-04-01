"use client"

import {
  useEffect,
  useRef,
  useState,
  type CSSProperties,
  type ElementType,
  type ReactNode,
} from "react"

import { cn } from "@/lib/utils"

type ScrollRevealProps = {
  children: ReactNode
  className?: string
  delay?: number
  as?: ElementType
}

export function ScrollReveal({
  children,
  className,
  delay = 0,
  as: Component = "div",
}: ScrollRevealProps) {
  const ref = useRef<HTMLElement | null>(null)
  const [isVisible, setIsVisible] = useState(false)

  useEffect(() => {
    const node = ref.current

    if (!node) {
      return
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (!entry?.isIntersecting) {
          return
        }

        setIsVisible(true)
        observer.unobserve(entry.target)
      },
      {
        threshold: 0.15,
        rootMargin: "0px 0px -10% 0px",
      }
    )

    observer.observe(node)

    return () => observer.disconnect()
  }, [])

  return (
    <Component
      ref={ref}
      className={cn("scroll-reveal", isVisible && "is-visible", className)}
      style={{ "--reveal-delay": `${delay}ms` } as CSSProperties}
    >
      {children}
    </Component>
  )
}
