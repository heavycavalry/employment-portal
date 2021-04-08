import React, { FC } from 'react'
import styled from 'styled-components'

const ImageContainer = styled.div`
  position: relative;
  width: 500px;
  background-repeat: no-repeat;
  background-image: url('https://i.picsum.photos/id/668/200/200.jpg?hmac=mVqr1fc4nHFre2QMZp5cuqUKLIRSafUtWt2vwlA9jG0');
  background-size: cover;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;;
`
const Overlay = styled.div`
  position: absolute;
  background: var(--overlay);
  width: 100%;
  height: 100%;
  border-top-left-radius: 5px;
  border-bottom-left-radius: 5px;
`
const BottomDiv = styled.p`
  margin: 20px;
  line-height: 1.5;
  position: absolute;
  z-index: 1;
  bottom: 0;
  color: white;
`
const MainPublication: FC = () => (
  <ImageContainer>
    <Overlay/>
    <BottomPublication />
  </ImageContainer>
)

const BottomPublication: FC = () => (
  <BottomDiv>
    <PublicationText />
    <Info />
  </BottomDiv>
)

const PublicationText = () => (
  <p>
    Lorem ipsum dolor, sit amet consectetur adipisicing.
  </p>
)


const Wrapper = styled.div`
display: flex;`
const Info = () => (
  <Wrapper>
    <p>21 Jan 1994</p>
  </Wrapper>
)


export default MainPublication
