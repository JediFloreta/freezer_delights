import React, { useState } from 'react'

function CakeCarousel() {
  const [isCakeCarouLoading, setIsCakeCarouLoading] = useState(true)
  const [CakeCarouSlides, setCakeCarouSlides] = useState([])

  return (
    <div>
      <h1>CakeCarousel</h1>
    </div>
  )
}

export default CakeCarousel