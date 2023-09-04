import styled from 'styled-components'

// eslint-disable-next-line react/prop-types
export default function SliderDescription({ description }) {
  return <Description className="slide-description">{description}</Description>
}

const Description = styled.div`
  font-family: Inter;
  font-size: 24px;
  font-weight: 400;
  line-height: 34px;
  letter-spacing: 0em;
  text-align: left;

  @media (max-width: 1440px) {
    font-size: 20px;
    line-height: 28px;
  }

  @media (max-width: 744px) {
    margin-top: 20px;
  }
`
