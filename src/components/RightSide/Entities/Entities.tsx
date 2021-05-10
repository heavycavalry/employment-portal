import React, {FC} from 'react'
import styled from 'styled-components'
import { EntitiesActionButtons } from './EntitiesActionButtons'
import { Filters } from './Filters'
import { TopEntities } from './TopEntities'

const Container = styled.div`
font-size: 0.9rem;
`
export const EntitiesContainer = styled.div`
margin-top: 20px;
display: grid;
grid-template-columns: repeat(auto-fit, minmax(260px, 1fr));
grid-gap: 1rem;
`
export const Item = styled.div`
width: 280px;
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
padding: 10px;
font-size: 1.1rem;
color: var(--darkGray);
`
const Address = styled.p`
padding: 10px;
color: var(--darkGray);
`

interface IEntitiesTile {
    photo: string;
}

export const Entities: FC = () => (
    
    <Container>
        <TopEntities />
        <EntitiesActionButtons />
        <Filters/>
        <EntitiesTiles/>
    </Container>
)
export const entitiesTileArray = [
    {
        photo: "https://i.picsum.photos/id/196/200/200.jpg?hmac=sQvBWK3YS9nyc8fxqMAEar9EpxOlkMcWL-VePbARdIU",
        company: "World company SAS",
        address: "Caracas 1050, Distrito Capital, Venezuela"
    },
    {
        photo: "https://i.picsum.photos/id/881/200/200.jpg?hmac=34beeNIxYSbYK-_PTy_YXvWyn11npGQSygCM7hjOUFo",
        company: "Subsid Corp Ltd",
        address: "Caracas 1050, Distrito Capital, Venezuela"
    },
    {
        photo: "https://i.picsum.photos/id/196/200/200.jpg?hmac=sQvBWK3YS9nyc8fxqMAEar9EpxOlkMcWL-VePbARdIU",
        company: "World company SAS",
        address: "Caracas 1050, Distrito Capital, Venezuela"
    },
    {
        photo: "https://i.picsum.photos/id/881/200/200.jpg?hmac=34beeNIxYSbYK-_PTy_YXvWyn11npGQSygCM7hjOUFo",
        company: "Subsid Corp Ltd",
        address: "Caracas 1050, Distrito Capital, Venezuela"
    },
    {
        photo: "https://i.picsum.photos/id/196/200/200.jpg?hmac=sQvBWK3YS9nyc8fxqMAEar9EpxOlkMcWL-VePbARdIU",
        company: "World company SAS",
        address: "Caracas 1050, Distrito Capital, Venezuela"
    },
    {
        photo: "https://i.picsum.photos/id/881/200/200.jpg?hmac=34beeNIxYSbYK-_PTy_YXvWyn11npGQSygCM7hjOUFo",
        company: "Subsid Corp Ltd",
        address: "Caracas 1050, Distrito Capital, Venezuela"
    },
    {
        photo: "https://i.picsum.photos/id/196/200/200.jpg?hmac=sQvBWK3YS9nyc8fxqMAEar9EpxOlkMcWL-VePbARdIU",
        company: "World company SAS",
        address: "Caracas 1050, Distrito Capital, Venezuela"
    },
    {
        photo: "https://i.picsum.photos/id/881/200/200.jpg?hmac=34beeNIxYSbYK-_PTy_YXvWyn11npGQSygCM7hjOUFo",
        company: "Subsid Corp Ltd",
        address: "Caracas 1050, Distrito Capital, Venezuela"
    },
    {
        photo: "https://i.picsum.photos/id/196/200/200.jpg?hmac=sQvBWK3YS9nyc8fxqMAEar9EpxOlkMcWL-VePbARdIU",
        company: "World company SAS",
        address: "Caracas 1050, Distrito Capital, Venezuela"
    },
    {
        photo: "https://i.picsum.photos/id/881/200/200.jpg?hmac=34beeNIxYSbYK-_PTy_YXvWyn11npGQSygCM7hjOUFo",
        company: "Subsid Corp Ltd",
        address: "Caracas 1050, Distrito Capital, Venezuela"
    },
    {
        photo: "https://i.picsum.photos/id/196/200/200.jpg?hmac=sQvBWK3YS9nyc8fxqMAEar9EpxOlkMcWL-VePbARdIU",
        company: "World company SAS",
        address: "Caracas 1050, Distrito Capital, Venezuela"
    },
    {
        photo: "https://i.picsum.photos/id/881/200/200.jpg?hmac=34beeNIxYSbYK-_PTy_YXvWyn11npGQSygCM7hjOUFo",
        company: "Subsid Corp Ltd",
        address: "Caracas 1050, Distrito Capital, Venezuela"
    },
    {
        photo: "https://i.picsum.photos/id/196/200/200.jpg?hmac=sQvBWK3YS9nyc8fxqMAEar9EpxOlkMcWL-VePbARdIU",
        company: "World company SAS",
        address: "Caracas 1050, Distrito Capital, Venezuela"
    },
    {
        photo: "https://i.picsum.photos/id/881/200/200.jpg?hmac=34beeNIxYSbYK-_PTy_YXvWyn11npGQSygCM7hjOUFo",
        company: "Subsid Corp Ltd",
        address: "Caracas 1050, Distrito Capital, Venezuela"
    }
    ,
    {
        photo: "https://i.picsum.photos/id/196/200/200.jpg?hmac=sQvBWK3YS9nyc8fxqMAEar9EpxOlkMcWL-VePbARdIU",
        company: "World company SAS",
        address: "Caracas 1050, Distrito Capital, Venezuela"
    },
    {
        photo: "https://i.picsum.photos/id/881/200/200.jpg?hmac=34beeNIxYSbYK-_PTy_YXvWyn11npGQSygCM7hjOUFo",
        company: "Subsid Corp Ltd",
        address: "Caracas 1050, Distrito Capital, Venezuela"
    }
    ,
    {
        photo: "https://i.picsum.photos/id/196/200/200.jpg?hmac=sQvBWK3YS9nyc8fxqMAEar9EpxOlkMcWL-VePbARdIU",
        company: "World company SAS",
        address: "Caracas 1050, Distrito Capital, Venezuela"
    },
    {
        photo: "https://i.picsum.photos/id/881/200/200.jpg?hmac=34beeNIxYSbYK-_PTy_YXvWyn11npGQSygCM7hjOUFo",
        company: "Subsid Corp Ltd",
        address: "Caracas 1050, Distrito Capital, Venezuela"
    }
    ,
    {
        photo: "https://i.picsum.photos/id/196/200/200.jpg?hmac=sQvBWK3YS9nyc8fxqMAEar9EpxOlkMcWL-VePbARdIU",
        company: "World company SAS",
        address: "Caracas 1050, Distrito Capital, Venezuela"
    },
    {
        photo: "https://i.picsum.photos/id/881/200/200.jpg?hmac=34beeNIxYSbYK-_PTy_YXvWyn11npGQSygCM7hjOUFo",
        company: "Subsid Corp Ltd",
        address: "Caracas 1050, Distrito Capital, Venezuela"
    }
]

export const EntitiesTiles: FC = () => (

    <EntitiesContainer className="entities-container">
           {entitiesTileArray.map(value => <EntitiesTile photo={value.photo} company={value.company} address={value.address}/>)}
    </EntitiesContainer>
)
interface IEntitiesTile{
    photo: string
    company: string
    address: string
  }

  const EntitiesTile: FC<IEntitiesTile> = (props) => {

    return (
        <Item className="entities-tile-box">
            <Image src={props.photo} alt="" />
            <TextBox>
            <CompanyName>{props.company}</CompanyName>
            <Address>{props.address}</Address>
            </TextBox>
        </Item>)
  }

