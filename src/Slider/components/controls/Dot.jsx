import { useContext } from 'react'
import { SliderContext } from '../../Slider'

import styled from 'styled-components'

// eslint-disable-next-line react/prop-types
export default function Dot({ number }) {
  const { goToSlide, slideNumber } = useContext(SliderContext)

  return (
    <Wrapper
      className={`dot ${slideNumber === number ? 'selected' : ''}`}
      onClick={() => goToSlide(number)}
    />
  )
}

const Wrapper = styled.div`
  background-color: #e7e7e7;
  border-radius: 5px;
  height: 10px;
  margin: 5px;
  width: 10px;

  &:hover {
    cursor: pointer;
  }

  &.selected {
    background-color: hsla(219, 63%, 53%, 1);
  }
`
