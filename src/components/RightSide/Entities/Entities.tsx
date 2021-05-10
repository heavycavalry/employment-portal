import {FC} from 'react'
import styled from 'styled-components'
import { EntitiesActionButtons } from './EntitiesActionButtons'
import { TopEntities } from './TopEntities'

const Container = styled.div`
font-size: 0.9rem;
`
const EntitiesContainer = styled.div`
margin-top: 20px;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
grid-gap: 1rem;
`
const Item = styled.div`
width: 270px;
background-color: white;
box-shadow: 1px 1px 5px 1px #8e8e8e;
border-radius: 3px;
display: flex;
`
const TextBox = styled.div`
display: flex;
flex-direction: column;
justify-content: space-between;`

const Image = styled.img`
width: 120px;;
border-top-left-radius: 5px;
border-bottom-left-radius: 5px;
`
const CompanyName = styled.h3`
padding: 5px;
text-align: center;
`
const Address = styled.p`
padding: 10px;
`

interface IEntitiesTile {
    photo: string;
}

export const Entities: FC = () => (
    <Container>
        <TopEntities />
        <EntitiesActionButtons />
        <EntitiesTiles/>
    </Container>
)

export const EntitiesTiles: FC = () => (
    
    <EntitiesContainer>
    <EntitiesTile photo="https://i.picsum.photos/id/1049/200/200.jpg?hmac=9458e0GuMIU0518gk-YBqEGna1AnYjhDQGPEXFp-J04" company="Ala ma kota" address="Cukierkowa Street"/>
    <EntitiesTile photo="https://i.picsum.photos/id/1049/200/200.jpg?hmac=9458e0GuMIU0518gk-YBqEGna1AnYjhDQGPEXFp-J04" company="Ala ma kota" address="Cukierkowa Street"/>
    <EntitiesTile photo="https://i.picsum.photos/id/1049/200/200.jpg?hmac=9458e0GuMIU0518gk-YBqEGna1AnYjhDQGPEXFp-J04" company="Ala ma kota" address="Cukierkowa Street"/>
    <EntitiesTile photo="https://i.picsum.photos/id/1049/200/200.jpg?hmac=9458e0GuMIU0518gk-YBqEGna1AnYjhDQGPEXFp-J04" company="Ala ma kota" address="Cukierkowa Street"/>
    <EntitiesTile photo="https://i.picsum.photos/id/1049/200/200.jpg?hmac=9458e0GuMIU0518gk-YBqEGna1AnYjhDQGPEXFp-J04" company="Ala ma kota" address="Cukierkowa Street"/>
    <EntitiesTile photo="https://i.picsum.photos/id/1049/200/200.jpg?hmac=9458e0GuMIU0518gk-YBqEGna1AnYjhDQGPEXFp-J04" company="Ala ma kota" address="Cukierkowa Street"/>
    <EntitiesTile photo="https://i.picsum.photos/id/1049/200/200.jpg?hmac=9458e0GuMIU0518gk-YBqEGna1AnYjhDQGPEXFp-J04" company="Ala ma kota" address="Cukierkowa Street"/>
    <EntitiesTile photo="https://i.picsum.photos/id/1049/200/200.jpg?hmac=9458e0GuMIU0518gk-YBqEGna1AnYjhDQGPEXFp-J04" company="Ala ma kota" address="Cukierkowa Street"/>
    <EntitiesTile photo="https://i.picsum.photos/id/1049/200/200.jpg?hmac=9458e0GuMIU0518gk-YBqEGna1AnYjhDQGPEXFp-J04" company="Ala ma kota" address="Cukierkowa Street"/>
    <EntitiesTile photo="https://i.picsum.photos/id/1049/200/200.jpg?hmac=9458e0GuMIU0518gk-YBqEGna1AnYjhDQGPEXFp-J04" company="Ala ma kota" address="Cukierkowa Street"/>
    <EntitiesTile photo="https://i.picsum.photos/id/1049/200/200.jpg?hmac=9458e0GuMIU0518gk-YBqEGna1AnYjhDQGPEXFp-J04" company="Ala ma kota" address="Cukierkowa Street"/>
    <EntitiesTile photo="https://i.picsum.photos/id/1049/200/200.jpg?hmac=9458e0GuMIU0518gk-YBqEGna1AnYjhDQGPEXFp-J04" company="Ala ma kota" address="Cukierkowa Street"/>
    <EntitiesTile photo="https://i.picsum.photos/id/1049/200/200.jpg?hmac=9458e0GuMIU0518gk-YBqEGna1AnYjhDQGPEXFp-J04" company="Ala ma kota" address="Cukierkowa Street"/>
    <EntitiesTile photo="https://i.picsum.photos/id/1049/200/200.jpg?hmac=9458e0GuMIU0518gk-YBqEGna1AnYjhDQGPEXFp-J04" company="Ala ma kota" address="Cukierkowa Street"/>
    <EntitiesTile photo="https://i.picsum.photos/id/1049/200/200.jpg?hmac=9458e0GuMIU0518gk-YBqEGna1AnYjhDQGPEXFp-J04" company="Ala ma kota" address="Cukierkowa Street"/>
    <EntitiesTile photo="https://i.picsum.photos/id/1049/200/200.jpg?hmac=9458e0GuMIU0518gk-YBqEGna1AnYjhDQGPEXFp-J04" company="Ala ma kota" address="Cukierkowa Street"/>
    <EntitiesTile photo="https://i.picsum.photos/id/1049/200/200.jpg?hmac=9458e0GuMIU0518gk-YBqEGna1AnYjhDQGPEXFp-J04" company="Ala ma kota" address="Cukierkowa Street"/>
    <EntitiesTile photo="https://i.picsum.photos/id/1049/200/200.jpg?hmac=9458e0GuMIU0518gk-YBqEGna1AnYjhDQGPEXFp-J04" company="Ala ma kota" address="Cukierkowa Street"/>
    <EntitiesTile photo="https://i.picsum.photos/id/1049/200/200.jpg?hmac=9458e0GuMIU0518gk-YBqEGna1AnYjhDQGPEXFp-J04" company="Ala ma kota" address="Cukierkowa Street"/>
    <EntitiesTile photo="https://i.picsum.photos/id/1049/200/200.jpg?hmac=9458e0GuMIU0518gk-YBqEGna1AnYjhDQGPEXFp-J04" company="Ala ma kota" address="Cukierkowa Street"/>
    <EntitiesTile photo="https://i.picsum.photos/id/1049/200/200.jpg?hmac=9458e0GuMIU0518gk-YBqEGna1AnYjhDQGPEXFp-J04" company="Ala ma kota" address="Cukierkowa Street"/>
    <EntitiesTile photo="https://i.picsum.photos/id/1049/200/200.jpg?hmac=9458e0GuMIU0518gk-YBqEGna1AnYjhDQGPEXFp-J04" company="Ala ma kota" address="Cukierkowa Street"/>
    </EntitiesContainer>
)
interface IEntitiesTile{
    photo: string
    company: string
    address: string
  }

  const EntitiesTile: FC<IEntitiesTile> = (props) => {

    return (
        <Item>
            <Image src={props.photo} alt="" />
            <TextBox>
            <CompanyName>{props.company}</CompanyName>
            <Address>{props.address}</Address>
            </TextBox>
        </Item>)
  }

