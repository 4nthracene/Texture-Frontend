import React, { useEffect } from 'react'

export default function index() {
  useEffect(() => {
      setTimeout(() => {
          window.close();
      }, 1200)
  }, [])
  return (
    <div>Thanks for signing in :)</div>
  )
}
