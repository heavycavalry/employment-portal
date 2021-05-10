import React, { FC } from "react"
import styled from 'styled-components'


const Container = styled.div`
background-color: white;
border-radius: 5px;
padding: 20px;`

const BtnWrapper = styled.div`
display: flex;
justify-content: space-around;`

const AddBtn = styled.button`
position: relative;
background: none;
color: var(--blue) !important;
font-weight: bold;
&::before {
    content: "\f067";
    position: absolute;
    left: -20px;
    top: 1px;
    color: var(--blue) !important;
}`

const ChooseBtn = styled.button`
position: relative;
background: none;
color: var(--blue) !important;
font-weight: bold;
&::after {
    content: "\f107";
    position: absolute;
    right: -20px;
    top: 2px;
    color: var(--blue) !important;
}`

export const Filters: FC = () => (
<Container>
    <p>Rows are filtered by the following conditions starting from the top</p>
    <FilterLine/>
<Buttons/>
</Container>)

export const FilterLine: FC = () => (
    <>    

    </>)

export const Buttons: FC = () => (
<BtnWrapper>    
<AddBtn>Add filter</AddBtn>
<ChooseBtn>Choose property</ChooseBtn>
</BtnWrapper>)