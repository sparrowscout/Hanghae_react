import { Link, Route, useHistory } from "react-router-dom";
import Home from "./Home";
import ReviewDay from "./ReviewDay";
import React, { useState } from "react";
import styled from "styled-components";
import Average from "./Average";


function App() {
  const targetDay = React.useRef(null);
  const [day, setDay] = useState([
    "월",
    "화",
    "수",
    "목",
    "금",
    "토",
    "일"
  ]);


  let history = useHistory();
  return (
    <div className="App">

      <Link to="/">Home으로 가기</Link>
      <div onClick={() => {
        history.goBack();
      }}>뒤로가기</div>
      <Container>
        <Route path="/" exact>
          <Home day={day} targetDay={targetDay} />
          <Average/>
        </Route>
        <Route path="/reviewday" exact component={ReviewDay}>
          <ReviewDay targetDay={targetDay} />
        </Route>
      </Container>

    </div>
  );
}

const Container = styled.div`
margin: 40px auto;
        background-color: lavender;
        min-width: 8vh;
        max-width: 30vh;
        height: 80vh;
        flex-direction: column;
        padding: 40px;
        border-radius: 20px;
`;

export default App;
