import React, { useState, useEffect, useCallback } from 'react'
import { client } from '../client'

function CakeCarousel() {
  const [isCakeCarouLoading, setIsCakeCarouLoading] = useState(true)
  const [CakeCarouSlides, setCakeCarouSlides] = useState([])

  const getCakeCarouSlides = useCallback(async () => {
    try {
      const response = await client.getEntries({ content_type: 'imageCarousel' })
      const responseData = response.items
      console.log(responseData)
    } catch (error) {
      console.log(error)
    }
  }, [])

  useEffect(() => {
    getCakeCarouSlides()
  }, [getCakeCarouSlides])

  return (
    <div>
      <h1>CakeCarousel</h1>
    </div>
  )
}

export default CakeCarousel