import { env } from 'node:process'
import React, { FC } from 'react'
import styled from 'styled-components'

const DropBtn = styled.button`
&::before {
    padding: 0 10px;
    content: "\f192";
    padding-right:10px;
}
&::after {
    content: "\f078";
    padding: 0 10px;
}`
const Dots = styled.button`
background: transparent;
border-right: 2px solid #b9b9b9;
&::before {
    content: "\f141";
    padding: 0 10px;
}`

const Sort = styled.button`border: none;
background: transparent;
padding-right: 10px;
border-right: 2px solid #b9b9b9;
&::before {
    padding: 0 10px;
    content: "\f0dc";
}`

const Filtr = styled.button`
padding-right: 10px;
background: transparent;
border-right: 2px solid #b9b9b9;
&::before {
    padding: 0 10px;
    content: "\f0b0";}`

const Expand = styled.button`border: none;
background: transparent;
border-right: 2px solid #b9b9b9;
&::before {
    padding: 0 10px;
    content: "\f424";}`

const Share = styled.button`border: none;
background: transparent;
&::before {
    padding: 0 5px 0 10px;
    content: "\f14d";
}`

export const LeftActionButtons: FC = () => {
    return (
        <div className="entitiesStyle">
            <DropBtn className="whiteBtn">All</DropBtn>
            <Dots></Dots>
            <Sort>Sort</Sort>
            <Filtr onClick={handleFiltersClick}>Filters</Filtr>
            <Expand onClick={handleExpandClick}></Expand>
            <Share onClick={() => {navigator.clipboard.writeText(window.location.href)}}>Share</Share>
        </div>
    )
}

function getLeftSide(): HTMLElement {
    return document.querySelector('.left-side') as HTMLElement;
  };

  function getNavBar(): HTMLElement {
    return document.querySelector('.navbar') as HTMLElement;
  };

  function getFilters(): HTMLElement {
    return document.querySelector('.filters') as HTMLElement;
  };

function handleExpandClick() {
    getNavBar().classList.toggle("hide");
    getLeftSide().classList.toggle("hide");
}

function handleFiltersClick() {
    getFilters().classList.toggle("show");
}