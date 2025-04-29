// hooks/useScrollDirection.js
import { useState, useEffect } from 'react'

export const useScrollDirection = () => {
  const [scrollDir, setScrollDir] = useState('down')

  useEffect(() => {
    let lastScrollY = window.pageYOffset

    const updateScrollDir = () => {
      const currentScrollY = window.pageYOffset
      if (currentScrollY > lastScrollY) {
        setScrollDir('down')
      } else if (currentScrollY < lastScrollY) {
        setScrollDir('up')
      }
      lastScrollY = currentScrollY
    }

    window.addEventListener('scroll', updateScrollDir)
    return () => window.removeEventListener('scroll', updateScrollDir)
  }, [])

  return scrollDir
}
