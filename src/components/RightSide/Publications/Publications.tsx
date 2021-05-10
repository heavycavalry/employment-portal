import React, { FC } from 'react'
import styled from 'styled-components'
import { IRandomNumber } from '../../../App'
import LatestPublications from './LatestPublications'
import MainPublication from './MainPublication'

const Wrapper = styled.div`
  display: flex;
  height: 450px;
  background-color: rgba(255,255,255,0.5);;
  border-radius: 5px;
  position:relative;`

const Button = styled.button`
position: absolute;
font-weight: bold;
bottom:0;
right: 50px;
padding: 5px;
background: none;
color: var(--blue);
;`
  
const Publications: FC<IRandomNumber> = ({id}) => {
    return (
      <Wrapper>
        <MainPublication id={id}/>
        <LatestPublications id={id}/>
        <Button>See more publications</Button>
      </Wrapper>
    )
}


export default Publications
