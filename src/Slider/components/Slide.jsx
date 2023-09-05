import SlideTitle from './SlideTitle'
import SlideImage from './SlideImage'
import styled from 'styled-components'

import SlideDescription from './SlideDescription'
import Dots from './controls/Dots'

// eslint-disable-next-line react/prop-types
export default function Slide({ data: { imageUrl, title, description } }) {
  return (
    <Wrapper>
      <SlideInfoWrapper>
        <SlideTitle title={title} />
        <SlideDescription description={description} />
        <Button href="https://ya.ru">Текст кнопки</Button>
        <Dots />
      </SlideInfoWrapper>
      <ImageWrapper>
        <SlideImage src={imageUrl} alt={title} />
      </ImageWrapper>
    </Wrapper>
  )
}

const Wrapper = styled.div`
  flex: 1 0 100%;
  position: relative;
  display: flex;

  @media (max-width: 744px) {
    flex-direction: column;
    justify-content: space-between;
    height: 100vh;
    padding: 66px 62px 59px 62px;
  }

  @media (max-width: 375px) {
    padding: 57px 38px 44px 38px;
  }
`

const SlideInfoWrapper = styled.div`
  width: 43%;
  margin: 120px 40px 0 100px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;

  @media (max-width: 744px) {
    width: 100%;
    margin: 0;
    /* margin-top: 66px; */
  }

  @media (max-width: 375px) {
    margin: 0;
  }
`
const Button = styled.button`
  background: hsla(219, 63%, 53%, 1);
  height: 64px;
  padding: 20px 10px 20px 10px;
  margin-top: 115px;
  border-radius: 8px;
  color: hsla(0, 0%, 100%, 1);
  font-size: 20px;
  text-align: center;

  @media (max-width: 375px) {
    margin-top: 22px;
    margin-bottom: 16px;
  }
`
const ImageWrapper = styled.div`
  width: 57%;

  @media (max-width: 744px) {
    width: 100%;
    height: 580px;
    margin-bottom: 110px;
    margin-top: 32px;
  }

  @media (max-width: 375px) {
    margin-top: 0;
    margin-bottom: 72px;
  }
`
