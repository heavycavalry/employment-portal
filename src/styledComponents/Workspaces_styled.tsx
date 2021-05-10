import styled from "styled-components"

export const Title = styled.h2`
margin: 2em;
color: var(--darkGray);
text-transform: uppercase;`

export const MainSlider = styled.div`
position: absolute;
background-color:rgba(255,255,255,0.5);
width: 70%;
height: 350px;
overflow: hidden;
`

export const Wrapper = styled.div`
height: 400px;`

export const InnerSlider = styled.div`
position: absolute;
display: flex;
top: 0;
left: 0;
height: 100%;
max-width: 200%;
pointer-events: none;
`
export const SliderBoxItem = styled.div`
position: relative;
min-width: 330px;
height: 330px;
margin: 10px 20px;
background-color: white;
`
export const Image = styled.img`
width: 100%;
height: 70%;
`
export const TextBox = styled.div`
margin: 10px;
color: var(--darkGray);
`

export const SmallText = styled.p`
font-size: 0.8rem;
font-weight: bold;
color: var(--gray);
position: absolute;
bottom: 10px;
`
export const MediumText = styled.p`
font-size: 0.9rem;
padding: 2px 0;
`
export const BigText = styled.h3`
text-transform: uppercase;`