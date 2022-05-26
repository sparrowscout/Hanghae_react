import React from "react";
import { useState } from "react";
import styled from "styled-components";
import Average from "./Average";
// import { useDispatch } from "react-redux";

const ReviewStar = ({ isRandom }) => {

  const randomNum = Math.floor(Math.random() * 6);
  const [star, setstar] = React.useState(isRandom ? randomNum : -1);
  

  // let what_star = React.useRef()
  // const [star, setStar] = useState([1,2,3,4,5]);
  // console.log(what_star.current)
  // const dispatch = useDispatch();

  React.useEffect(() => {
    !isRandom &&
      window.addEventListener("keypress", (e) => {
        if (e.key >= 1 && e.key <= 5) {
          setstar(e.key - 1);
        }
      });
  }, [star, isRandom]);

  return (
    <StarWrap>
      {Array.from({ length: 5 }, (_, i) => {
      
        return (
          <Star
            isRandom={isRandom}
            key={i}
            
            onClick={() => {
              setstar(i);
            }}
            className={i <= star ? "active" : null}></Star>
        )
      })}
      
    </StarWrap>

  )
}
// <div style={{
//     display: "flex",
//     justifyContent: "center",
//     alignItems: "center",
//     width: "100%",
//     margin: "5px 0px"
// }}
// >

//     <div onClick={() => {
//         // dispatch();
//     }} style={{
//         width: "30px",
//         height: "30px",
//         borderRadius: "30px",
//         backgroundColor: "#fff",
//         margin: "5px"
//     }} />
//     <div ref={what_star} style={{
//         width: "30px",
//         height: "30px",
//         borderRadius: "30px",
//         backgroundColor: "#fff",
//         margin: "5px"
//     }} />
//     <div ref={what_star} style={{
//         width: "30px",
//         height: "30px",
//         borderRadius: "30px",
//         backgroundColor: "#fff",
//         margin: "5px"
//     }} />
//     <div ref={what_star} style={{
//         width: "30px",
//         height: "30px",
//         borderRadius: "30px",
//         backgroundColor: "#fff",
//         margin: "5px"
//     }} />
//     <div ref={what_star} style={{
//         width: "30px",
//         height: "30px",
//         borderRadius: "30px",
//         backgroundColor: "#fff",
//         margin: "5px"
//     }} />
// </div>


const StarWrap = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Star = styled.span`
  display: inline-block;
  width: 40px;
  height: 40px;
  margin: 4px;
  background-color: #fff;
  border-radius: 100%;
  ${({ isRandom }) =>
    isRandom &&
    `width: 30px;
  height: 30px;`};
  &.active {
    background-color: orange;
  }
`;


export default ReviewStar;