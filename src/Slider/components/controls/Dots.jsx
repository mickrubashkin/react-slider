import { useContext } from 'react'
import { SliderContext } from '../../Slider'
import Dot from './Dot'

import styled from 'styled-components'

export default function Dots() {
  const { slidesCount } = useContext(SliderContext)

  const renderDots = () => {
    const dots = []
    for (let i = 0; i < slidesCount; i++) {
      dots.push(<Dot key={`dot-${i}`} number={i} />)
    }

    return dots
  }

  return <Wrapper>{renderDots()}</Wrapper>
}

const Wrapper = styled.div`
  display: flex;
  justify-content: center;
  padding: 20px 0;
  z-index: 2;

  @media (max-width: 744px) {
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
  }

  @media (max-width: 375px) {
    bottom: 34px;
  }
`
