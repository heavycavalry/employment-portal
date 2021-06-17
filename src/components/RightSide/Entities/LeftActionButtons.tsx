import { env } from 'node:process'
import React, { FC } from 'react'
import styled from 'styled-components'
import { DropBtn, Dots, Filtr, Sort, Share, Expand } from './Entities_styles'

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