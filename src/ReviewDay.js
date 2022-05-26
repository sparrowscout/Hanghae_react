import React, { useReducer } from "react";
import styled from "styled-components";
import { useParams, useHistory, Link } from "react-router-dom";
import ReviewStar from "./Star";


const ReviewDay = ({ targetDay }) => {
    let history = useHistory();
    targetDay = targetDay.current
    console.log(targetDay)
    // let what_day = day.map((day, i) => i)
    // console.log(what_day
    return (

        <div>
            <TargetDay> <span>{targetDay}요일</span> 평점 남기기 </TargetDay>
            <starAlign><ReviewStar /></starAlign>    
            <button onClick={() => {
                history.goBack();
            }} style={{
                margin: "20px",
                backgroundColor: "#8977ad",
                borderRadius: "30px",
                padding: "14px",
                width: "90%",
                border: "1px",
                color: "white",
                fontWeight: "bold",
                fontSize: "1.1em"
            }}>평점 남기기</button>
        </div>

    )
}

const starAlign = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin: 1rem 0px;
`;

const TargetDay = styled.h1`
text-align: center;
word-break: keep-all;
span {
    background-color: orange;
    border-radius: 10px;
}
`;

// const Btn = styled.button`
//  margin: 0.1em 0em;
//  background-color: #8977ad;
// border-radius: 30px;
// padding: 14px;
// width: 90%;
// border: 1px;
// color: white;
// font-weight: bold;
// font-size: 1.1em;
// `;


export default ReviewDay;