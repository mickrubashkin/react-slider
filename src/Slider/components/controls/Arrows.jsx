import { useContext } from 'react'
import { SliderContext } from '../../Slider'
import styled from 'styled-components'
import Icon from '../Icon/Icon'

export default function Arrows() {
  const { changeSlide } = useContext(SliderContext)

  return (
    <Wrapper>
      <IconWrapper>
        <Icon
          id="chevron-left"
          color="hsla(0, 0%, 12%, 1)"
          size="40px"
          onClick={() => changeSlide(-1)}
        />
      </IconWrapper>
      <IconWrapper>
        <Icon
          id="chevron-right"
          color="hsla(0, 0%, 12%, 1)"
          size="40px"
          onClick={() => changeSlide(1)}
        />
      </IconWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  color: white;
  display: flex;
  font-size: 30px;
  justify-content: space-between;
  height: 100%;
  position: absolute;
  top: 50%;
  width: 100%;
  z-index: 1;

  @media (max-width: 744px) {
    display: none;
  }
`

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 50%;
  opacity: 50%;
  background: hsla(0, 0%, 96%, 1);
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`
