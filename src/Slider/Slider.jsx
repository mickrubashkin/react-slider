import { useEffect, useState, createContext } from 'react'
import PropTypes from 'prop-types'
import styled from 'styled-components'

import Arrows from './components/controls/Arrows'
import SlidesList from './components/SlidesList'

export const SliderContext = createContext()

import slidesData from '../data'

const Slider = function ({ width, height, autoPlay, autoPlayTime }) {
  const [items] = useState(slidesData)
  const [slide, setSlide] = useState(0)
  const [touchPosition, setTouchPosition] = useState(null)

  const changeSlide = (direction = 1) => {
    let slideNumber = 0

    if (slide + direction < 0) {
      slideNumber = items.length - 1
    } else {
      slideNumber = (slide + direction) % items.length
    }

    setSlide(slideNumber)
  }

  const goToSlide = (number) => {
    setSlide(number % items.length)
  }

  const handleTouchStart = (e) => {
    const touchDown = e.touches[0].clientX

    setTouchPosition(touchDown)
  }

  const handleTouchMove = (e) => {
    if (touchPosition === null) {
      return
    }

    const currentPosition = e.touches[0].clientX
    const direction = touchPosition - currentPosition

    if (direction > 10) {
      changeSlide(1)
    }

    if (direction < -10) {
      changeSlide(-1)
    }

    setTouchPosition(null)
  }

  useEffect(() => {
    if (!autoPlay) return

    const interval = setInterval(() => {
      changeSlide(1)
    }, autoPlayTime)

    return () => {
      clearInterval(interval)
    }
  }, [items.length, slide])

  return (
    <Wrapper
      style={{ width, height }}
      onTouchStart={handleTouchStart}
      onTouchMove={handleTouchMove}
    >
      <SliderContext.Provider
        value={{
          goToSlide,
          changeSlide,
          slidesCount: items.length,
          slideNumber: slide,
          items,
        }}
      >
        <Arrows />
        <SlidesList />
      </SliderContext.Provider>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  overflow: hidden;
  position: relative;
  max-width: 1640px;
  margin: 0 auto;
  border-radius: 20px;
  background-color: white;

  @media (max-width: 1440px) {
    max-width: 1160px;
  }

  @media (max-width: 744px) {
    width: 100%;
  }

  @media (max-width: 375px) {
    width: 100%;
  }
`

Slider.propTypes = {
  autoPlay: PropTypes.bool,
  autoPlayTime: PropTypes.number,
  width: PropTypes.string,
  height: PropTypes.string,
}

Slider.defaultProps = {
  autoPlay: false,
  autoPlayTime: 5000,
  width: '100%',
  height: '100%',
}

export default Slider
