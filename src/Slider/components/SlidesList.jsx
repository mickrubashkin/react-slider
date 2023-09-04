import { useContext } from 'react'
import Slide from './Slide'
import { SliderContext } from '../Slider'

import styled from 'styled-components'

export default function SlidesList() {
  const { slideNumber, items } = useContext(SliderContext)

  return (
    <Wrapper style={{ transform: `translateX(-${slideNumber * 100}%)` }}>
      {items.map((item) => (
        <Slide key={item.id} data={item} />
      ))}
    </Wrapper>
  )
}

const Wrapper = styled.div`
  display: flex;
  height: 100%;
  transition: transform 0.5s ease-in-out;
  width: 100%;

  @media (max-width: 744px) {
  }
`
