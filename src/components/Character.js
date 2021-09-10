// Imports
import React from 'react'
import styled from 'styled-components'

// Styles
const Card = styled.div`
    background-color: white;
    opacity: 55%;
    width: 48%;
    display: block;
    margin: 2rem auto;
    padding: 10px;
    border: 10px solid grey;
`

const Name = styled.h1`
    font-size: 2rem;
    text-decoration: 5px underline grey;
`

const H2 = styled.h2`
    font-size: 1rem;
`

const Character = (props) => {
    const {characters} = props;


// Return
return (
    <div>
    {characters.map((res, index) => {
        return (
            <Card key = {index}>
                <Name>{res.name}</Name>
                <H2>Height: {res.height}</H2>
                <H2>Gender: {res.gender}</H2>
            </Card>
        )
    })}
    </div>
    )
}

// Exports
export default Character