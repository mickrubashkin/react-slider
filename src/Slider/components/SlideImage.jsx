// import '../styles.scss'
import styled from 'styled-components'

// eslint-disable-next-line react/prop-types
export default function SlideImage({ src, alt }) {
  return <Image src={src} alt={alt} />
}

const Image = styled.img`
  display: flex;
  margin: 0 auto;
  width: 100%;
  height: 100%;
  object-fit: contain;
`
