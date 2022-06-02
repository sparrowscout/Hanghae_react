import { Button } from "@mui/material";
import React from "react";
import { useHistory } from "react-router-dom";
import styled from "styled-components";
import { addDictionaryFB } from "./redux/modules/dictionary";
import { useDispatch } from "react-redux";

const AddWord = () => {
    const dispatch = useDispatch();
    const history = useHistory();

    const word = React.useRef();
    const mean = React.useRef();
    const reference = React.useRef();

    const addDictionary = () => {
        dispatch(addDictionaryFB({ word: word.current.value, completed: false, mean: mean.current.value, reference: reference.current.value }))
        console.log(word.current.value)
        history.push("/")
    }

    return (
        <div>
            <Container>
                <div>
                    <span>단어 추가하기</span>
                    <Button onClick={() => { history.push("/"); }} style={{ position: "fixed", right: "0", top: "90px" }}>X</Button>
                </div>

                <InputDiv>
                    <input placeholder="단어" ref={word} />
                    <textarea placeholder="의미 또는 출처" ref={mean} />
                    <input placeholder="사용 예시" ref={reference} />

                </InputDiv>

                <Button variant="contained" sx={{ minWidth: "333px", margin: "30px auto", padding: "10px" }} onClick={addDictionary}>저장하기</Button>

            </Container>

        </div>




    );
};



const Container = styled.div`
margin-top: 20px;
min-width: 300px;
padding-top: 75px;

span {
    font-size: 20px;
    font-weight: bold;
}
`;

const InputDiv = styled.div`
margin-top: 20px;
display: flex;
flex-direction: column;
min-width: 300px;

input {

	border: solid 1px #0081ed;
    min-width: 300px;
    margin: 5px auto;
    padding: 15px;
    border-radius: 5px;
}

textarea {

    border: solid 1px #0081ed;
    min-width: 300px;
    margin: 5px auto;
    padding: 15px;
    border-radius: 5px;
    resize: none;
}
`;

export default AddWord;