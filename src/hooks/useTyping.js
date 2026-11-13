import { useEffect, useState } from 'react'

const prefersReducedMotion = () =>
  typeof window !== 'undefined' && window.matchMedia('(prefers-reduced-motion: reduce)').matches

export default function useTyping(text, speed = 110) {
  const [count, setCount] = useState(prefersReducedMotion() ? text.length : 0)

  useEffect(() => {
    if (count >= text.length) return undefined
    const id = setTimeout(() => setCount((c) => c + 1), speed)
    return () => clearTimeout(id)
  }, [count, text, speed])

  return { typed: text.slice(0, count), done: count >= text.length }
}
