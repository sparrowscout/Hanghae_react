import React from "react";
import styled from "styled-components";
import ReviewStar from "./Star";
import { useState } from "react";



const Average = ({star}) => {

    const [randomNum, setNum] = React.useState(Math.ceil(Math.random() * 500) / 100);
    return (
        <Container>
            <Num>평균 평점<br />
                {randomNum}</Num>
            <ResetBtn onClick={(randomNum) => {
                setNum(randomNum = 0.00)
            }}> Reset</ResetBtn>
        </Container>



    )
}

const Container = styled.div`
display: flex;
justify-content: center;
align-items: center;
flex-direction: column;
`;

const ResetBtn = styled.button`
margin: 0.1em 0em;
    background-color: #8977ad;
    border-radius: 30px;
    padding: 14px;
    width: 100px;
    border: 1px;
    color: white;
    font-weight: bold;
    font-size: 1.1em;
`;

const Num = styled.div`
        font-weight: bold;
        font-size: 1.5em;
        margin: 20px 0px;
        text-align: center;
`;

export default Average;