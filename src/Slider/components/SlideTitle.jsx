import styled from 'styled-components'

// eslint-disable-next-line react/prop-types
export default function SlideTitle({ title }) {
  return <Title className="slide-title">{title}</Title>
}

const Title = styled.h1`
  margin: 0;
  padding: 0;
  font-family: Inter;
  font-size: 68px;
  font-weight: 700;
  line-height: 82px;
  letter-spacing: 0em;
  text-align: left;

  @media (max-width: 1440px) {
    font-size: 50px;
    line-height: 61px;
  }
`
