import styled from "styled-components"

export const Container = styled.div`
position: relative;
`
export const Input = styled.input`
border: none;
padding: 2px 5px;
border-radius: 2px;
&:focus {
 outline: none;
}
`
export const SearchIcon = styled.i`
position: absolute;
top: 4px;
right: 150px;
color: gray;
`
export const FollowedDropdown = styled.button`
margin-left: 10px;
&::before {
    padding-left: 5px;
    content: "\f1ce";
    padding-right:10px;
}
&::after {
    padding: 0 5px 0 10px;
    content: "\f078";
}`