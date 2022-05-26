import React, { useReducer, useRef } from "react";
import { useParams, useHistory } from "react-router-dom";
import styled from "styled-components";
import Average from "./Average";
import ReviewStar from "./Star";

const Home = ({ day, targetDay }) => {
    let history = useHistory();

    return (

        <div style={{ textAlign: "center", wordBreak: "keep-all" }}>
            <h1> 내 일주일은? </h1>
            {day.map((i) => {
                return (
                    <Day key={i} ref={targetDay} style={{
                    }}>
                        <span>{i}</span>
                        <ReviewStar isRandom={true}></ReviewStar>
                        <Btn onClick={() => {
                            history.push("/reviewday");
                            targetDay.current = i;
                        }}
                        />
                    </Day>
                );
            })}

        </div>

    )

}

const Day = styled.div`
display: flex;
justify-content: center;
align-items: center;
width: 100%;
margin:20px 0px;

span {
margin-right: 10px;
}
`;

const Btn = styled.div`
margin-left: 10px;
width: 0;
height: 0;
border-bottom: 18px solid transparent;
border-top: 18px solid transparent;
border-left: 28px solid skyblue;
 border-right: 28px solid transparent
`;



export default Home;