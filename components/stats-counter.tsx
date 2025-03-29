"use client"

import { useState, useEffect, useRef } from "react"
import { useInView } from "react-intersection-observer"

interface StatsCounterProps {
  number: number
  label: string
}

export default function StatsCounter({ number, label }: StatsCounterProps) {
  const [count, setCount] = useState(0)
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  })

  const countingStarted = useRef(false)

  useEffect(() => {
    if (inView && !countingStarted.current) {
      countingStarted.current = true

      let start = 0
      const duration = 2000 // 2 seconds
      const step = Math.ceil(number / (duration / 16)) // 16ms per frame (approx 60fps)

      const timer = setInterval(() => {
        start += step
        if (start > number) {
          setCount(number)
          clearInterval(timer)
        } else {
          setCount(start)
        }
      }, 16)

      return () => clearInterval(timer)
    }
  }, [inView, number])

  return (
    <div ref={ref} className="text-center p-6 bg-white rounded-lg shadow-sm">
      <div className="text-4xl font-bold text-emerald-600 mb-2">{count}+</div>
      <div className="text-slate-600">{label}</div>
    </div>
  )
}

